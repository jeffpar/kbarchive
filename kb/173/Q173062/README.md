---
layout: page
title: "Q173062: Permissions Not Copied in Scopy.exe"
permalink: kb/173/Q173062/
---

## Q173062: Permissions Not Copied in Scopy.exe

	Article: Q173062
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Scopy.exe to copy a directory tree, the following error may
	appear:
	
	  Permissions, auditing, and/or owner could not be copied.
	
	All of the files are copied correctly, but the directories will inherit the
	permissions of the immediate parent directories.
	
	CAUSE
	=====
	
	The account that you are using does not have permission at the List level (or
	greater) for the directories you are copying.
	
	RESOLUTION
	==========
	
	Currently, the only resolution to this problem is to give at least List
	permission to the account of the user running Scopy.exe.
	
	In addition to List permission, the resource kit documentation states that
	Scopy.exe tries to use the following user privileges in these cases:
	
	- Backup Files and Folders, which allows you to copy files when your access is
	  normally restricted at the source.
	
	- Restore Files and Folders, which allows you to use the /o switch to copy
	  files that are not your own.
	
	- Manage Auditing and the Security Log, which allows you to use the /a switch.
	
	The resource kit documentation also gives the syntax for Scopy.exe as the
	following:
	
	  SCopy <source> <destination> [/o] [/a] [/s] [/?]
	  Example: SCopy G:\from\*.* H:\to\ /s
	
	This syntax uses the following variables:
	
	- source, which specifies the place from which files will be copied
	
	- destination, which specifies the place to which the files will be copied
	
	- /o, which copies owner security information
	
	- /a, which copies security auditing information
	
	- /s, which copies all files in sub-folders
	
	- /?, which shows all command-line options
	
	NOTE: To copy your own files, you do not require any special user privileges. To
	use the /o or /a switches, or to copy other users' files to which you do not
	ordinarily have access, you must be logged on as a member of the Administrators
	group on both the computer where you are copying the files from and on the
	computer you are copying files to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: acl xcopy security permissions
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
