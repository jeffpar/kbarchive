---
layout: page
title: "Q187101: Client Can Change System Startup Properties"
permalink: /kb/187/Q187101/
---

## Q187101: Client Can Change System Startup Properties

	Article: Q187101
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users logged on to a client session with normal user rights can view the system
	startup settings for the server and change the operating system that is the
	default selection at restart.
	
	This behavior is only seen on systems that have their Boot partition formatted in
	the FAT file system.
	
	These settings are accessed through the System tool in Control Panel in the
	System Properties dialog box under the Startup/Shutdown tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: Security NTLoader
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
