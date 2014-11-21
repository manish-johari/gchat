define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "Sign up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the Email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the Password."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\":  2,\n\t\"is_confirmed\": false,\n\t\"auth_token\": \"xyzabc\" \n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"email\": \"Email has already been taken.\", \n\t\t\"errors\": \"Email has already been taken.\" \n\t}\n}"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in/facebook",
    "title": "Connect with facebook",
    "name": "User_Login_From_Facebook",
    "description": "API will login the user from facebook.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "provider_id",
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
            "field": "access_token",
            "optional": false,
            "description": "<p>Provide the facebook access token</p>"
          },
        ],
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\": 1, \n\t\"auth_token\": \"xyzabc\", \n\t\"is_confirmed\": true\n}\n"
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
    "version": "1",
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
    "version": "2",
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
    "type": "get",
    "url": "/users/confirmation",
    "title": "Confirm token",
    "name": "Confirm_Token",
    "description": "API will verify the confirmation token.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "confirmation_token",
            "optional": false,
            "description": "Provide the confirmation_token sent to user via email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the auth_token."
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
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"confirmation_token\": \"confirmation token is not valid.\", \n\t\t\t\"errors\": \"confirmation token is not valid.\"\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in",
    "title": "Sign in",
    "name": "User_signin",
    "description": "API will sign in the user.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the email"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the password"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"user_id\": \"2\"\n\t \"is_confirmed\": true \n\t \"auth_token\":\"A8xfUFZyWoLRzvmgFqe8\" \n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/profile",
    "title": "create profile",
    "name": "create_profile",
    "description": "create user's profile.",
    "group": "Profile",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[user_id]",
            "optional": false,
            "description": "<p>provide user_id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[first_name]",
            "optional": false,
            "description": "<p>provide first name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[last_name]",
            "optional": false,
            "description": "<p>provide last name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[dob]",
            "optional": false,
            "description": "<p>provide birthday of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[gender_id]",
            "optional": false,
            "description": "<p>provide id for gender of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[country_id]",
            "optional": false,
            "description": "<p>provide country id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[city_id]",
            "optional": false,
            "description": "<p>provide city id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[screen_name]",
            "optional": false,
            "description": "<p>provide screen name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[relationship_status_id]",
            "optional": false,
            "description": "<p>provide id for relationship status of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[education_info_id]",
            "optional": false,
            "description": "<p>provide education_info_id of the user</p>"
          },
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/interests",
    "title": "create myinterests",
    "name": "create_myinterests",
    "description": "create user's interests.",
    "group": "Interests",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[religion]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[pets]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[sports]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[politics]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[hobbies]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[music]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[movies]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "interests[collecting]",
            "optional": false,
            "description": "<p>provide array of selected ids</p>"
          },
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },
  {
    "type": "get",
    "url": "/interests",
    "title": "show myinterests",
    "name": "get_myinterests",
    "description": "create user's interests.",
    "group": "Interests",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"religion\"=> \"{{:name => \"hinduism\", :id => 1, :is_selected => true}, {:name => \"islam\", :id => 2, :is_selected => true}}\", \n\t \"pets\"=> \"{{:name => \"dog\", :id => 3, :is_selected => true}, {:name => \"cat\", :id => 4, :is_selected => false}}\"\n}\n"
        }
      ]
    },
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "show profile",
    "name": "get_profile",
    "description": "Get user profile.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"profile\"=> \"{:user_id => \"1\", :first_name => \"manish\"}\n}\n"
        }
      ]
    },
  }


]});