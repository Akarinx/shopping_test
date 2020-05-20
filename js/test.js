window.onload = function () {
    var oUsername = document.getElementsByClassName('inp')[0];
    var oUsererror = this.document.getElementsByClassName('error')[0];
    var oUsersuccess = this.document.getElementsByClassName('success')[0];
    oUsername.onkeyup = function () {
        oUsersuccess.style.display = 'none';
        oUsererror.style.display = 'none';
        var ovalue = oUsername.value;
        console.log(ovalue.length)
        if ((ovalue.length > 0 && ovalue.length < 6) || ovalue.length > 18) {
            oUsererror.style.display = 'block';
        }
        else if (ovalue.length === 0) {
            oUsersuccess.style.display = 'none';
        }
        else if (!/^\d+$/.test(ovalue)) {
            oUsererror.style.display = 'block';
        }
        else {
            oUsersuccess.style.display = 'block';
        }
    }

}