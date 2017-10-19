---
layout: page
title: "Q95531: SMARTDrive: Maximum Cache Size"
permalink: /kb/095/Q95531/
---

## Q95531: SMARTDrive: Maximum Cache Size

	Article: Q95531
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The cache size of SMARTDrive is limited by one 64 kilobyte (K) segment (or the
	largest available upper memory block if you are loading SMARTDrive high). In
	this 64K segment, SMARTDrive stores the code for its device driver (10.5K), a
	read ahead buffer (16K) and an element table that references each element block
	in the cache. The maximum cache size is limited by available RAM and the size of
	the element table which is, in turn, limited by the amount of space left in the
	64K segment after SMARTDrive and the read ahead buffer load.
	
	If you are using the default element size (8K), SMARTDrive's cache has a maximum
	size of 25 megabytes (MB). However, if you have an upper memory block (UMB)
	provider (EMM386, for example) installed and you prevent SMARTDrive from loading
	high by using the /L switch with the LH command, the read ahead buffer splits
	off from the 64K segment. This makes more room for the element table, increasing
	the maximum cache size of SMARTDrive to 35.7 MB.
	
	MORE INFORMATION
	================
	
	To determine the maximum cache size of SMARTDrive, use the following formula:
	
	  CacheSize = ElementSize * (SegmentSpace / ElementDescriptor)
	
	ElementSize, by default, is 8K or 8192 bytes and refers to the element block size
	in the SMARTDrive cache. ElementDescriptor is the memory required to reference
	each element in the cache and is 12 bytes if the element size is 8K or greater;
	it is 10 bytes if the element size is less than 8K. SegmentSpace can be
	determined by subtracting the size of the SMARTDrive device driver and the read
	ahead buffer from 64K (or the largest available upper memory block):
	
	  One 64K segment:                       65536 bytes
	  SMARTDrive device driver (10.5K):    - 10752 bytes
	  Read ahead buffer (16K):             - 16384 bytes
	  --------------------------------------------------
	  Remaining segment space:               38400 bytes
	
	  Note: If you have a UMB provider installed and you use the /L switch with the
	  LH command, the read ahead buffer loads separately from the 64K segment,
	  increasing the remaining segment space to 54784 bytes or 53.5K.
	
	For example: If you do not load a UMB provider and do not change the default
	element size of 8K, you can determine the maximum SMARTDrive cache size by doing
	the following:
	
	1. Use the following values:
	
	  ElementSize = 8192 bytes
	  SegmentSpace = 38400 bytes
	  ElementDescriptor = 12 bytes
	
	2. Insert the values from Step 1 in the formula
	
	  CacheSize = ElementSize * (SegmentSpace / ElementDescriptor)
	
	  such that:
	
	  CacheSize = 8192 * (38400 / 12) = 26214400 bytes = 25 MB
	
	NOTE: Although you can specify a large cache size, Microsoft recommends a maximum
	cache size of 2 MB for most situations. Few systems benefit from large cache
	sizes; beyond 2 MB, cache performance does not increase significantly.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
