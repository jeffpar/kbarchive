---
layout: page
title: "Q166166: WinNT Err: NTBACKUP Fails Due to Lack of Permissions"
permalink: /kb/166/Q166166/
---

## Q166166: WinNT Err: NTBACKUP Fails Due to Lack of Permissions

	Article: Q166166
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbtool kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows NT, you may receive the following error message when you
	back up files using NTBACKUP:
	
	  You Do Not Have Permission to Access Portions of Data. Please see the Owner
	  or Administrator to Get Permission.
	
	CAUSE
	=====
	
	Normally, this indicates that you do not have appropriate permissions for the
	folder you are attempting to back up or to which you are restoring files.
	
	This problem can also be caused when the specified directory name used to backup
	has been misspelled or does not exist. In addition, the above error can happen
	when you use a batch file for the backup operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure you have the necessary permissions to perform
	the backup and that the folder name is correctly entered and exists.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q162972
	  TITLE : Troubleshooting Tape Backup Issues in Windows NT 4.0
	======================================================================
	Keywords          : kbhw kbtool kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
