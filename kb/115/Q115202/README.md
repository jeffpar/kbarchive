---
layout: page
title: "Q115202: Backup for Windows Err Msg: This Backup Set Was Created..."
permalink: /kb/115/Q115202/
---

## Q115202: Backup for Windows Err Msg: This Backup Set Was Created...

	Article: Q115202
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restore backups using MS-DOS 6.0 Microsoft Backup for Windows,
	you receive the following error message:
	
	  This backup set was created with the Norton Backup Version 1.0 for Microsoft
	  and cannot be <retrieved> with Microsoft Backup. The Norton Backup can
	  restore this backup set. Please contact Symantec for more information about
	  Norton Backup.
	
	NOTE: The word <retrieved> varies depending on the exact action taken.
	
	CAUSE
	=====
	
	This situation occurs if the backups you are trying to restore were made with
	MS-DOS 6.22 with compression turned on.
	
	WORKAROUND
	==========
	
	To work around this problem, either make new backups with compression turned
	off, or use MS-DOS 6.22 to restore the backup data.
	
	Additional query words: mwbackup.exe 6.00 6.20 Symantec
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
