---
layout: page
title: "Q100933: &quot;Load POWER.EXE Before Loading ...&quot; with Prohance Trackball"
permalink: kb/100/Q100933/
---

## Q100933: &quot;Load POWER.EXE Before Loading ...&quot; with Prohance Trackball

	Article: Q100933
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Prohance Power Track multi-button trackball and you try to
	start Windows (in any mode), you may receive the following error message:
	
	  Load POWER.EXE Before Running Windows
	
	NOTE: Do not confuse the POWER.EXE file in this error message with the MS-DOS 6
	or 6.2 POWER.EXE file.
	
	MORE INFORMATION
	================
	
	Prohance's POWER.EXE is a program that allows you to configure the buttons of
	the Prohance mouse. This program should be loaded in the AUTOEXEC.BAT file. Load
	Prohance's POWER.EXE from the Prohance directory; otherwise, the MS-DOS 6 or 6.2
	POWER.EXE may be found first and loaded.
	
	Microsoft's POWER.EXE file ships with MS-DOS 6.0 and 6.2 and reduces power
	consumption when applications and devices are idle.
	
	For more information on using advanced power management (APM) and Prohance's
	POWER.EXE together, call Prohance Technical Support.
	
	The Prohance Power Track multi-button trackball is manufactured by Prohance, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	Additional query words: tshoot 3.10 3.1 error message pro hance multibutton
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	
	=============================================================================
	
