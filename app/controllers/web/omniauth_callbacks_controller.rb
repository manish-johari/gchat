class Web::OmniauthCallbacksController < Devise::OmniauthCallbacksController

    skip_before_filter :authenticate_user!
    def all
        puts "-----------------------------------------------------------------"
        p env["omniauth.auth"]
        puts "-----------------------------------------------------------------"
        user = User.from_omniauth(env["omniauth.auth"], current_user)
        if user.persisted?
            flash[:notice] = "You are in..!!! Go to edit profile to see the status for the accounts"
            sign_in(user)
            if user.sign_in_count == 1
              redirect_to user_edit_profile_path(user)
            else
              sign_in_and_redirect(user)
            end
        else
            session["devise.user_attributes"] = user.attributes
            redirect_to new_user_registration_url
        end
    end

      def failure
        #handle you logic here..
        #and delegate to super.
        super
      end


    alias_method :facebook, :all
    # alias_method :twitter, :all
    # alias_method :linkedin, :all
    # alias_method :github, :all
    # alias_method :passthru, :all
    # alias_method :google_oauth2, :all
end