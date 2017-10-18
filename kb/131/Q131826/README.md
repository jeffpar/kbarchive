---
layout: page
title: "Q131826: PC NTMMTA: Err Msg 1069: Service Did Not Start Due to Logon..."
permalink: kb/131/Q131826/
---

## Q131826: PC NTMMTA: Err Msg 1069: Service Did Not Start Due to Logon...

	Article: Q131826
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run External or Dispatch from the Microsoft Mail Multitasking MTA for
	Windows NT (NT MMTA) as a Service, the following error may occur:
	
	  Could not start the Mail External - (instance) service on \\computer name.
	
	  Error 1069: The service did not start due to a logon failure
	
	CAUSE
	=====
	
	When you create a new user with User Manager for Domains, the default User
	Property is User Must Change Password at Next Logon. If this option is checked
	for the NT MMTA service account, it will cause this error. Windows NT cannot
	present a change password dialog to a Service account.
	
	This error will also occur the first time you try to start the service if you
	have not granted the account the right to logon as a service.
	
	RESOLUTION
	==========
	
	To change the option
	--------------------
	
	1. Run User Manager for Domains from the Administrative Tools group.
	
	2. Double-click the Service account user.
	
	3. Click the Password Never Expires property, and choose the OK button.
	
	If you have not granted the account the right to logon as a service, in Control
	Panel Services, select the service, and select Startup. A dialog box will be
	displayed that states, "This account has been granted the right to log on as a
	service."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
