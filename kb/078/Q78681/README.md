---
layout: page
title: "Q78681: VTI Turbo 55 80286 Requires BIOS Version 3.22 or Later"
permalink: /kb/078/Q78681/
---

## Q78681: VTI Turbo 55 80286 Requires BIOS Version 3.22 or Later

	Article: Q78681
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an Award BIOS revision earlier than 3.22 is installed on a VTI Turbo 55
	computer, the following problems may appear after upgrading to MS-DOS 5.0 or
	later:
	
	- Difficulty reading and writing to the hard drive
	
	- Machine not bootable with IDE drive
	
	- Random POST (power on self test) error codes at boot-up (that is, 1701, 1702)
	
	The VTI Turbo 55 computer requires Award BIOS revision 3.22 or later to correctly
	run MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	The VTI Turbo 55 is an 80286 based computer that originally shipped with Award
	Modular BIOS revision 3.03. This version of the BIOS does not support IDE
	drives, and may produce the above problems with MS-DOS 5.0 or later. This
	particular machine was manufactured by Samsung for the Philips Corporation, and
	also was issued under the model designation SAMSUNG S550.
	
	Philips and Award concur on the necessity of the BIOS upgrade for full
	functionality.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 MSDOS 5.00 SAMSUNG-S550 VENDEX 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	
