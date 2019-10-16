I18n.translations || (I18n.translations = {});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), {"errors":{"messages":{"content_type_invalid":"hat einen ungültigen Dateityp","dimension_height_equal_to":"Höhe muss genau %{length} Pixel sein","dimension_height_greater_than_or_equal_to":"Höhe muss größer oder gleich %{length} Pixel sein","dimension_height_inclusion":"Höhe ist nicht zwischen %{min} und %{max} Pixel enthalten","dimension_height_less_than_or_equal_to":"Höhe muss kleiner oder gleich %{length} Pixel sein","dimension_max_inclusion":"muss kleiner oder gleich %{width} x %{height} Pixel sein","dimension_min_inclusion":"muss größer oder gleich %{width} x %{height} Pixel sein","dimension_width_equal_to":"Breite muss genau %{length} Pixel sein","dimension_width_greater_than_or_equal_to":"Breite muss größer oder gleich %{length} Pixel sein","dimension_width_inclusion":"Breite ist nicht zwischen %{min} und %{max} Pixel enthalten","dimension_width_less_than_or_equal_to":"Breite muss kleiner oder gleich %{length} Pixel sein","file_size_out_of_range":"Dateigröße von %{file_size} ist außerhalb des erlaubten Bereichs","image_metadata_missing":"ist nicht ein gültigen Bild","limit_out_of_range":"Anzahl ist außerhalb des gültigen Bereichs"}}});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","aspect_ratio_is_not":"doesn't contain aspect ratio of %{aspect_ratio}","aspect_ratio_not_landscape":"doesn't contain a landscape image","aspect_ratio_not_portrait":"doesn't contain a portrait image","aspect_ratio_not_square":"doesn't a square image","aspect_ratio_unknown":"has an unknown aspect ratio","blank":"can't be blank","confirmation":"doesn't match %{attribute}","content_type_invalid":"has an invalid content type","dimension_height_equal_to":"height must be equal to %{length} pixel","dimension_height_greater_than_or_equal_to":"height must be greater than or equal to %{length} pixel","dimension_height_inclusion":"height is not included between %{min} and %{max} pixel","dimension_height_less_than_or_equal_to":"height must be less than or equal to %{length} pixel","dimension_max_inclusion":"must be less than or equal to %{width} x %{height} pixel","dimension_min_inclusion":"must be greater than or equal to %{width} x %{height} pixel","dimension_width_equal_to":"width must be equal to %{length} pixel","dimension_width_greater_than_or_equal_to":"width must be greater than or equal to %{length} pixel","dimension_width_inclusion":"width is not included between %{min} and %{max} pixel","dimension_width_less_than_or_equal_to":"width must be less than or equal to %{length} pixel","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","file_size_out_of_range":"size %{file_size} is not between required range","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","image_metadata_missing":"is not a valid image","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","limit_out_of_range":"total number is out of range","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"page":{"acc_activation":{"acc_activated":"Account activated!","activate":"Activate","invalid_link":"Invalid activation link","text1":"Hi","text2":"Welcome to Sample App! Click on the link below to activate your account","text3":"Account not activated. Check your email for activation link.","text5":"Account activation"},"content":{"about":"This is the sample app for the tutorial.","contact1":"Contact the","contact2":"about the sample app.","help":"Get help on the.","home":"This is the home page for the sample application.","signup":"This will be a signup page for new users."},"edit":{"change":"Change","confirm":"You sure?","del_success":"User deleted","del_unsuccess":"Delete fail","delete":"Delete","not_admin":"You aren't admin","save":"Save changes","success":"Profile updated","update":"Update your profile"},"follow":{"follow":"Follow","followers":"Followers","following":"Following","unfollow":"Unfollow"},"index":{"confirm":"Confirmation","email":"Email","login":"Login","name":"Name","not_found":"User not found.","not_login":"Please log in.","password":"Password","signup":"Sign up now!","submit":"Submit","update":"Update"},"login":{"account":"Account","danger":"Invalid email/password conbination","forgot":"(forgot password)","logout":"Log out","new_user":"New user?","profile":"Profile","remember":"Remember me on this computer","settings":"Settings","users":"Users"},"micropost":{"compose":"Compose new micropost...","create":"Micropost created!","del_fail":"Delete fail","del_success":"Micropost deleted","delete":"delete","img_alert":"Maximum file size is 5MB. Please choose a smaller file.","img_mess1":"must be a valid image format","img_mess2":"should be lesss than 5MB","micropost":"Microposts","post":"Post","text1":"Posted ","text2":"ago.","view":"View profile"},"pass_reset":{"email_not_found":"Email address not found","email_sent":"Email sent with password reset instructions","empty":"can't be empty.","expired":"Password reset has expired.","reset":"Password reset","success":"Password has been reset.","text1":"To reset password please click the link below:","text2":"This link will expire in 2 hours.","text3":"If you did not request your password reset, please ignore this email and your password will stay as it is."},"signup":{"activate":"Please check your email to activate your account","create":"Create my account","error":"error","form":"The form contains","success":"Welcome to the Sample App!"},"title":{"about":"About","basic_title":"Ruby on Rails Tutorial Sample App","contact":"Contact","edit":"Edit user","forgot":"Forgot password","help":"Help","home":"Sample App","home2":"Home","index":"All users","login":"Log in","micropost":"Micropost feed","news":"News","reset":"Password reset","signup":"Sign up"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
I18n.translations["vn"] = I18n.extend((I18n.translations["vn"] || {}), {"page":{"content":{"about":"Đây là ứng dụng mẫu cho hướng dẫn.","contact1":"Liên hệ","contact2":"về ứng dung mẫu.","help":"Trợ giúp về.","home":"Đây là trang chủ cho ứng dụng mẫu.","signup":"Đây sẽ là trang đăng ký cho người dùng."},"index":{"login":"Đăng nhập","signup":"Đăng ký ngay!"},"title":{"about":"Giới thiệu","basic_title":"Ứng dụng mẫu Ruby on Rails","contact":"Liên hệ","help":"Trợ giúp","home":"Ứng dụng mẫu","home2":"Trang chủ","news":"Tin tức","signup":"Đăng ký"}}});
