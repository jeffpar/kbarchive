---
layout: page
title: "Q119143: Err Msg: Insufficient Memory with SHARE.EXE"
permalink: /kb/119/Q119143/
---

## Q119143: Err Msg: Insufficient Memory with SHARE.EXE

	Article: Q119143
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exceeding a 64-kilobyte (K) memory segment by incorrectly configuring SHARE.EXE
	causes the following error message during startup:
	
	  Insufficient memory
	
	CAUSE
	=====
	
	SHARE.EXE is limited to a 64K memory segment. Consequently, there are limits on
	the amount of file-sharing space that can be allocated and the number of locks
	that can be specified. Exceeding these limits causes insufficient memory errors
	because SHARE.EXE tries to exceed its 64K memory segment boundary.
	
	RESOLUTION
	==========
	
	Reconfigure SHARE.EXE with appropriate file-sharing and lock values.
	
	MORE INFORMATION
	================
	
	The /F switch controls the amount of buffer space allocated for file- sharing
	information. Each open file requires the length of its full name, including the
	path, plus some overhead. The default value of 2048 can accommodate
	approximately 100 files with paths of average length (approximately 20 bytes
	long).
	
	The /L switch controls the number of entries to be allocated for an internal
	table containing file-locking information. Each active lock on a region of a
	file occupies one entry in the table. The default value is 20. Each lock
	consumes approximately 18 bytes of memory.
	
	You can use the following formula to estimate memory usage by SHARE.EXE
	
	     F + (L*18) + 2565 <= 65,535
	
	where F is the /F switch value, L is the /L switch value (each L=18 bytes), and
	2565 is the size of SHARE's resident code. The total must be less than or equal
	to 64K (65,535 bytes).
	
	Additional query words: limitation out max maximum limits 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
