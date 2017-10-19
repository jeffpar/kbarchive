---
layout: page
title: "Q291426: Error Messages Appear When User Open Programs on Terminal Server"
permalink: /kb/291/Q291426/
---

## Q291426: Error Messages Appear When User Open Programs on Terminal Server

	Article: Q291426
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Zero Administration Kit (ZAK) on a computer that runs
	Windows NT Server 4.0, Terminal Server Edition, and that is already set up with
	programs and user permissions, various error messages may appear when a user
	tries to log on or use a program.
	
	CAUSE
	=====
	
	This behavior can occur if the ZAK lockout script (Zakwtsb2.exe) applies
	restrictions on files that programs need to use.
	
	RESOLUTION
	==========
	
	To resolve this behavior, either give all users Full Control permissions for the
	Terminal Server local hard disk, or restore the default Terminal Server
	permissions.
	
	MORE INFORMATION
	================
	
	The following list describes the updated ZAK script files that are associated
	with the Zakwtsb2.exe file for Terminal Server.
	
	Zakinstall.cmd: This file copies the ZAK files to the system root on the Terminal
	Server, in a folder named Zak. The file then calls Zakb1wrk.cmd.
	
	Zakb1wrk.cmd: This file cleans up any files that Office 97 Setup places in the
	All Users\Startup folder. The file has many commented-out sections that you can
	customize for your environment. The file calls Acls.cmd, which sets the system
	access control lists, and Hide.cmd, which hides most of the local file system.
	
	Acls.cmd: This file uses the Cacls command-line utility to set Read-only
	permissions for users on all files on the local system. It then goes back and
	modifies permissions on specific files or folders so that Office 97 and Windows
	NT work properly. This process performs the following actions:
	
	NOTE: Unless specifically listed otherwise, administrators have full permissions
	for all files and folders.
	
	- Makes the boot files available only to administrators.
	
	- Gives users Read-only permissions for the Program Files folder.
	
	- Makes Windows NT accessories (Notepad, games, and so on) unavailable to
	  users.
	
	- Gives everyone Change permissions for the Office and Office\Templates
	  folders.
	
	- Gives everyone Change permissions for the Temp folder but does not allow
	  deletion of the folder. To accomplish this, the process places a file in the
	  root of the Temp folder and then restricts users from deleting that one file.
	
	- Sets user permissions for the Wtsrv folder and most of its subfolders to
	  Read-only. The Help folder, Profiles folder, Spool folder, and folders
	  related to Internet Explorer retain regular availability. Some specific files
	  (for example, Explorer.exe and Wordpad.exe) require Read permissions so users
	  can run them. For a complete list of allowed executable files, refer to the
	  command file.
	
	- Denies any access to .inf files, .exe files, and .hlp files in the System
	  folders.
	
	- Locks out user access to the Zak folder.
	
	- Allows Read access to specific files that Office needs to write to.
	
	Hide.cmd: This file sets the Hidden attribute for most files on the computer,
	effectively hiding them without applying any system policies, so that a user who
	explores the local hard disk drive does not see most files or folders. There are
	exceptions. For example, it does not hide Microsoft PowerPoint templates (.ppt)
	because these files must be visible for PowerPoint to run properly.
	
	Unhide.cmd: This file removes the Hidden attribute tag from all files on the
	system drive. It is included for the system administrator's convenience.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
