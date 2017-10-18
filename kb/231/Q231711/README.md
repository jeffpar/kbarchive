---
layout: page
title: "Q231711: Access Violation in Explorer During Session Logon"
permalink: kb/231/Q231711/
---

## Q231711: Access Violation in Explorer During Session Logon

	Article: Q231711
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you type your logon credentials, and then click OK, you may receive a
	memory reference or access violation error message or the computer may stop
	responding (hang).
	
	CAUSE
	=====
	
	This issue can occur if the permissions for the %SystemRoot%\Profiles profile is
	not set to the default value.
	
	RESOLUTION
	==========
	
	To resolve this issue, ensure the permissions of the %SystemRoot%\Profiles
	profile is set to the default value. The default value for %SystemRoot%\Profiles
	is in the following list:
	
	- Local Administrator Group = Full Control
	- Creator/Owner = Full Control
	- Everyone = Read
	- System = Full Control
	
	If you have logged on before and are currently experiencing this issue, make sure
	the folder with your user name contained in the %SystemRoot%\Profiles folder has
	the following permissions:
	
	  %User%=Full Control; Local Administrators Group=Full Control; System=Full
	  Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
