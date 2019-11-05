class UserMailer < ApplicationMailer
  def account_activation user
    @user = user

    mail to: user.email, subject: t("page.acc_activation.text5")
  end
end
