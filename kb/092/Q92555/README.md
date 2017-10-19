---
layout: page
title: "Q92555: WFWG: Null Password Bypasses Login"
permalink: /kb/092/Q92555/
---

## Q92555: WFWG: Null Password Bypasses Login

	Article: Q92555
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups allows multiple users to use the same machine
	through the use of PassWord cache Lists (PWLs). Windows for Workgroups also
	supports null passwords (an empty password).
	
	MORE INFORMATION
	================
	
	If Windows for Workgroups has the Logon At Startup option selected in Control
	Panel, and the previous user has a PWL file with a null password, the Logon
	dialog box is bypassed at startup.
	
	To allow a different user to log on to the Windows for Workgroups machine, the
	previous user must be logged off. To do this, use the Logoff button in the
	Control Panel.
	
	Windows for Workgroups always provides the previous user's name at the logon
	prompt during Windows for Workgroups startup.
	
	Additional query words: 3.1 3.10 by-passed 3.11 nul startup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
