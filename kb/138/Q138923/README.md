---
layout: page
title: "Q138923: Partitions Displaying as Unknown in Disk Administrator"
permalink: /kb/138/Q138923/
---

## Q138923: Partitions Displaying as Unknown in Disk Administrator

	Article: Q138923
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disk Administrator displays an NTFS partition as unknown if the permissions on
	the root of the partition are changed. When you attempt to access the partition
	through File Manager, you receive the following error message:
	
	  You do not have permissions to access directory.
	
	If you try to access the drive from a command prompt, you receive the following
	error message:
	
	  Access denied.
	
	CAUSE
	=====
	
	This occurs when a second partition or volume set is created and the group,
	"Everyone" is removed from the Access Control List(ACL) and then a specific user
	is granted access. The single user has normal access, but when other users log
	on or if Windows NT is reinstalled, Disk Administrator sees the drive as
	unknown.
	
	RESOLUTION
	==========
	
	To correct this problem, log in as an administrator and take ownership of all
	directories or add the group Everyone back with full control (default).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
