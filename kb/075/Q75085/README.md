---
layout: page
title: "Q75085: Incorrect OEM DOS Causes MS-DOS Upgrade Setup Error"
permalink: kb/075/Q75085/
---

## Q75085: Incorrect OEM DOS Causes MS-DOS Upgrade Setup Error

	Article: Q75085
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a you are using an original equipment manufacturer (OEM) version of DOS that
	does not correspond to your computer manufacturer (for example, you are using
	IBM PC-DOS on a Zenith), the Microsoft MS-DOS 5 Upgrade and MS-DOS 6 Upgrade
	Setup programs may not work correctly. If this is the case, Setup displays the
	following error message:
	
	  UNRECOVERABLE ERROR
	  ERROR READING FILE SETUP.INI
	
	WORKAROUND
	==========
	
	To work around the error message, do the following:
	
	1. Use the VER command to verify that the correct OEM DOS version is being used
	  (that is, the DOS that came with the machine).
	
	2. If an incorrect OEM DOS version is being used, install the OEM DOS that came
	  with the machine.
	
	3. Run the MS-DOS Upgrade Setup program again.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
