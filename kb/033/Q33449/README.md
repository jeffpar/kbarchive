---
layout: page
title: "Q33449: How to Increase MS-DOS Environment Space"
permalink: /kb/033/Q33449/
---

## Q33449: How to Increase MS-DOS Environment Space

	Article: Q33449
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an "out of environment space" error.
	
	CAUSE
	=====
	
	The "out of environment space" error can occur when there are many set commands
	or a long path statement in the AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	You can change the available environment space by putting the following line in
	the CONFIG.SYS file:
	
	  shell=c:\command.com /e:<size> /p
	
	To set the environment to 256 bytes, use one of the following lines:
	
	  MS-DOS Version          Configuration Command
	  ---------------------------------------------
	  3.00 or 3.10            shell=command.com /e:16 /p
	  3.20 or later           shell=command.com /e:256 /p
	
	MORE INFORMATION
	================
	
	The /e:<size> parameter specifies the environment size, where <size>
	is the size in bytes or in multiples of 16 bytes.
	
	The term "paragraph" is used to refer to these 16 bytes.
	
	For MS-DOS versions 3.0 and 3.1, size is in multiples of 16 bytes that you want
	to reserve for the MS-DOS environmental variables, ranging from 10 to 62
	paragraphs (160 to 992 bytes).
	
	For MS-DOS versions 3.2 and later, the size is the actual number of bytes,
	ranging from 160 to 32,768 bytes. MS-DOS rounds the specified size up to the
	next logical paragraph boundary.
	
	For MS-DOS versions 3.2x, 3.3x, 4.0, 4.01, and 4.01a, the default size is 160
	bytes.
	
	For MS-DOS version 5.0 and later, the default size is 256 bytes.
	
	NOTE: Attempting to use the /e:<size> parameter without the forward slash
	(/) results in the following error message at bootup:
	
	  Too many parameters
	
	Additional query words: 6.22 3.00 3.10 3.20 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
