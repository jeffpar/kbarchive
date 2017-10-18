---
layout: page
title: "Q73626: Adaptec RLL Controller and UMA Address Range"
permalink: kb/073/Q73626/
---

## Q73626: Adaptec RLL Controller and UMA Address Range

	Article: Q73626
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Adaptec RLL ACB-2370 and ACB-2372 hard drive controller cards use a 16K
	address range in the upper memory area (UMA). Both of these cards can be
	configured for two ranges: either CC00-CFFF or the default range C800-CBFF.
	
	On both cards, the jumper marked J12 is used to set this address range. If the
	jumper is set to positions 1 and 2, the card is configured for C800-CBFF. If set
	to positions 2 and 3, the card is set for CC00-CFFF. If the jumper is removed,
	no address range is used by the controller card.
	
	MORE INFORMATION
	================
	
	To use EMM386.EXE to load device drivers high, use the ADAPTEC.SYS driver, and
	be sure to exclude the range used by the Adaptec controller. For example, if the
	card is configured for the default settings, the address range used can be
	excluded by changing the EMM386 line in the CONFIG.SYS file as follows:
	
	     device=c:\dos\emm386.exe noems x=C800-CFFF
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
