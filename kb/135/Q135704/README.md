---
layout: page
title: "Q135704: PC MAPI: Suppressing the Default Logon Dialog Box"
permalink: kb/135/Q135704/
---

## Q135704: PC MAPI: Suppressing the Default Logon Dialog Box

	Article: Q135704
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the MSMAPI.VBX control to logon Mail for PC Networks, you can
	suppress the default logon dialog box by setting the following:
	
	- The LogonUI property of MapiSession to false.
	
	- The Username property to a valid mailbox.
	
	- The Password to the mailbox's password.
	
	However, when the password property is null, the following error will occur:
	
	  2003 (Login Failure)
	
	MORE INFORMATION
	================
	
	Make sure that the entries for the user's name and password are present in the
	MSMAIL.INI.
	
	NOTE: The Password entry does not need any characters after it.
	
	  [Microsoft Mail]
	  Login=username
	  Password=
	
	The code below duplicates the situation when the error occurs with the Admin
	mailbox and a blank password.
	
	     myform.MapiSess.UserName = "admin"
	     myform.MapiSess.Password = ""
	     myform.MapiSess.NewSession = True
	     myform.MapiSess.LogonUI = False
	     myform.MapiSess.Action = SESSION_SIGNON
	
	Unfortunately, a null password can be used only if there is an existing session
	or the LogonUI property is set to True. If there is an existing session, you can
	pass nulls for both the name and password, and you will be returned a handle to
	the existing session. If there is no existing session, and you set LogonUI
	property to true, MAPILogon will generate the standard Sign-In dialog box.
	
	Additional query words: 3.00 3.20 Visual Basic blank MAPI_LOGON_UI
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
