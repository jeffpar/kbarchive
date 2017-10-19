---
layout: page
title: "Q116405: STOP Message: 0xC000021A During Logon Because of Bad PATH"
permalink: /kb/116/Q116405/
---

## Q116405: STOP Message: 0xC000021A During Logon Because of Bad PATH

	Article: Q116405
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
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your AUTOEXEC.BAT file contains a PATH statement with unmatched percent
	characters ("%"), for example:
	
	  PATH C:\;%PATH
	
	when you log on, WINLOGON.EXE will terminate with an access violation and this
	STOP message will appear:
	
	  STOP: 0xC000021A {Fatal System Error}
	  The Windows Logon Process system process terminated unexpectedly with a status
	  of 0xC0000005. The system has been shutdown.
	
	CAUSE
	=====
	
	Windows NT fails to detect a NULL pointer and subsequently, incorrectly de-
	references that pointer causing an access violation.
	
	WORKAROUND
	==========
	
	To regain access your computer, connect to it remotely over the network and edit
	or rename the AUTOEXEC.BAT file. Alternately, if the file system is formatted as
	FAT, start MS-DOS and edit or rename your AUTOEXEC.BAT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
