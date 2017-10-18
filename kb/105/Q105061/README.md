---
layout: page
title: "Q105061: ScanDisk Fails to Reset Video Mode Correctly"
permalink: kb/105/Q105061/
---

## Q105061: ScanDisk Fails to Reset Video Mode Correctly

	Article: Q105061
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Video Dimensions (an MS-DOS-based screen control program)
	when you run ScanDisk, your video mode may not be reset correctly.
	
	For example, if the screen is set at 43 or 50 lines, when ScanDisk exits, it
	places the screen in 67-line mode.
	
	RESOLUTION
	==========
	
	To work around this problem, do not load the Video Dimensions software before
	you run ScanDisk.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
