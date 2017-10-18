---
layout: page
title: "Q120265: Using the Diamond Viper Video Card with Space Simulator"
permalink: kb/120/Q120265/
---

## Q120265: Using the Diamond Viper Video Card with Space Simulator

	Article: Q120265
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Space Simulator can be used in 640 x 400 resolution on a Diamond Viper video
	adapter if version 2.04 or later of the VPRMODE.EXE utility is used to supply
	VESA 1.2 compatibility.
	
	Space Simulator cannot use this video card in 800 x 600 resolution.
	
	MORE INFORMATION
	================
	
	The VRPMODE driver can be obtained from the Diamond Computer Systems electronic
	bulletin board by downloading VPRM204.EXE, or by contacting Diamond Computer
	Systems technical support.
	
	Follow these steps to enable the VPRMODE driver:
	
	1. Copy VPRMODE.EXE to your Space Simulator directory (usually the C:\SPACESIM
	  directory).
	
	2. Using a text editor such as the MS-DOS Edit utility, open the AUTOEXEC.BAT
	  file from the root directory of the boot drive.
	
	3. Add the following line to the AUTOEXEC.BAT file
	
	  c:\<path>\vprmode vesa
	
	  where <path> is the path to the VPRMODE program. For example, if you
	  copied VPRMODE.EXE to your C:\SPACESIM directory, enter the following line:
	
	  c:\spacesim\vprmode vesa
	
	4. Save changes to the AUTOEXEC.BAT file and restart your machine.
	
	5. Change to the Space Simulator directory. (For example if your directory is
	  named SPACESIM, type the following at the MS-DOS command prompt and press
	  ENTER:
	
	  cd\spacesim
	
	6. Type "setup" (without the quotation marks) and press ENTER.
	
	7. At the first Setup screen, set the Display option to:
	
	  <2> 640 x 400 (super VGA with 512K)
	
	8. On the next screen, set the video card type as VESA 1.2 Compatible.
	
	9. Continue through Setup and run Space Simulator. The display will now be in
	  SVGA 640 x 400, 256 colors every time you run Space Simulator.
	
	For more information, contact Diamond Computer Systems:
	
	  Technical support Diamond Speedstar video cards: (408) 325-7100
	  BBS support 2400 only: (408) 325-7080
	  BBS support 9600 only: (408) 325-7175
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 ss1 dos blinking flickering spacesim 800x600 640x400
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
