---
layout: page
title: "Q97106: MS-DOS Upgrade Setup May Not Disable PC-KWIK Disk Cache"
permalink: /kb/097/Q97106/
---

## Q97106: MS-DOS Upgrade Setup May Not Disable PC-KWIK Disk Cache

	Article: Q97106
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the command for PC-KWIK has a leading at sign (@) in your AUTOEXEC.BAT file,
	Setup does not detect the disk cache and therefore cannot remark it out before
	adding the command for SMARTDrive (SMARTDRV.EXE).
	
	Microsoft does not recommend running two disk caches; be sure to disable one
	before you run Setup. To disable PC-KWIK, edit the AUTOEXEC.BAT file with an
	ASCII text editor, such as MS-DOS Editor, and add the remark statement (REM) in
	front of the command for PC-KWIK. For example:
	
	  rem @call c:\pckwik\superon
	
	MORE INFORMATION
	================
	
	The PC-KWIK version 4.21 installation program adds the following line to the
	AUTOEXEC.BAT file:
	
	  @call c:\pckwik\superon
	
	Additional query words: 6.22 6.00 6.20 pckwik pc kwik quick
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
