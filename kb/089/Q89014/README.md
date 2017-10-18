---
layout: page
title: "Q89014: Video Problems with the Compaq Portable III/Portable 386"
permalink: kb/089/Q89014/
---

## Q89014: Video Problems with the Compaq Portable III/Portable 386

	Article: Q89014
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows on a COMPAQ Portable III or a COMPAQ PORTABLE 386
	machine, the screen may turn black and the computer may freeze, or you may
	receive the error message
	
	  Error Initializing Video Driver.
	
	MORE INFORMATION
	================
	
	Error Initializing Video Driver
	-------------------------------
	
	If you install Microsoft Windows operating system version 3.1 on a COMPAQ
	PORTABLE 386 or a COMPAQ Portable III and the display is set to an external
	monitor, when you try to enter standard-mode Setup, Windows either stops
	responding or exits to MS-DOS with the following error message:
	
	  Error initializing video driver
	
	To correctly install Windows 3.1 on a COMPAQ PORTABLE 386 or COMPAQ Portable III
	with an external monitor, make sure the following conditions exist:
	
	- The COMPAQ plasma display must be set to Monochrome Mode. This is
	  accomplished by setting the E23 jumper to 2-3. (If the E23 jumper is set to
	  1-2, you receive the above error message.)
	
	  -and-
	
	- The external monitor must be the primary and active monitor before you start
	  the Windows Setup program.
	
	Blank Screen and Computer Freezes
	---------------------------------
	
	Compaq Portable III and Compaq PORTABLE 386 machines are shipped with a Compaq
	Dual-Mode Plasma display built into the machine.
	
	The default Windows Setup selection for this display is the Compaq Dual-Mode Gas
	Plasma display. However, if the display is configured as a monochrome display
	adapter (MDA), this selection causes the screen to appear blank and the computer
	to stop responding.
	
	To correct this problem, add the following line to your AUTOEXEC.BAT file, or
	type the line manually at the command prompt:
	
	  mode sel cga
	
	After command is executed, Windows works correctly.
	
	Some Compaq portable displays are reconfigured for MDA so that they can function
	with a third-party EGA or VGA display adapter mounted in the expansion chassis;
	an adapter conflict occurs unless these displays are reconfigured.
	
	The above workaround is necessary only if the machine has been reconfigured for
	MDA. If the default Windows choice for Dual-Mode Gas Plasma display does not
	work correctly, issue the above command.
	
	Additional query words: 3.00 3.00a 3.10 3.11 black setup mono err msg hang 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11,95
	
	=============================================================================
	
