---
layout: page
title: "Q75227: Microspeed Trackball Incompatible with MS-DOS Shell"
permalink: kb/075/Q75227/
---

## Q75227: Microspeed Trackball Incompatible with MS-DOS Shell

	Article: Q75227
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microspeed Trackball driver version 2.1e or earlier may cause problems when
	running with MS-DOS Shell. During the MS-DOS version 5.0 installation, you may
	get the following message:
	
	  Mouse Driver is outdated and may cause problems to the system if not updated.
	
	MORE INFORMATION
	================
	
	The Microspeed Trackball PPR device driver does not work correctly within MS-DOS
	Shell. To solve this problem, try one of the following:
	
	1. Install the device driver as a two-button mouse.
	
	2. Use MS-DOS Shell in 25-line graphics, low-resolution mode. To force Shell
	  into this mode, type the following when starting Shell:
	
	  " DOSSHELL /G:L " (without the quotation marks)
	
	  NOTE: If you use Shell in text mode, the driver may cause Shell's text to be
	  the same color as the background screen color.
	
	3. If you are using a serial or PS/2 Trackball and still have graphical or
	  operational problems with the Microspeed PPR driver with Shell, load the
	  Microsoft Mouse driver MOUSE.COM instead of the Microspeed PPR driver.
	
	  Windows users should refer to the document file named UNPACK.DOC on
	  Microspeed's PPR disk for additional information on using and installing
	  MOUSE.COM.
	
	  If you have the PDA Bus Card, refer to the Windows installation sheet, section
	  2.0, that came with the Trackball. It has information on how install the PDA
	  Bus Card with the Microsoft Mouse driver.
	
	  If you have the PDA bus version, be sure you have PPR software version 2.1D or
	  2.1E to use the Microsoft Mouse driver.
	
	  If you have the Bus Interface Card (BIC) that came with PPR version 2.2A, you
	  can use the Microsoft Mouse driver.
	
	The products included here are manufactured by Microspeed, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
