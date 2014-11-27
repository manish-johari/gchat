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
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"email\": \"Email has already been taken.\", \n\t\t\"generic_errors\": \"Email has already been taken.\" \n\t}\n}"
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
          "content": "{\n\t\"user_id\": 1, \n\t\"auth_token\": \"xyzabc\", \n\t\"is_confirmed\": true, \n\t\"provider\": true, \n\t\"has_basic_profile\": false\n}\n"
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
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"confirmation_token\": \"confirmation token is not valid.\", \n\t\t\t\"generic_errors\": \"confirmation token is not valid.\"\n\t\t}\n}\n"
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
          "content": "{\n\t \"user_id\": \"2\"\n\t \"is_confirmed\": true \n\t \"auth_token\":\"A8xfUFZyWoLRzvmgFqe8\", \n\t\"provider\": true, \n\t\"has_basic_profile\": false \n}\n"
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
            "field": "profile[birthdate]",
            "optional": false,
            "description": "<p>provide birthdate of the user</p> Format : <b>YYYY/MM/DD</b>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[gender]",
            "optional": false,
            "description": "<p>provide gender of the user <b>'M' or 'F'</b></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[lat]",
            "optional": false,
            "description": "<p>provide latitude of a place or city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[long]",
            "optional": false,
            "description": "<p>provide longitude of a place or city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[location]",
            "optional": false,
            "description": "<p>provide location of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[language_id]",
            "optional": false,
            "description": "<p>provide id of language selected by user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[relationship_id]",
            "optional": true,
            "description": "<p>provide id for relationship status of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[education_id]",
            "optional": true,
            "description": "<p>provide education_id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "profile[profile_images_attributes][][media]",
            "optional": true,
            "description": "<p>provide profile image of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "<p>provide authentication token of user.</p>"
          }
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
    "type": "post",
    "url": "/users/password",
    "title": "Forgot password",
    "name": "forgot_password",
    "description": "Get token to reset password.",
    "group": "Password",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "<p>Provide email of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"message\": \"You will receive an email with instructions on how to reset your password in a few minutes.\"\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422)",
          "content": "{\n\t\"errors\":\n\t\t{\n\t\t\t\"email\": \"Email not found\",\n\t\t\t\"generic_errors\": \"Email not found\"\n\t\t}\n}"
        }
      ]
    }
  },

  {
    "type": "put",
    "url": "/users/password",
    "title": "Update password",
    "name": "update_password",
    "description": "Update password.",
    "group": "Password",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "<p>Provide new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[reset_password_token]",
            "optional": false,
            "description": "<p>Provide reset password token received on email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"message\": \"Your password has been changed successfully.\"\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422)",
          "content": "{\n\t\"errors\":\n\t\t{\n\t\t\t\"reset_password_token\": \"Reset password token is invalid\",\n\t\t\t\"generic_errors\": \"Reset password token is invalid\"\n\t\t}\n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/languages",
    "title": "Get languages",
    "name": "get_languages",
    "description": "Get all languages.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"languages\": [{\"id\":1,\"name\":\"Arabic\",\"code\":\"ar\"},{\"id\":2,\"name\":\"Bulgarian\",\"code\":\"bg\"},{\"id\":3,\"name\":\"Catalan\",\"code\":\"ca\"},{\"id\":4,\"name\":\"Chinese (Simplified)\",\"code\":\"zh-CHS\"},{\"id\":5,\"name\":\"Chinese (Traditional)\",\"code\":\"zh-CHT\"},{\"id\":6,\"name\":\"Czech\",\"code\":\"cs\"},{\"id\":7,\"name\":\"Danish\",\"code\":\"da\"},{\"id\":8,\"name\":\"Dutch\",\"code\":\"nl\"},{\"id\":9,\"name\":\"English\",\"code\":\"en\"},{\"id\":10,\"name\":\"Estonian\",\"code\":\"et\"},{\"id\":12,\"name\":\"Finnish\",\"code\":\"fi\"},{\"id\":13,\"name\":\"French\",\"code\":\"fr\"},{\"id\":14,\"name\":\"German\",\"code\":\"de\"},{\"id\":15,\"name\":\"Greek\",\"code\":\"el\"},{\"id\":16,\"name\":\"Haitian Creole\",\"code\":\"ht\"},{\"id\":17,\"name\":\"Hebrew\",\"code\":\"he\"},{\"id\":18,\"name\":\"Hindi\",\"code\":\"hi\"},{\"id\":27,\"name\":\"Hmong Daw\",\"code\":\"mww\"},{\"id\":19,\"name\":\"Hungarian\",\"code\":\"hu\"},{\"id\":20,\"name\":\"Indonesian\",\"code\":\"id\"},{\"id\":21,\"name\":\"Italian\",\"code\":\"it\"},{\"id\":22,\"name\":\"Japanese\",\"code\":\"ja\"},{\"id\":23,\"name\":\"Korean\",\"code\":\"ko\"},{\"id\":24,\"name\":\"Latvian\",\"code\":\"lv\"},{\"id\":25,\"name\":\"Lithuanian\",\"code\":\"lt\"},{\"id\":26,\"name\":\"Malay\",\"code\":\"ms\"},{\"id\":28,\"name\":\"Norwegian\",\"code\":\"no\"},{\"id\":11,\"name\":\"Persian (Farsi)\",\"code\":\"fa\"},{\"id\":29,\"name\":\"Polish\",\"code\":\"pl\"},{\"id\":30,\"name\":\"Portuguese\",\"code\":\"pt\"},{\"id\":31,\"name\":\"Romanian\",\"code\":\"ro\"},{\"id\":32,\"name\":\"Russian\",\"code\":\"ru\"},{\"id\":33,\"name\":\"Slovak\",\"code\":\"sk\"},{\"id\":34,\"name\":\"Slovenian\",\"code\":\"sl\"},{\"id\":35,\"name\":\"Spanish\",\"code\":\"es\"},{\"id\":36,\"name\":\"Swedish\",\"code\":\"sv\"},{\"id\":37,\"name\":\"Thai\",\"code\":\"th\"},{\"id\":38,\"name\":\"Turkish\",\"code\":\"tr\"},{\"id\":39,\"name\":\"Ukrainian\",\"code\":\"uk\"},{\"id\":40,\"name\":\"Urdu\",\"code\":\"ur\"},{\"id\":41,\"name\":\"Vietnamese\",\"code\":\"vi\"}]\n}"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/educations",
    "title": "Get educations",
    "name": "get_educations",
    "description": "Get all educations.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"educations\": [{\"id\":1,\"name\":\"Elementary\"},{\"id\":2,\"name\":\"Middle or Junior High\"},{\"id\":3,\"name\":\"High School\"},{\"id\":4,\"name\":\"College/University\"}]\n}"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/relationships",
    "title": "Get relationships",
    "name": "get_relationships",
    "description": "Get all relationships.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"relationships\": [{\"id\":1,\"name\":\"Single\"},{\"id\":2,\"name\":\"Married\"},{\"id\":3,\"name\":\"In Relationship\"},{\"id\":4,\"name\":\"Divorced\"},{\"id\":5,\"name\":\"Separated\"},{\"id\":6,\"name\":\"Engaged\"},{\"id\":7,\"name\":\"It's Complicated\"}]\n}"
        }
      ]
    },
  }



]});