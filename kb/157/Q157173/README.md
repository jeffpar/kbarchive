---
layout: page
title: "Q157173: Ntbackup.exe Generates Error Using 4-Character Description"
permalink: /kb/157/Q157173/
---

## Q157173: Ntbackup.exe Generates Error Using 4-Character Description

	Article: Q157173
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the /d switch as part of the syntax for the NTBACKUP command, you may
	receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Ntbackup.exe
	
	Ntbackup.exe then tries to log an error to the DrWatson.log file. If Dr. Watson
	is not running, the following error message appears:
	
	  Cannot Open DrWatson.log File
	  Press OK to Browse for new directory
	  Windows NT Error Code = 3
	
	CAUSE
	=====
	
	This behavior occurs if you use a description with four characters, or if the
	fifth character in the description is a space (for example, "Full Backup").
	
	RESOLUTION
	==========
	
	To work around this behavior, use a description with more or less than four
	characters, or without a space as the fifth character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
