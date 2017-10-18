---
layout: page
title: "Q69965: Automating Network Setup Video Options via SETUP.INF"
permalink: kb/069/Q69965/
---

## Q69965: Automating Network Setup Video Options via SETUP.INF

	Article: Q69965
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows 3.0 is set up on a network workstation via the SETUP /N command, a
	Windows Setup Hardware List appears with a Display option.
	
	If some of these workstations have Super VGA cards (SVGA) that can deliver 800 x
	600 or 1024 x 768 resolutions, then it is possible to add the proper
	manufacturers' software driver as an option to the Hardware List by editing the
	SETUP.INF before running SETUP /N on the individual workstations.
	
	MORE INFORMATION
	================
	
	Use the following outline to add additional video display driver Options via the
	SETUP.INF file.
	
	1. Copy the display drivers for the video card into the shared Windows
	  directory. Make sure that none of the files replace existing Windows files.
	
	2. Edit SETUP.INF with a standard ASCII text editor and locate the lines:
	
	        [display]
	        ;profile=driver, description of driver, resolution, 286 grabber,
	        logo code, VDD, 386grabber, ega.sys, logo data
	
	3. Add a new line to this section of the SETUP.INF following the format above
	  exactly. Use the entry for Windows standard VGA as a reference point and
	  substitute the new .DRV, .GR3, or VDD file names as supplied by the
	  manufacturer.
	
	For example, if the custom video driver you received for your Paradise video card
	came with two files, PVGA800.DRV (a 800 x 600 driver) and VPVGA.GR3, then you
	would add a new line under [DISPLAY] for the new video driver and resolution.
	Copy the line for the standard "VGA" driver line exactly (commas and quotation
	marks are IMPORTANT), but change the profile, driver, description of driver, and
	386grabber to match the new driver. If you want to use the larger 8514 fonts,
	you may also want to change the resolution option from "100,96,96" to
	"100,120,120":
	
	Example
	
	     P800VGA=7:PVGA800.DRV, "Paradise 800x600 16 Color",
	     "100,120,120", 3:vgacolor.gr2, 2:vgalogo.lgo, x:*vddvga,
	     7:vpvga.gr3,, 2:vgalogo.rle
	
	DEFINITIONS OF 10 SETTINGS
	--------------------------
	
	Setting        Definition
	-------        ----------
	
	profile        Short driver name
	
	driver         Name of the driver (that is, PVGA800.DRV)
	
	driver         Name that the Windows Setup program shows
	description
	
	resolution     What font set to use:
	
	                "100,120,120" = 8514 fonts.
	                "100,96,96" = VGA fonts.
	                "133,96,72" = EGA and Hercules fonts.
	                "200,96,48" = CGA fonts.
	
	286 grabber   Screen grabber for old applications in
	             a real and standard modes
	
	logo code     Startup logo to use
	
	vdd           Virtual display driver - video display
	             for virtual machines in 386 enhanced mode
	
	386grabber    Screen grabber for old applications in
	             enhanced mode.
	
	ega.sys       Where to find EGA.SYS if needed
	
	logo data     Logo information to be bound into WIN.COM
	
	The SETUP.INF file is a comma delineated text file formatted for 160 columns that
	supplies customized directions to the SETUP.EXE.
	
	Preferred Workstation Setup Method
	----------------------------------
	
	Install Windows 3.0 on a network (see pages 543-556 of the "Microsoft Windows
	User's Guide"), and then run the SETUP /N command on each workstation. In some
	instances (for example, large workstation groups) it may not be efficient to do
	this and then customize each workstation individually. By editing the SETUP.INF
	file with a text editor, it is possible to enhance the SETUP /N command so that
	it customizes each workstation to a company standard.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." version 3.0, "Networks and Windows," pages
	543-556.
	
	"PC Magazine," December 11, 1990, "Windows" column. Pages 503-505.
	
	Additional query words: 3.00 3.0 3.0a 3.00a Kbsetup win30 SETUP.INF, NETWORKS.TXT
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
