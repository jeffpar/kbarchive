---
layout: page
title: "Q140380: User Account Database Fails to Shrink After Deleting Accounts"
permalink: /kb/140/Q140380/
---

## Q140380: User Account Database Fails to Shrink After Deleting Accounts

	Article: Q140380
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbSecurity
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a large number of users are added to a Windows NT User Account Database, and
	later deleted, the size of the User Account Database or Security Account Manager
	(SAM) does not shrink in size.
	
	Windows NT does not have a mechanism to compress this empty space, but it is
	reclaimed when new user or group accounts are created. When the Windows primary
	domain controller synchronizes the SAM with the backup domain controllers, the
	new records, or changes in existing records are sent. The SAM is located in
	%SYSTEMROOT%\SYSTEM32\CONFIG\SAM.
	
	If the SAM file grows too large, additional memory and PagedPoolSize is needed to
	load the file at system boot, and to load applications such as User Manager. For
	guidelines and additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q130914
	  TITLE : Number of Users and Groups Affects SAM Size of Domain
	
	MORE INFORMATION
	================
	
	Although Windows NT has no built-in method of compressing the SAM database,
	there are three methods that can be used to effectively compress the SAM on a
	certain domain controller. The compressed SAM is NOT replicated to backup domain
	controllers since only new records, or changes in the records are replicated.
	Therefore, measures will need to be applied at each Domain Controller.
	
	Method 1: This method must be performed on a backup domain controller. Use the
	ERD (Emergency Repair Disk) and select "Inspect registry files." When prompted,
	choose "SECURITY (SecurityPolicy) and SAM (User Accounts Database). This
	replaces the large SAM with the original one that was created when Windows NT
	was installed on this machine. This requires the Administrator password that was
	used when Windows NT was installed, or when RDISK -s was last used. After
	replacing the SAM, synchronize with the primary domain controller. Promote a
	backup domain controller to become primary domain controller to apply the above
	fix to the original primary domain controller.
	
	Method 2: This is the most invasive method, and requires any services or
	applications to be reinstalled. Install Windows NT onto the same machine of a
	backup domain controller as a "New Install".
	
	This overwrites the large SAM, creating a new file and downloading the accounts
	from the primary domain controller. This can be done to all of the backup domain
	controllers. To re-install the primary domain controller, promote a backup to
	primary, and perform the same operation.
	
	Method 3: This method can be done on a backup or primary domain controller. This
	method uses the utilities REGBACK and REGREST from the Windows NT Resource Kit.
	Using REGBACK will copy the records from the SAM into a new file. Restoring the
	SAM copies this new file over the old SAM. You must reboot the computer after
	using REGREST to have the restore take effect.
	
	NOTE: After you back up the SAM using REGBACK, you can compare the two files and
	determine the size of free space or extraneous information.
	
	The net result is a compressed SAM database. As an example, the following command
	lines could be used. These assume the BACKUP directory already exists on drive
	C, and Windows NT is also installed on drive C (Windows NT and the BACKUP
	directory must reside on the same logical disk):
	
	  C:\>regback c:\backup\sam.bak machine sam
	
	-or-
	
	  C:\>regrest c:\backup\sam.bak c:\backup\sam.old machine sam
	
	
	======================================================================
	Keywords          : kbSecurity 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
