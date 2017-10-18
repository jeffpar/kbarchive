---
layout: page
title: "Q65456: Everex EV-673 Requires Everex VDD for Enhanced Mode"
permalink: kb/065/Q65456/
---

## Q65456: Everex EV-673 Requires Everex VDD for Enhanced Mode

	Article: Q65456
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Everex EV-673 EGA/VGA display card requires a special VDD (virtual display
	driver) to operate correctly under Windows 3.0 in enhanced mode. You do not need
	the special driver for real or standard mode.
	
	This Everex driver is named 673WIN3.EXE, and has a file size of 54218 bytes and a
	date of August 8, 1990. Earlier versions of this driver should not be used. This
	driver may be obtained from Everex Technical Support at (510) 498-1115, or by
	modem from the Everex electronic bulletin board at (510) 226-9694. Installation
	instructions are included in the driver package.
	
	According to Everex, there is no similar driver for Windows 3.1. The only
	workaround is to select EGA display.
	
	MORE INFORMATION
	================
	
	The Everex driver package for Windows 3.0 also includes an 800 x 600 16-color
	display driver that you can use to obtain higher resolution under Windows. The
	800 x 600 driver is not necessary for proper enhanced mode operation.
	
	Install OEM (original equipment manufacturer) VDD files by editing the [386Enh]
	section of the Windows 3.0 SYSTEM.INI file. The existing VDD line may read as
	follows:
	
	     [386Enh]
	     display=*vddvga
	
	This should be changed to read as follows:
	
	     [386Enh]
	     display=673win3.exe
	
	Then, the 673WIN3.EXE file should be placed in the SYSTEM subdirectory.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
