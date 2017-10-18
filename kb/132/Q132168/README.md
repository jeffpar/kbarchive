---
layout: page
title: "Q132168: Applications Run From the AT Schedule Service Cannot Print"
permalink: kb/132/Q132168/
---

## Q132168: Applications Run From the AT Schedule Service Cannot Print

	Article: Q132168
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start an application using the AT Schedule service with the Interactive
	switch, the application's printers are disabled. If the application tries to
	print automatically at startup using a macro, printing fails and some
	applications (for example, Word For Windows 6.0 and Write) display an error
	message indicating the printer is not configured properly or not present.
	
	WORKAROUND
	==========
	
	No workaround is available if you are running 16-bit applications from the AT
	Schedule service.
	
	If you are running 32-bit applications:
	
	- Setup the printers with an administrator account and save the user profile:
	
	  1. Log on as administrator and setup the printers.
	
	  2. Use the Windows NT Server User Profile editor or the Windows NT Resource
	     Kit User Profile editor (under Windows NT Workstation) and save the
	     current profile as System and User Default.
	
	  3. Restart the system so that the changes will take effect.
	
	-or-
	
	- Use an administrative user account instead of the System Account for the
	  Schedule service. To change the settings:
	
	  1. Run Control Panel and choose Services.
	
	  2. Select Schedule and then choose Startup.
	
	  3. Select This Account and then use an account that has administrative
	     privileges.
	
	  4. Supply the correct password and confirm it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: schedule
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
