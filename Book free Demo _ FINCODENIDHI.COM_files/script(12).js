(function(props,context) {
        Core.utils.renderBootstrap({
          elId:'bs-9',
          componentName:'AutoIframe',
          props:props,
          context:context,
          contextKey:'context-bs-1',
          radpack:""
        });
      })({"data-aid":"AUTOIFRAME_RENDERED","htmlSrc":"\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n\u003Cstyle\u003E\n\n#mainCaptcha{\nposition: relative;\nleft : 60px;\ntop: 5px;\n\n}\n\n#refresh{\nposition:relative;\nleft:200px;\nwidth:100px;\nheight:30px;\nbottom:10px;\nbackground-image: url(rpt.jpg);\n}\n\nh1 {text-align: center;}\ntd textarea {\n    width: 200%;\n    height: 100%\n}\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box}\n\n\u002F* Full-width input fields *\u002F\ninput[type=text] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n}\n\n\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\u002F* Set a style for all buttons *\u002F\nbutton {\n  background-color: red;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 20%;\n  opacity: 0.9;\n  align: center;\n \n}\n\ninput[type=captcha] {\n  background: #f1f1f1;\n  color: red;\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n}\n\n\n\u002F* Add padding to container elements *\u002F\n.container {\n  padding: 16px;\n}\n\n\n\u003C\u002Fstyle\u003E\n\u003Cscript\u003E\nfunction CaptchaCode() {\n  var Numb1, Numb2, Numb3, Numb4, Code;    \n  Numb1 = (Math.ceil(Math.random() * 10)-1).toString();\n  Numb2 = (Math.ceil(Math.random() * 10)-1).toString();\n  Numb3 = (Math.ceil(Math.random() * 10)-1).toString();\n  Numb4 = (Math.ceil(Math.random() * 10)-1).toString();\n \n  code = Numb1 + Numb2 + Numb3 + Numb4;\n  document.getElementById(\"mainCaptcha\").innerHTML = code\n  document.getElementById(\"mainCaptcha\").value = code\n}\n\n\u003C$script\u003E\n\u003Cbody\u003E\n\n\u003Cform action=\"\" style=\"border:1px solid #ccc\"\u003E\n  \u003Cdiv class=\"container\"\u003E\n    \u003Ch1 style=\"color:dodgerblue\"\u003EREQUEST A FREE DEMO\u003C\u002Fh1\u003E\n    \u003Cp\u003ETo get started straight away,simply fill in your contact information below and one of our team will be in touch with you shortly.\u003C\u002Fp\u003E\n    \u003Chr\u003E\n\u003Ctable width=\"100%\"\u003E\n    \u003Ctr\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"Name\" name=\"name\" required\u003E\u003C\u002Ftd\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"Email\" name=\"email\" required\u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"Mobile\" name=\"mobile\" required\u003E\u003C\u002Ftd\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"City\" name=\"city\" required\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n    \u003Ctr colspan=\"2\"\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"Nidhi Software\" name=\"nidhi_software\" disabled\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n    \u003Ctd\u003E\u003Cinput type=\"text\" placeholder=\"Enter Secutrity Code\" name=\"psw\" required\u003E\u003C\u002Ftd\u003E\n    \u003Ctd\u003E\u003Ch2 type=\"text\" id=\"mainCaptcha\"\u003E\u003C\u002Fh2\u003E\n    \u003Cp\u003E\u003Cinput class=\"capt\" type=\"button\" value=\"Refresh\" id=\"refresh\" onclick=\"CaptchaCode();\"\u002F\u003E\u003C\u002Fp\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n    \u003Ctd\u003E\u003Ctextarea rows=\"6\" placeholder=\"Message\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n  \u003C\u002Ftable\u003E\n  \u003Cbutton style=\"margin-left: 40%\" type=\"submit\"\u003ESend Message\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n","order":0,"widgetId":"68f3a0f8-16a1-4085-8b6b-8aa8ad4f9cb8","section":"default","category":"neutral","locale":"en-IN","renderMode":"PUBLISH"},{"widgetId":"68f3a0f8-16a1-4085-8b6b-8aa8ad4f9cb8","widgetType":"HTML","widgetPreset":"html1","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","group":"Section","groupType":"Default"});