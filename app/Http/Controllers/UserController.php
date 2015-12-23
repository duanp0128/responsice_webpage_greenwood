<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Log;
use Validator;
use Crypt;
use App\Models\User;
use Illuminate\Http\Request;
use Facebook;


class UserController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		// return view('home');
	}

    /**
     * Check unique username
     */
    public function checkUserName($username) {
        // $data = $request->all()['name'];    it's ok for get data from GET request
        if (isset($username) == false) {
            $code = 400;
            $msg = '請求錯誤';
        } else {
            $user = User::where('username', '=', $username)->first();
            if (isset($user) == true) {
                $code = 402;
                $msg = '用戶名已存在';
            } else {
                $code = 200;
                $msg = '成功';
            }
        }

        return [
            'code' => $code,
            'msg' => $msg
        ];
    }

    /**
     * Check unique email
     */
    public function checkEmail($email) {
        if (isset($email) == false) {
            $code = 400;
            $msg = '請求錯誤';
        } else {
            $user = User::where('email', '=', $email)->first();
            if (isset($user) == true) {
                $code = 402;
                $msg = '該email已使用';
            } else {
                $code = 200;
                $msg = '成功';
            }
        }

        return [
            'code' => $code,
            'msg' => $msg
        ];
    }

    /**
     * Check unique uuid
     */
    public function checkDeviceId($uuid) {
        if (isset($uuid) == false) {
            $code = 400;
            $msg = '請求錯誤';
        } else {
            $user = User::where('uuid', '=', $uuid)->first();
            if (isset($user) == true) {
                $code = 402;
                $msg = '該設備已註冊';
            } else {
                $code = 200;
                $msg = '成功';
            }
        }

        return [
            'code' => $code,
            'msg' => $msg
        ];
    }

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
	   $data = $request->all();
       $data["password"] = Crypt::encrypt($data["password"]);

       $validator = Validator::make($data, [
           'username' => 'required|unique:users',
           'email' => 'required|email|unique:users',
           'password' => 'required',
          //  'birth' => 'required',
          //  'sex' => 'required',
          //  'address' => 'required|max:255',
           'uuid' => 'required|max:255|unique:users'
          //  'device_platform' => 'required'
       ]);

	   if ($validator->fails())
       {
           $code = 400;
           $msg = '註冊信息錯誤';
       } else {
           try {
               $user = User::create($data);
               $user->create_time = date('Y-m-d H:i:s');
               if ($user->save()) {
                   $code = 200;
                   $msg = '成功';
               }else {
                   throw Exception('DB ERROR');
               }
           } catch (Exception $e) {
                $code = 405;
                $msg = '用戶創建失敗';
           }
       }

       return [
           'code' => $code,
           'msg' => $msg
       ];

	}

    /**
     * Store a Facebook newly created resource in storage.
     *
     * @return Response
     */
    public function storeFbUser(Request $request)
    {
       $data = $request->all();
       $fbUserId = $data['fbUserID'];
       $fbAccessToken = $data['accessToken'];

       //get data from fb
       Facebook::createSession($fbAccessToken);
       $user = Facebook::user();
       $session = Facebook::getSession();
       $info = $session->getSessionInfo();
       // Log::info(print_r($info, true));
       $user = new User;
       $user->facebook_id = $fbUserId;
       $user->facebook_token = $fbAccessToken;
       $user->save();

       return [
            // 'status' => $request->all(),
            'data' => $info
            // 'pd' => $data['pd'],
            // 'code' => 400
       ];
       // Log::info($data['fbUserId']);
    }

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		Log::info($id);

        return $id;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
