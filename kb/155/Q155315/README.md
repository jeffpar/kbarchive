---
layout: page
title: "Q155315: Cannot Log On After User Access to Boot Partition Removed"
permalink: kb/155/Q155315/
---

## Q155315: Cannot Log On After User Access to Boot Partition Removed

	Article: Q155315
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove access for the Everyone group from a Windows NT File System (NTFS)
	boot partition and click the Replace Permissions On Subdirectories check box so
	that it is selected, you lose all access to the partition, even if you are
	currently logged on as an administrator. You may also receive error messages
	stating that your desktop is not accessible. In addition, no other users can log
	on.
	
	When the Everyone group does not have access to the partition, no user has rights
	to make any change or log on to the system. If you attempt to log on, Windows NT
	returns you to the logon screen.
	
	If you restart Windows NT, you may receive the following error message on a blue
	screen:
	
	  STOP: c000021A {Fatal System Error}
	
	After you log on, you may receive the following error messages:
	
	  Limited Virtual Memory:
	
	  Your system is running without a properly sized paging file. Please use the
	  Virtual Memory option of the System applet in the Control Panel to create a
	  paging file, or to increase the initial size of your paging file.
	
	  Desktop:
	
	  Can't access this folder. The path is too long
	
	NOTE: You do not receive any warning that removing the Everyone group removes all
	users, including administrators, and you are not warned that some system-wide
	functions may no longer work.
	
	CAUSE
	=====
	
	Removing the Everyone group and selecting the Replace Permissions On
	Subdirectories check box removes all users, including administrators, and
	prevents anyone from accessing the partition.
	
	RESOLUTION
	==========
	
	To resolve this issue and allow users to log on after this problem has occurred,
	use any of the following methods:
	
	Method 1
	--------
	
	Set up Windows NT on another partition or hard disk in the computer, using the
	following steps:
	
	1. Set up Windows NT on another partition or hard disk.
	
	2. Log on to the new installation of Windows NT as an administrator.
	
	3. Take ownership of the original partition.
	
	You should be able to gain access to the data files on the original partition.
	
	
	Method 2
	--------
	
	Reformat the partition and reinstall Windows NT using the following steps:
	
	1. Reformat the hard disk partition on which Windows NT is installed.
	
	2. Reinstall Windows NT, and then restore any data files from a backup.
	
	Method 3
	--------
	
	Use File Manager to change the permissions. To do so, follow these steps:
	
	1. Log on to the computer using an account with administrator privileges.
	
	2. Press CTRL+ALT+DELETE, and then click Task Manager.
	
	3. On the File menu, click New Task(Run).
	
	4. In the Open box, type "winfile" (without quotation marks), and then press
	  ENTER.
	
	5. Click the boot drive, and then click Permissions on the Security menu.
	
	6. Grant the Everyone group Change permissions.
	
	7. Close File Manager, and then restart your computer.
	
	MORE INFORMATION
	================
	
	To prevent the Everyone group from having explicit rights to the partition
	without preventing access by any user, use the following steps:
	
	1. Grant the user who is currently logged on, or a group that contains the user
	  currently logged on, proper access to the partition. For example, the
	  Administrators group should be granted Full Control permissions.
	
	2. Grant the System group Full Rights.
	
	3. Remove the Everyone group.
	
	4. Click the Replace Permissions On Subdirectories check box so that it is
	  selected.
	
	5. Click OK.
	
	NOTE: Granting the System and Owner groups full access to the partition after
	removing the Everyone group does not allow the default user ID, or
	administrator, permissions to log on and access files even though it is
	considered an owner. To grant permissions to the Administrators group, you must
	explicitly add the Administrators group.
	
	The user attempting to log on must have sufficient permissions granted before
	logging on. The minimum permissions necessary to log on (assuming the System
	group has full control of the volume root and all system directories and files)
	are:
	
	  %SystemRoot%:                               Everyone - READ
	
	  %SystemRoot%\System32:                      Everyone - READ/EXECUTE
	
	  %SystemRoot%\System32\Repl\Import\Scripts:  Everyone - READ/EXECUTE
	  (if users have logon scripts)
	
	Depending on your environment, additional permissions may be necessary.
	
	Additional query words: prodnt subsystem session manager terminated 0xc000021a
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
