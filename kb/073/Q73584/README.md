---
layout: page
title: "Q73584: Using Multiple Software Disk Caches Can Destroy Data"
permalink: kb/073/Q73584/
---

## Q73584: Using Multiple Software Disk Caches Can Destroy Data

	Article: Q73584
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using multiple software disk caches concurrently can cause corruption in the
	file allocation table (FAT) or in individual files.
	
	MORE INFORMATION
	================
	
	When running more than one disk cache, information can be thrown from one cache
	to another. This can create problems if the code exists in more than one cache
	at the time a program is requested. The first cache may intercept and hold
	information for later writing, while the second cache may not have all the code
	it needs to return the proper data for processing.
	
	Some common disk caches are:
	
	- PCKwik
	
	- Icache
	
	- Ncache
	
	- Dcache
	
	- Fast
	
	- PC-Cache
	
	- Mcache
	
	The MS-DOS utility FASTOPEN is not a disk cache per se, but instead speeds up
	repeat accesses of files. You may find it useful with applications that
	repeatedly reopen the same files, such as a database or compiler. In general, a
	disk cache will increase performance much more than FASTOPEN.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
