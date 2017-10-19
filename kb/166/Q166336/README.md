---
layout: page
title: "Q166336: FTP Users Able to List Files Without Correct NTFS Permissions"
permalink: /kb/166/Q166336/
---

## Q166336: FTP Users Able to List Files Without Correct NTFS Permissions

	Article: Q166336
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File Transfer Protocol (FTP) clients are allowed to view files and directories
	on an NTFS partition, although they have not been given this right through the
	file and directory permissions. However, if these clients try to view the files
	through a Microsoft network connection, they will receive the error:
	
	  You do not have permission to access this directory.
	
	CAUSE
	=====
	
	As long as a user has EXECUTE (X) permission on a directory and is a member of a
	group that has execute permission, or as long as that user has explicitly been
	given the user right to Back up files and directories, the user will be able to
	list the files and subdirectories in that directory. This will occur even if the
	user has been granted No Access to files in that directory.
	
	For example:
	
	If the user has been given as little access as: Special Access (X)(None), that
	user will be able to list the files and subdirectories in that directory. That
	user will still, however, get an "access is denied" error when trying to
	manipulate the files and subdirectories.
	
	RESOLUTION
	==========
	
	Do not give FTP users the BACK UP FILES AND DIRECTORIES user right, if it is
	important that files and subdirectories be hidden through permissions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: anonymous server file permission see special read write change delete take ownership contents
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	
	=============================================================================
	
