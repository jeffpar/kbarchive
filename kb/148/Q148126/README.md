---
layout: page
title: "Q148126: Files With Changed Permissions Not Incrementally Backed Up"
permalink: kb/148/Q148126/
---

## Q148126: Files With Changed Permissions Not Incrementally Backed Up

	Article: Q148126
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change permissions to files and directories in File Manager, the file
	or directory entry time stamp or attribute does not change. Only the Access
	Control Lists (ACL) are modified. Therfore, you cannot perform incremental
	backup of these files and directories because their meta-data (also known as
	ACL) have changed.
	
	RESOLUTION
	==========
	
	To work around this problem, perform a complete backup.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Windows NT keeps track of three time stamps associated with files and
	directories. These three time stamps are creation, last access, and last
	written. When a file or directory is created, accessed or changed, Windows NT
	updates the appropriate time stamp. These time stamps can be viewed by
	performing a DIR command using a /T switch to view the desired time stamp.
	
	For example, the following lists the different types of DIR /T commands you can
	use:
	
	  DIR /TC <file or dir.>   Displays the creation time.
	  DIR /TA <file or dir.>   Displays the last access time.
	  DIR /TW <file or dir.>   Displays the last written time.
	
	If the last written time stamp of a file changes, the archive bit is set. This
	allows NTBACKUP.EXE to perform incremental backups based on when the file has
	last changed.
	
	
	Additional query words: prodnt 3.50 3.51
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
