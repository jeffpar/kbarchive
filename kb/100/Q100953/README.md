---
layout: page
title: "Q100953: Inaccuracies in DoubleSpace Manager Change Size Screen"
permalink: kb/100/Q100953/
---

## Q100953: Inaccuracies in DoubleSpace Manager Change Size Screen

	Article: Q100953
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Change Size screen in DoubleSpace Manager (DBLSPACE.EXE) states that the
	value for "new free space" is based on a number equal to the current estimated
	compression ratio (ECR). This is incorrect; this value is based on the current
	actual compression ratio (ACR).
	
	MORE INFORMATION
	================
	
	When you use DoubleSpace Manager to change the size of a compressed drive, a
	screen similar to the following is displayed:
	
	                            Compressed          Uncompressed
	                             Drive C:           Drive H:
	Current drive size:           189.13 MB         101.00 MB
	Current free space:           149.26 MB           2.47 MB
	
	Minimum free space:              .12 MB            .54 MB
	Maximum free space:           128.55 MB          76.71 MB
	
	New free space:               125.30 MB**      [2.47 ] MB
	
	** based on an estimated compression ratio of 2.0 to 1.
	
	NOTE: The numbers above are examples only.
	
	The value for new free space is accurate. (It will be the new size of the
	compressed drive after resizing.) However, the value for new free space is based
	on an ECR equal to the current ACR, not the current ECR as DoubleSpace
	suggests.
	
	This discrepancy can cause misleading values for minimum free space and maximum
	free space. In particular, maximum free space is often less than the current
	free space, as seen in the above example.
	
	NOTE: When DoubleSpace resizes a compressed drive, it changes the ECR from its
	current value to a new value equal to the current ACR.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
