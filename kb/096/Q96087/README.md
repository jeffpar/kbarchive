---
layout: page
title: "Q96087: Bernoulli Drive Doesn't Mount with DoubleSpace Loaded"
permalink: kb/096/Q96087/
---

## Q96087: Bernoulli Drive Doesn't Mount with DoubleSpace Loaded

	Article: Q96087
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	]This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and
	filenames.
	
	If DBLSPACE.SYS is loaded in the CONFIG.SYS file before Iomega's device driver
	(RCD.SYS) then the Bernoulli mount code is discarded before the Bernoulli drives
	become readable.
	
	RCD.SYS should be loaded as high as possible in the CONFIG.SYS file and MUST be
	loaded before DBLSPACE.SYS.
	
	NOTE: DBLSPACE.SYS does not load a device driver for DoubleSpace. It simply moves
	DBLSPACE.BIN in memory.
	
	MORE INFORMATION
	================
	
	This problem may be corrected by later version of the Iomega driver.
	
	
	Contact Iomega for more information.
	
	The Iomega and Bernoulli products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.0 double space dblspace 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
