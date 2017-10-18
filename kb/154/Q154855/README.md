---
layout: page
title: "Q154855: System Reserved Partitions on PowerPCs"
permalink: kb/154/Q154855/
---

## Q154855: System Reserved Partitions on PowerPCs

	Article: Q154855
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure partitions during the text mode portion of Setup on the
	PowerPC (Motorola PowerStack) platform, you will see a small partition marked:
	
	  -- System Reserved 10 MB
	
	The size may vary, but typically, it will be a small partition. It will not be
	assigned a drive letter.
	
	MORE INFORMATION
	================
	
	On the PowerPC platform, a special partition is created that contains the system
	firmware. Under no conditions should this partition be deleted. If you delete
	this partition, the computer will be unbootable. This partition is separate from
	the normal RISC architecture system partition that contains files needed to
	start the operating system. On RISC machines, the system partition should always
	be FAT. If the "System Reserved" partition is accidentally deleted or damaged,
	contact the hardware vendor for utilities and instructions on how to re-create
	it.
	
	
	Additional query words: prodnt PowerStack Motorola PPC
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
