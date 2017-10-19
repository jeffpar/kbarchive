---
layout: page
title: "Q128963: PC MAPI: How To Determine if a Mail Session Already Exists"
permalink: /kb/128/Q128963/
---

## Q128963: PC MAPI: How To Determine if a Mail Session Already Exists

	Article: Q128963
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a you use the Microsoft Mail for PC Networks Simple Messaging Application
	Programming Interface (Simple MAPI), you can fairly reliably determine if an
	Microsoft Mail for Windows session is currently established. This information is
	helpful due to the design of the Windows client and the inability to have
	multiple simultaneous logins.
	
	When it is largely unknown to the developer if a session will currently be
	running, the following Microsoft Visual Basic version 3.0 code logic can be
	helpful in reducing login errors.
	
	MORE INFORMATION
	================
	
	The following code fragment is just one example of how to optimize a successful
	login, without user intervention. This should be helpful for developers who want
	to maximize their applications ability to login successfully.
	
	NOTE: The message box calls are merely for clarity.
	
	  Sub Form_Load ()
	  ' ***                         ***
	  ' *** Start sample login code ***
	  ' ***                         ***
	
	  rc& = MAPILogon(0&, "", "", 0&, 0&, lhSession&)
	  If rc& <> SUCCESS_SUCCESS Then
	    MsgBox "Login Error or session does not exist = " + Str(rc&)
	    ' No session exists so lets pass info to create one
	    rc& = MAPILogon(0&, "admin", "password", 0&, 0&, lhSession&)
	    If rc& <> SUCCESS_SUCCESS Then
	      MsgBox "Failure to login at all"
	      End
	    Else
	      MsgBox "Successfully logged in as admin"
	      ' Send important message
	      rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	      End
	    End If
	
	  Else
	    MsgBox "Mail session currently established"
	    ' Send important message
	    rc& = MAPILogoff(lhSession&, 0&, 0&, 0&)
	  End If
	
	  End
	  End Sub
	  '*** end code fragment ***'
	
	Additional query words: 3.00 3.20 MS Mail Technical Reference
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
