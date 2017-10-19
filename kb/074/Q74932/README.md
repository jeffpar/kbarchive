---
layout: page
title: "Q74932: Second FCBS Parameter Not Used in MS-DOS 5.x and 6.x"
permalink: /kb/074/Q74932/
---

## Q74932: Second FCBS Parameter Not Used in MS-DOS 5.x and 6.x

	Article: Q74932
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5.0 "User's Guide and Reference" and MS-DOS 6.0 "User's Guide" do not
	show a second parameter for the FCBS command. The online Help for MS-DOS 6.0 and
	6.2 also does not show this parameter.
	
	In previous versions of MS-DOS, the second FCBS parameter set the number of files
	opened by FCBs (file control blocks) that MS-DOS cannot close automatically.
	This parameter is no longer necessary with MS-DOS 5.x and later due to the
	nature of the new FCB scheme.
	
	When MS-DOS 5.x and later versions parse the CONFIG.SYS file, it disregards a
	second parameter if present on the FCBS line. This feature allows old style FCBS
	commands to be processed without error under MS-DOS 5.x and 6.x.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
