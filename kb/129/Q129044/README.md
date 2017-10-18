---
layout: page
title: "Q129044: Restoring to Alternate Path Using Windows NT Backup"
permalink: kb/129/Q129044/
---

## Q129044: Restoring to Alternate Path Using Windows NT Backup

	Article: Q129044
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
	
	Windows NT Backup restores files only to the destination that was
	originally backed up. If you have files that you want to restore to a
	different directory, you have to restore the directory tree along with the
	files. For example, if the files on tape are in the \USERS\TOM
	subdirectory, and you want to restore the files to C:\FILES, when you
	restore and choose Alternate Path (C:\FILES), Windows NT Backup restores
	the files to C:\FILES\USERS\TOM.
	
	This can be a problem if you need to restore Windows NT files, and you
	reinstall Windows NT to a new directory (for example, you old Windows NT
	directory was C:\WINNT, and your new Windows NT directory is C:\WINNT35).
	You can work around this problem by using Backup Exec from Arcada. When you
	run Backup Exec and select Alternate Path, it offers you the option to keep
	the directory structure or to discard it.
	
	Additional query words: prodnt ntbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
