---
layout: page
title: "Q110481: Backup Doesn't Back Up Entire Hard Disk or Create Log File"
permalink: /kb/110/Q110481/
---

## Q110481: Backup Doesn't Back Up Entire Hard Disk or Create Log File

	Article: Q110481
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NTBACKUP.EXE does not back up the entire hard disk drive when issued from the
	command line or from a batch file. Also, the following error may appear:
	
	  You do not have permission to access portions of \xxx Please see the owner or
	  administrator to get permission. Error reading alternate file data.
	
	where "xxx" will be part of the subdirectory path name.
	
	If you use the command line statement:
	
	  NTBACKUP backup C:\<directory path> /B /L "C:\BACKUP.LOG"
	
	NTBackup will back up the specified directory, but will not back up the local
	registry as specified by the /B switch. If the specified directory is not the
	root directory, the following error message will appear in the status box:
	
	  You do not have permission to access portions of \xxx. Please see the owner
	  or administrator to get permission. Error reading alternate file data.
	
	NTBACKUP.EXE will also create an empty log file with a size of 2 bytes and write
	it in the \\WINNT directory instead of the path specified by the /L switch.
	
	CAUSE
	=====
	
	In Service Pack 2 for Windows NT, NTBACKUP.EXE was modified to recognize
	Unicode. This caused a regression problem where it did not parse command line
	parameters correctly.
	
	RESOLUTION
	==========
	
	Service Pack 2 has been re-released with a correction for this problem.
	
	If you applied the previous Service Pack 2 before 1/31/94, you need to update
	Windows NT to the new version.
	
	To determine if you have the new Service Pack 2 on a running system, at a command
	prompt type "WINVER".
	
	If WINVER shows that the release is:
	
	  Build 528: CSD003  - you have the old Service Pack 2.
	
	If WINVER shows that the release is:
	
	  Build 528: Service Pack 2  - you have the new Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt failure broke
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
