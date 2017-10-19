---
layout: page
title: "Q85705: Compuserve's CIM May Not Run on Packard Bell with SVGA Display"
permalink: /kb/085/Q85705/
---

## Q85705: Compuserve's CIM May Not Run on Packard Bell with SVGA Display

	Article: Q85705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers such as the Packard Bell Legend and Force Computer Systems, which are
	configured with an OAK super VGA card, may stop when running CompuServe
	Information Manager (CIM) software with Microsoft Windows 3.1.
	
	CAUSE
	=====
	
	This problem is due to the software-switching feature of the Packard Bell SVGA
	board. When starting an MS-DOS application, the driver causes the display to
	automatically switch back to standard VGA mode.
	
	RESOLUTION
	==========
	
	To correct this problem, install the VGA display driver included with Windows
	3.1.
	
	MORE INFORMATION
	================
	
	This problem occurs with the Packard Bell driver WIN3_800.DRV version 7.02. The
	file WIN3_800.DRV is located on the Packard Bell VGA Utilities disk included
	with the system. This driver supports 800 x 600 resolution on the OAK super VGA
	card (OTI 037 Chip set).
	
	
	For more information on the WIN3_800.DRV video driver, contact Oak Technologies.
	For assistance with Packard Bell products, contact Packard Bell.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.1 3.10 hang crash freeze
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
