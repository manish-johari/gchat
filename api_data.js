define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "sign_up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "Provide the Email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "Provide the Password."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password_confirmation",
            "optional": false,
            "description": "Provide the Password again."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\":  2, \n\t\"is_active\": false\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (409):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"email\": [\"Email has already been taken.\"]\n\t}\n}"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in",
    "title": "Connect with facebook",
    "name": "User_Login_From_Facebook",
    "description": "API will login the user from facebook.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_user_id",
            "optional": false,
            "description": "<p>Social Network ID via which user is connected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "provider",
            "optional": false,
            "defaultValue": "facebook",
            "description": "<p>Social Network via which user is connected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_access_token",
            "optional": false,
            "description": "<p>Provide the facebook access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "email",
            "optional": true,
            "description": "<p>User's email id fetched from fb.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": true,
            "description": "<p>First Name of user fetched from FB.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": true,
            "description": "<p>Name of user fetched from FB.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "birthdate",
            "optional": true,
            "description": "<p>Format YYYY-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "gender",
            "optional": true,
            "description": "<p>Allowed value m/f</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "mobile",
            "optional": true,
            "description": "<p>Provide Mobile number.</p>"
          }


        ],
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t \"user_id\": 1, \n\t\"auth_token\": \"xyzabc\",  \n\t\"is_active\": true \n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422): Invalid gender and Invaid Mobile",
          "content": "{\n\t\"errors\": \n\t{ \n\t\t \"gender\": [\"Invalid.\"], \n\t\t \"mobile\": [\"Invalid.\"] \n\t}\n}\n"
        },
        {
          "title": "Error (422): Invalid mobile",
          "content": "{\n\t\"errors\": \n\t{ \n\t\t \"mobile\": [\"Invalid.\"]\n\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "delete",
    "url": "/users/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the authentication token"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "delete",
    "url": "/users/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "Login",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the authentication token"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/user/verify_code",
    "title": "Code verification",
    "name": "Code_Verification",
    "description": "API will verify the Verification_Code.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "verification_code",
            "optional": false,
            "description": "Provide the verification code"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t { \n\t\t\t\"verification_code\": [\"verification code is not valid.\"]\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/verify_code",
    "title": "Code verification",
    "name": "Code_Verification",
    "description": "API will verify the Verification_Code.",
    "group": "Login",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "verification_code",
            "optional": false,
            "description": "Provide the verification code"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n \"message\": \"ok\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t { \n\t\t\t\"verification_code\": [\"verification code is not valid.\"]\n\t\t}\n}\n"
        }
      ]
    },
  },


]});