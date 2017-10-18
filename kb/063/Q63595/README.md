---
layout: page
title: "Q63595: Windows 3.0: Installing Video Seven's High-Resolution Drivers"
permalink: kb/063/Q63595/
---

## Q63595: Windows 3.0: Installing Video Seven's High-Resolution Drivers

	Article: Q63595
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information is contained in the README.TXT supplied with the supplementary
	high-resolution graphics drivers available from Video Seven. All questions
	regarding these drivers should be directed to Headland Technologies.
	
	MORE INFORMATION
	================
	
	Video Seven provides the following Microsoft Windows version 3.0 drivers
	for the Video Seven V-RAM VGA and VGA 1024i:
	
	  Filename       Video Resolution
	  -------------  -------------------------
	
	   V754016.DRV   720 x 540  16 color
	   V760016.DRV   800 x 600  16 color
	   V776816.DRV   1024 x 768  16 color (requires 512K)
	   V7512256.DRV  720 x 512 256 color (V-RAM VGA 512K only)
	
	The Windows 3.0 package contains a 640 x 480 16-color and 256-color
	driver for the Video Seven VGA card.
	
	The example below shows how to install the 800 x 600 16-color driver.
	You can install a different resolution driver by substituting the
	driver filename for the resolution you want to install. You should
	already have Windows 3.0 installed, using the Video Seven driver
	supplied with Windows (640 x 480 with 256 colors).
	
	1. Copy the V760016.DRV file from the floppy disk to the \SYSTEM
	  subdirectory under the directory where you have installed Windows
	  3.0 (for example, WIN3\SYSTEM\).
	
	2. Using a text editor (such as the Notepad from within Windows), change
	  the DISPLAY.DRV line of the SYSTEM.INI from DISPLAY.DRV=V7VGA.DRV to
	  DISPLAY.DRV=V760016.DRV.
	
	3. Check that the following lines appear in the [Boot] section of the
	  SYSTEM.INI file:
	
	     386GRABBER=V7VGA.GR3 (386 machines only) and
	     286GRABBER=VGACOLOR.GR2.
	
	  NOTE: If you have installed Windows for standard VGA you do not
	  have the file V7VGA.GR3 in your Windows directory. This file is
	  compressed and must be expanded off the original disks. The file
	  V7VGA.GR3 is on Windows Disk 4 on 5.25" media or Windows Disk 5 on
	  3.5" media. Or simply install Windows for Video Seven with 512K.
	
	4. Save the SYSTEM.INI file. Restart Windows from the MS-DOS prompt.
	  You are now in the 800 x 600 resolution mode. You can repeat
	  the above steps to change resolutions at any time.
	
	If you do not have Windows 3.0 installed, do the following:
	
	1. Install Windows 3.00 and select "Video Seven VGA with 512K" or
	  "VGA" depending on your memory configuration, as the display
	  option.
	
	2. Follow steps 1-4 above to change resolution.
	
	The products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
