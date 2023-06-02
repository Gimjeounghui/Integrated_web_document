$(function() {
    $("#signUpBtn").click(function() {

        const nameReg = /^[가-힣]{2,5}$/;
        const emailReg = /^[\w]{5,11}@(naver.com|daum.net|nate.com|gmail.com)$/;
        const pwReg = /^(\w|\d|\!|\~|\@|\#|\$|\%|\^|\&|\*|\_|\-){8,20}$/;

        const nameMsg = "이름을 입력해주세요.";
        const emailMsg = "이메일을 다시 입력해주세요.";
        const pwMsg = "사용할 수 없는 비밀번호입니다.";

        if (!chkBlank("#name", "이름을"))
            return;
        else if (!chkData("#name", nameReg, nameMsg))
            return;
        else if (!chkBlank("#email", "이메일을"))
            return;
        else if (!chkData("#email", emailReg, emailMsg))
            return;
        else if (!chkBlank("#pw", "비밀번호를"))
            return;
        else if (!chkData("#pw", pwReg, pwMsg))
            return;
        else if (!chkBlank("#pwck", "비밀번호 확인을"))
            return;
        else if ($(this).val() != $("#pw").val()) {
            alert("비밀번호가 일치하지 않습니다.");
            $(this).val("");
            $(this).focus();
            return;
        } else {
            $("#signUpForm").attr({
                "method" : "post",
                "action" : "/webDevDocs/signUp"
            });
            $("#signUpForm").submit();
        }
    });
    
    /* 탭 메뉴 제어 */
    $("#loginTab").click(function() {
        $(this).parent().css("background", "#ffffff");
        $("#signUpTab").parent().css("background", "#f4f4f4");
        $("#loginMenu").css("display", "block");
        $("#signUpMenu").css("display", "none");
    });
    $("#signUpTab").click(function() {
        $(this).parent().css("background", "#ffffff");
        $("#loginTab").parent().css("background", "#f4f4f4");
        $("#signUpMenu").css("display", "block");
        $("#loginMenu").css("display", "none");
    });
});