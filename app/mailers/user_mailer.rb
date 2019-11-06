class UserMailer < ApplicationMailer
  def account_activation user
    @user = user

    mail to: user.email, subject: t("page.acc_activation.text5")
  end

  def password_reset user
    @user = user

    mail to: user.email, subject: t("page.pass_reset.reset")
  end
end
