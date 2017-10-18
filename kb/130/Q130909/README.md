---
layout: page
title: "Q130909: NTBACKUP Fails to Restore All Files in a Directory"
permalink: kb/130/Q130909/
---

## Q130909: NTBACKUP Fails to Restore All Files in a Directory

	Article: Q130909
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a group of files from a directory is selected to be restored, Windows NT
	Backup restores only some of them. Backup does not display an error message and
	no errors are logged into the log file.
	
	When the directory is selected to be restored, all files are restored. When a
	single file is selected from a group of files that were in an earlier case
	selected, but not restored, the file is not restored. When a single file is
	selected from a group of files that were selected and restored, it is restored.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt 3.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
