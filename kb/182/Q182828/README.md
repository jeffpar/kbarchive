---
layout: page
title: "Q182828: Access Violation in Posix Subsystem"
permalink: /kb/182/Q182828/
---

## Q182828: Access Violation in Posix Subsystem

	Article: Q182828
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Posix subsystem (Psxss.exe) sporadically terminates with an access violation
	(such as, exception 0xc00000005) when using Posix commands like ls or pax.
	
	
	RESOLUTION
	==========
	
	Upgrade to Windows NT version 4.0 or use native Win32 versions of the unix
	utilities mentioned. These are available from third parties on the Internet.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
