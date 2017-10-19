---
layout: page
title: "Q138701: Controlling Server Hard Disk Space Allocated to Users"
permalink: /kb/138/Q138701/
---

## Q138701: Controlling Server Hard Disk Space Allocated to Users

	Article: Q138701
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
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT does not provide a way to limit the amount of server disk space that
	can be allocated to a user. However, it is possible to limit the amount of space
	all users can take up on the server hard disk by placing the directories they
	can write to or modify on a partition dedicated for that purpose.
	
	MORE INFORMATION
	================
	
	It may be desirable to limit the amount of disk space on the server that users
	can store personal files on. For example, if a user's directory is on the same
	partition as the operating system or applications, the user can create problems
	for the operating system or the applications by filling the disk.
	
	To prevent this problem, create a separate partition for user directories. If
	this partition run out of space, it generates a "Disk Full" error message, but
	does not affect the operating system.
	
	Additional query words: prodnt 3.10 quota
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
