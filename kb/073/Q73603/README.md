---
layout: page
title: "Q73603: Reliable REad/Write in Enh Mode with SSTOR.SYS UPDATE"
permalink: /kb/073/Q73603/
---

## Q73603: Reliable REad/Write in Enh Mode with SSTOR.SYS UPDATE

	Article: Q73603
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Storage Dimensions retails optical drive packages which include the drive,
	cabling, and SpeedStor partitioning software. According to Storage Dimensions,
	to operate their drive packages successfully with Windows 3.0 in enhanced mode,
	the SpeedStore driver SSTOR.SYS should be version 6.4. This file can be obtained
	from Storage Dimensions.
	
	MORE INFORMATION
	================
	
	When using the driver earlier than 6.4, writing to and reading from the drive in
	enhanced mode will be unreliable, and file damage may result.
	
	Storage Dimensions recommends copying the driver SSTOR.SYS version 6.4 into the
	root directory and adding the following line to the CONFIG.SYS:
	
	  DEVICE=C:\SSTOR.SYS /VIRTUAL
	
	This will solve the problem, but will use an extra 32K of conventional memory.
	
	Storage Dimensions is aware of this problem and will address it in a future
	release.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.00 3.00a 3.10 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
