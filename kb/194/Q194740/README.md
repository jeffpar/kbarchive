---
layout: page
title: "Q194740: How to Bypass the 8-Workstation Logon Limit"
permalink: kb/194/Q194740/
---

## Q194740: How to Bypass the 8-Workstation Logon Limit

	Article: Q194740
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you enable the "User may log on to these workstations" option in a user
	account's Logon Workstations dialog box, you can specify up to 8 computer names
	in the associated list. This article describes how to bypass the 8-computer
	limit for specific users and computers.
	
	MORE INFORMATION
	================
	
	To bypass the 8-computer limit for specific users and computers:
	
	1. Create a file on the Netlogon share called
	  "<username>.<computername>" for each authorized user and computer
	  account combination. You can do this by right-clicking an empty spot in the
	  right pane in Windows Explorer, pointing to New, clicking Text Document,
	  typing the user name, a period, and the computer name, and then pressing
	  ENTER. The file does not have to contain any data.
	
	2. Edit the domain login script and add the following line at the beginning:
	
	           if exist %LogonServer%\Netlogon\%UserName%.%ComputerName% goto OK
	  REM use LOGOFF.EXE or SHUTDOWN.EXE here from Resource Kit
	
	3. Add the following line to the domain login script at the point where the
	  script should continue execution after having verified the existence of the
	  user name/computer name file:
	
	        :OK
	
	  When the login script runs, it verifies the existence of a file on the
	  Netlogon share, substituting the current user and computer name for the
	  variables. Once this is complete, the script transfers execution to the OK
	  label designated after the GOTO command. You can place script commands
	  between these two lines to handle users logging in from computers for which
	  they have not been authorized.
	
	4. Save the domain login script and then quit the editor.
	
	REFERENCES
	==========
	
	For further information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q158388 Useful Resource Kit Utilities for Domain Administrators
	
	Additional query words: user manager for domains
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351xsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS351xsearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a
	Version           : winnt:3.51,4.0,4.0a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
