---
layout: page
title: "Q69302: Changing Display Contrast on Toshiba Laptops Using XCHAD.EXE"
permalink: kb/069/Q69302/
---

## Q69302: Changing Display Contrast on Toshiba Laptops Using XCHAD.EXE

	Article: Q69302
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Toshiba T5100 and T3200 laptops have EGA gas plasma displays. When Microsoft
	Windows 3.0 or 3.1 are installed as EGA, labels of selected icons and title bars
	of active windows are invisible.
	
	RESOLUTION
	==========
	
	To correct the problem, install the video display enhancement program XCHAD.EXE
	available from Toshiba.
	
	MORE INFORMATION
	================
	
	Toshiba provides this screen utility for its laptop gas plasma displays. XCHAD
	provides brightness and contrast control for the Toshiba gas plasma display. By
	creating a batch file or putting an XCHAD.EXE command in the AUTOEXEC.BAT file,
	the screen contrast can be greatly enhanced.
	
	The XCHAD.EXE program is on the Toshiba Diagnostics and Supplemental disk you
	receive with the Toshiba DOS disks.
	
	Creating a Batch File
	---------------------
	
	1. Using Windows Notepad or another text editor, create the following batch file
	  and save it in your WINDOWS directory as WINPLSMA.BAT.
	
	        XCHAD 0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3 /M10
	        WIN
	
	2. Exit Windows and start it again using WINPLSMA.BAT.
	
	You may also improve the video display contrast by setting the Color Schemes to
	Fluorescent under Color from the Control Panel settings.
	
	For more information about XCHAD.EXE, contact Toshiba technical support.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11 KBHW lap-top laptop lap top 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
