---
layout: page
title: "Q116404: STOP Message: 0xC000021A or Other Problems with Long PATH"
permalink: /kb/116/Q116404/
---

## Q116404: STOP Message: 0xC000021A or Other Problems with Long PATH

	Article: Q116404
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your AUTOEXEC.BAT file contains PATH statement(s) which evaluate to a very
	long PATH variable (greater than approximately 1024 characters), after you log
	on, the resulting PATH variable will not reflect those PATH statement(s). For
	example, if your AUTOEXEC.BAT file contains the following lines:
	
	.
	.
	.
	PATH c:\directory1;c:\directory2;c:\directory3;c:\directory4;c:\directory5
	PATH %path%;%path%;%path%;%path%;c:\directory6
	PATH %path%;%path%;%path%;%path%;c:\directory7
	.
	.
	.
	
	after logging on, the PATH variable will contain only the values specified in the
	registry. When this happens, a new environment variable named "AutoexecPath" is
	created with the value specified by the PATH statement(s) in your AUTOEXEC.BAT
	file.
	
	
	If your PATH statement(s) evaluate to an even longer PATH variable, logging on
	will cause WINLOGON.EXE to terminate, resulting in this STOP message:
	
	  STOP: 0xC000021A {Fatal System Error} The Windows Logon Process system
	  process terminated unexpectedly with a status of 0xC0000005. The system has
	  been shutdown.
	
	
	CAUSE
	=====
	
	This is caused by the PATH variable buffer overflowing its size of 1024
	characters.
	
	WORKAROUND
	==========
	
	Edit the PATH statement(s) in your AUTOEXEC.BAT file to evaluate to a shorter
	PATH variable.
	
	If you computer hangs with the above STOP message, you can regain access to it by
	connecting to it remotely over the network and editing or renaming the
	AUTOEXEC.BAT file. Alternately, if the file system is formatted as FAT, start
	MS-DOS and edit or rename your AUTOEXEC.BAT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
