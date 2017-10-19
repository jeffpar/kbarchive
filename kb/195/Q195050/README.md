---
layout: page
title: "Q195050: How to Clear Environment Variables Using Setx.exe"
permalink: /kb/195/Q195050/
---

## Q195050: How to Clear Environment Variables Using Setx.exe

	Article: Q195050
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Setx.exe tool to clear both user and
	system environment variables. Setx.exe is included with the Windows NT 4.0
	Resource Kit.
	
	MORE INFORMATION
	================
	
	To clear an environment variable using Setx.exe at a command prompt:
	
	1. Click Start, point to Programs, and then click Command Prompt.
	
	2. If you want to clear a user environment variable, type the following line
	
	  setx <variable> ""
	
	  where <variable> is the user environment variable.
	
	3. If you want to clear a system environment variable, type the following line
	
	  setx <variable> "" -m
	
	  where <variable> is the system environment variable.
	
	4. Close the command prompt.
	
	When you use Setx.exe to clear an environment variable value, the environment
	variable name is not affected.
	
	Additional query words: set null
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
