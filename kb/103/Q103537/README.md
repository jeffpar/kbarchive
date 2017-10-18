---
layout: page
title: "Q103537: MS-DOS Upgrade Setup Doesn't Detect @ Symbol in AUTOEXEC.BAT"
permalink: kb/103/Q103537/
---

## Q103537: MS-DOS Upgrade Setup Doesn't Detect @ Symbol in AUTOEXEC.BAT

	Article: Q103537
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a command in your AUTOEXEC.BAT file has a leading at sign (@), MS-DOS 6
	Upgrade Setup does not analyze the line. For example, if you have "@CALL
	C:\PCKWIK\SUPERON" in your AUTOEXEC.BAT file, MS-DOS 6 Upgrade Setup does not
	detect the PC-KWIK cache. As a result, you end up with two disk caches loaded at
	the same time.
	
	NOTE: This problem does not occur with MS-DOS 6.2 Upgrade Setup because it
	correctly analyzes lines with leading @ signs. However, during the updating of
	your AUTOEXEC.BAT file, the @ sign is removed.
	
	MORE INFORMATION
	================
	
	Microsoft does not recommend running two disk caches; be sure to disable one
	before you run Setup. To disable PC-KWIK, edit the AUTOEXEC.BAT file with an
	ASCII text editor, such as MS-DOS Editor, and add the remark statement (REM) in
	front of the command for PC-KWIK. For example:
	
	  rem @call c:\pckwik\superon
	
	Additional query words: 6.22 6.00 6.20 pckwik pc kwik quick symbol
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
