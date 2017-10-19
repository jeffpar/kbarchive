---
layout: page
title: "Q89720: Delay when Displaying Command Prompt"
permalink: /kb/089/Q89720/
---

## Q89720: Delay when Displaying Command Prompt

	Article: Q89720
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
	
	When switching from one drive to another from the command prompt, there may be a
	slight delay before the command prompt is displayed. This behavior may be due to
	a PROMPT command in the AUTOEXEC.BAT file.
	
	CAUSE
	=====
	
	This delay may occur when using the PROMPT command as follows:
	
	  prompt $p$g
	
	The $p parameter specifies the current drive and path to be included in the
	system prompt. When you use this parameter, the system has to read the disk
	every time it switches directories to determine the active directory, which will
	in turn be displayed as the command prompt. The $g parameter displays the
	greater than sign (>).
	
	This delay described above is not a problem with the PROMPT command; the delay
	occurs while MS-DOS is checking the drive for the current directory.
	
	Additional query words: 6.22 5.00 6.00 5.00a slow dos prompt root
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
