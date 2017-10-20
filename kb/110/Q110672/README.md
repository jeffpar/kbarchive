---
layout: page
title: "Q110672: Flight Simulator: Diamond Viper SVGA Mode Requirements"
permalink: /kb/110/Q110672/
---

## Q110672: Flight Simulator: Diamond Viper SVGA Mode Requirements

{% raw %}

	Article: Q110672
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Diamond Computer Systems technical support has confirmed that the Diamond Viper
	2 MB video card works with Flight Simulator 5.0 in SVGA mode using the version
	2.04 or later VPRMODE driver.
	
	MORE INFORMATION
	================
	
	The VRPMODE driver can be obtained from the Diamond Computer Systems electronic
	bulletin board by downloading VPRM204.EXE, or by contacting Diamond Computer
	Systems technical support.
	
	Follow these steps to enable the VPRMODE driver:
	
	1. Copy VPRMODE.EXE to your Flight Simulator directory (usually the FLTSIM5
	  directory).
	
	2. Using a text editor such as the MS-DOS Edit utility, open the AUTOEXEC.BAT
	  file from the root directory.
	
	3. Add the following line to the AUTOEXEC.BAT file
	
	  C:\<path>\VPRMODE VESA
	
	  where <path> is the path to the VPRMODE program. For example, if you
	  copied VPRMODE.EXE to your FLTSIM5 directory, enter the following line:
	
	  C:\FLTSIM5\VPRMODE VESA
	
	4. Save changes to the AUTOEXEC.BAT file and restart your machine.
	
	5. Change to the Flight Simulator directory. For example if your directory is
	  named FLTSIM5, type the following at the MS-DOS command prompt and press
	  ENTER:
	
	  cd fltsim5
	
	6. Type the following and press ENTER:
	
	  setup
	
	7. At the first Setup screen, change Display to SVGA 640 x 400 256 Colors.
	
	8. Click VESA 1.2 Compatible as the video card type.
	
	9. Continue through Setup and run Flight Simulator; the display will now be in
	  SVGA 640 x 400 256 Colors.
	
	For more information, contact Diamond Computer Systems:
	
	- Technical support: (408) 325-7100
	
	- BBS support 2400 only: (408) 325-7080
	
	- BBS support 9600 only: (408) 325-7175
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 5.00 flightsim fltsim dos FS5 flash
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
