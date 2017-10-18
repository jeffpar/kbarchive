---
layout: page
title: "Q135176: MS-DOS-Based Program Does Not Detect VESA Graphics"
permalink: kb/135/Q135176/
---

## Q135176: MS-DOS-Based Program Does Not Detect VESA Graphics

	Article: Q135176
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running an MS-DOS-based program in a windowed MS-DOS session, the
	program may report one of the following errors:
	
	  - High-resolution graphics are not available
	
	  - VESA graphics are not available
	
	  - SVGA graphics are not available
	
	CAUSE
	=====
	
	These programs perform a VESA service call to query the device capabilities. In
	order to satisfy the request, the MS-DOS session must be converted to
	full-screen so that the BIOS can inspect the video hardware and obtain the
	correct information about the device capabilities.
	
	Under certain circumstances, Windows 95 may fail to do this conversion
	automatically, resulting in the program not detecting the availability of
	high-resolution graphics.
	
	RESOLUTION
	==========
	
	Configure the program to run in a full-screen MS-DOS session. To do so, follow
	these steps:
	
	1. In Windows Explorer or My Computer, use the right mouse button to click the
	  program's icon, and then click Properties on the menu that appears.
	
	2. Click the Screen tab.
	
	3. Click the Full-Screen option button.
	
	4. Click OK.
	
	Run the program by double-clicking the program icon instead of typing its name at
	an MS-DOS prompt, so that the appropriate configuration is applied to the
	program.
	
	MORE INFORMATION
	================
	
	Some programs query VESA device capabilities without immediately using the
	information returned. Such programs are converted to full-screen at the time the
	query is made, even though the program does not appear to be using graphics.
	
	The Epsilon editor from Lugaru (version 7.0) exhibits this behavior.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
