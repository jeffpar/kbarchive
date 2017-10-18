---
layout: page
title: "Q96555: INTERLNK.EXE Doesn't Work with Xircom PPX and Pocket Adapter"
permalink: kb/096/Q96555/
---

## Q96555: INTERLNK.EXE Doesn't Work with Xircom PPX and Pocket Adapter

	Article: Q96555
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Interlnk does not work properly with the Xircom Parallel Port Multiplexor (PPX)
	unless it is on the logical port assigned the hardware interrupt. Since only one
	of the two logical ports can be assigned the hardware interrupt and the Xircom
	Pocket Adapter must be on the port assigned the hardware interrupt, you cannot
	use both INTERLNK.EXE and the Xircom Pocket Adapter at the same time.
	
	MORE INFORMATION
	================
	
	By setting up a MS-DOS 6 multiple-configuration menu, you can start your
	computer with the appropriate configuration for either the Xircom Pocket Adapter
	or Interlnk.
	
	NOTE: This information also applies to Intersvr, which also requires the hardware
	interrupt.
	
	
	Additional query words: 6.22 6.00 6.20 multi-config multiconfig
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
