---
layout: page
title: "Q79257: Ahead Systems Video Drivers for Windows"
permalink: kb/079/Q79257/
---

## Q79257: Ahead Systems Video Drivers for Windows

	Article: Q79257
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ahead Systems ships the following video adapters, which include specific Windows
	3.0 video drivers, for the following display card models:
	
	  VGA Wizard/Deluxe 5.0    (ISA board)
	  VGA Wizard               (ISA board)
	  VGA Wizard/3270          (ISA board)
	  VGA Enhancer Z           (MCA board)
	  VGA Eagle                (MCA board)
	
	MORE INFORMATION
	================
	
	The Ahead Systems user manuals refer you to the DRIVER.DOC file included on the
	utility disk for installing the appropriate driver. The procedure involves
	expanding your driver from your "zipped" (compressed) format on the utility disk
	to a blank formatted disk that will be a working install disk. It is important
	to also copy the OEMSETUP.INF file to the working install disk.
	
	Once the working install disk has been created, it will contain the following
	video drivers for appropriate resolutions:
	
	  Drivers      Resolution  Colors
	  -------      ----------  ------
	
	  WIN480.DRV   640 x 480   16 colors
	  WIN600.DRV   800 x 600   16 colors
	  WIN768.DRV   1024 x 768  16 colors
	  W480.DRV     640 x 480   16 colors
	  W600.DRV     800 x 600   256 colors
	  W768.DRV     1024 x 768  256 colors
	
	  Drivers        Description
	  -------        -----------
	
	  OEMSETUP.INF   Setup information file to ensure all files are
	                   installed properly
	  VDDVGA.386     Virtual device driver to load for enhanced mode
	
	To use a specific driver, use the Windows Setup program to install the driver to
	the hard drive from the working install disk.
	
	If during the installation procedure of the video driver you receive a request
	for a .GRB file, then the OEMSETUP.INF was probably not copied to the working
	installation disk.
	
	For additional information, please contact Ahead Systems.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.0a Eagle Wizard Enhancer
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
