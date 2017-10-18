---
layout: page
title: "Q69378: Swapfile and COMPAQ 650 MB Drives"
permalink: kb/069/Q69378/
---

## Q69378: Swapfile and COMPAQ 650 MB Drives

	Article: Q69378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.0 SWAPFILE utility cannot be used to create a permanent swapfile
	on drives larger than 509.5 MB under COMPAQ DOS 3.31. SWAPFILE cannot recognize
	such drives. To create a swapfile on this type of system, limit the size of
	logical drives to no more than 509.5 MB.
	
	This problem usually occurs with COMPAQ Type 49, 650 MB drives.
	
	MORE INFORMATION
	================
	
	COMPAQ DOS 3.31 used a proprietary greater-than-32-MB partitioning scheme that
	allowed logical drives larger than 512 MB in size. This problem does not occur
	with DOS versions 4.01 or later, which limit logical drive size to 512 MB.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	Additional query words: 3.00 win30 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
