---
layout: page
title: "Q125600: Dr. Watson Application Error After Converting FAT to NTFS"
permalink: kb/125/Q125600/
---

## Q125600: Dr. Watson Application Error After Converting FAT to NTFS

	Article: Q125600
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Windows NT CONVERT utility to convert a file allocation table
	(FAT) partition to Windows NT file system (NTFS) partition and run Dr. Watson
	for Windows NT (DRWTSN32.EXE), the following error message appears:
	
	  An application error has occurred
	  and an application error log is being generated.
	
	  DRWTSN32.exe
	  Exception: access violation (0xc0000005), Address: 0x79732065
	
	The following event is written to the Event Viewer Application Log:
	
	  Event ID: 1024
	  Source: Autochk
	  Type: N/A
	  Description: <long record of NTFS partition information>
	
	CAUSE
	=====
	
	This problem occurs when DRWTSN32.EXE reads long records (larger than 256 bytes)
	from the application log.
	
	
	WORKAROUND
	==========
	
	To work around this problem, clear the Event Viewer Application Log and run
	DRWTSN32.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt drive file ms-dos command prompt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
