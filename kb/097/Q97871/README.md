---
layout: page
title: "Q97871: LAN Manager Limits Number of ACLs on a FAT Partition"
permalink: kb/097/Q97871/
---

## Q97871: LAN Manager Limits Number of ACLs on a FAT Partition

	Article: Q97871
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	With LAN Manager 1.01, there is a limit on the number of ACLs which can be
	created on a FAT partition. LAN Manager 2.x addresses this problem by providing
	HPFS386 and ACLs stored in the file system, rather than in NET.ACC, but you can
	encounter the LAN Manager 1.x limit with non-HPFS386 ACLs in version 2.x also.
	
	
	You can work around this by using default (drive) permissions to set up the most
	common access permissions, then using ACLs only for exceptions to these default
	permissions. Drive permissions are not available for HPFS386 drives.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
