---
layout: page
title: "Q130005: HOWTO: Use a Custom Class to Encrypt Passwords"
permalink: /kb/130/Q130005/
---

## Q130005: HOWTO: Use a Custom Class to Encrypt Passwords

{% raw %}

	Article: Q130005
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many applications require a level of security that necessitates password
	protection. Password validation requires comparing passwords to a list of
	acceptable passwords, normally stored in table form. This article demonstrates
	how to create a custom class that encrypts passwords and allows passwords to be
	manipulated in encrypted form, allowing a higher level of security.
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates how to use a Custom Class to encrypt and
	decrypt a password. The password can then be used in encrypted form for added
	security.
	
	Code Sample
	-----------
	
	  * Beginning of pwdclass.prg
	  *
	  * To use this program, run it; then type the password in the upper-left
	  * text box, and press ENTER. The Encrypt_It procedure in the FxtoolFormdes
	  * instance of the PASS_WORD class is called in the valid of the text box.
	  * The encrypted password is displayed in the lower-left text.
	  * Pressing the Decrypt It! button calls the Decrypt_It procedure
	  * in the custPassword instance of the PASS_WORD class. The resulting
	  * value is displayed in the text box below the Decrypt It! button.
	  *************
	
	  frmPwdform = CREATEOBJECT("pwdform") && Instantiate class from pwdform.
	
	  frmPwdform.VISIBLE = .T.
	  READ EVENTS
	
	  * Define Form Class:
	
	  DEFINE CLASS pwdform AS FORM
	
	     CAPTION = "Password Encryption Example"
	     ADD OBJECT custPassword AS PASS_WORD  && Add Password object to form.
	
	     HEIGHT = 130
	     WIDTH = 350
	     AUTOCENTER = .T.
	
	     ADD OBJECT txtText1 AS TEXTBOX WITH ;
	        HEIGHT = 25, ;
	        LEFT = 25, ;
	        TOP = 20, ;
	        WIDTH = 125, ;
	        PASSWORDCHAR = "*", ;
	        NAME = "txtText1"
	
	     ADD OBJECT txtText2 AS TEXTBOX WITH ;
	        HEIGHT = 25, ;
	        LEFT = 25, ;
	        TOP = 72, ;
	        WIDTH = 125, ;
	        READONLY = .T., ;
	        NAME = "txtText2"
	
	  * Command button to demonstrate the call to Decrypt_It procedure is
	  * contained in cmdCommand1.click in the following procedure:
	
	     ADD OBJECT cmdCommand1 AS COMMANDBUTTON WITH ;
	        TOP = 20, ;
	        LEFT = 200, ;
	        HEIGHT = 29, ;
	        WIDTH = 125, ;
	        CAPTION = "Decrypt It!", ;
	        NAME = "cmdCommand1"
	
	  * Textbox to display Unencrypted password:
	
	     ADD OBJECT txtText3 AS TEXTBOX WITH ;
	        CONTROLSOURCE = "THISFORM.custPassword.cUnencrypted", ;
	        HEIGHT = 25, ;
	        LEFT = 200, ;
	        READONLY = .T., ;
	        TOP = 72, ;
	        WIDTH = 125, ;
	        NAME = "Text3"
	
	     PROCEDURE txtText1.LOSTFOCUS
	        THISFORM.custPassword.Encrypt_It(TRIM(THIS.VALUE))
	        THISFORM.txtText2.VALUE = THISFORM.custPassword.cEncrypted
	        THISFORM.cmdCommand1.SETFOCUS
	     ENDPROC
	
	     PROCEDURE cmdCommand1.CLICK
	        THISFORM.custPassword.Decrypt_It(THISFORM.custPassword.cEncrypted)
	        THISFORM.REFRESH
	        THISFORM.txtText1.SETFOCUS
	     ENDPROC
	
	     PROCEDURE DESTROY
	        CLEAR EVENTS
	     ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS PASS_WORD AS CUSTOM
	
	     HEIGHT = 17
	     WIDTH = 100
	     cUnencrypted = ""
	     cEncrypted = ""
	     NAME = "Password"
	
	     PROCEDURE Encrypt_It     && Call this to encrypt password
	        PARAMETERS cPassword
	        cEncrypted_password = ''
	        FOR i = 1 TO LEN(cPassword)
	           cLetter = SUBSTR(cPassword, i, 1)
	           cEncrypted_password = cEncrypted_password + ;
	              CHR((ASC(cLetter)*2)+5)      && Arbitrary encryption formula
	        NEXT i
	        THIS.cEncrypted = cEncrypted_password
	
	     ENDPROC
	
	     PROCEDURE Decrypt_It     && Call this to Decrypt password
	        PARAMETERS cPassword
	        cUnencrypted_password = ''
	        FOR i = 1 TO LEN(cPassword)
	           cLetter = SUBSTR(cPassword, i, 1)
	           cUnencrypted_password = cUnencrypted_password + ;
	              CHR((ASC(cLetter)-5)/2)    && Reverse of encryption formula
	        NEXT i
	        THIS.cUnencrypted = cUnencrypted_password
	
	     ENDPROC
	
	  ENDDEFINE
	  * End of pwdclass.prg
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
