---
layout: page
title: "Q80178: Mouse Systems OEM Driver for Windows"
permalink: /kb/080/Q80178/
---

## Q80178: Mouse Systems OEM Driver for Windows

{% raw %}

	Article: Q80178
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mouse Systems mouse includes replacement drivers for use with Windows
	version 3.0.
	
	There are two drivers for the Mouse Systems mouse and Windows 3.0:
	
	- 3BC2WIN3.DRV: This is the driver for the three-button protocol mouse on COM2.
	
	- GNRWIN3.DRV: This is the driver for the two-button AND three-button protocol
	  mouse (or PC Trackball) on COM ports or a bus port.
	
	MORE INFORMATION
	================
	
	Installing a Driver
	-------------------
	
	To install one of the above drivers:
	
	1. Run Windows Setup.
	
	2. From the Options menu, select Change System Settings.
	
	3. Select Other and press ENTER.
	
	  NOTE: This requires a disk provided by a hardware manufacturer.
	
	4. Insert the Mouse Systems disk and enter the correct path for the disk.
	
	5. Choose one of the following options, then press ENTER:
	
	   - Mouse Systems, GENERAL VERSION, Windows 3.0
	
	   - Mouse Systems 3 Button Mouse on COM2, Windows 3.0
	
	6. Choose Accept the Configuration Shown Above and press ENTER.
	
	Installing the Bus Mouse Virtual Mouse Driver
	---------------------------------------------
	
	Mouse Systems also has a replacement virtual mouse driver for their bus mouse. To
	use this driver:
	
	1. Copy the file VMD.386 from the Mouse Systems disk to the WINDOWS\SYSTEM
	  directory.
	
	2. Using a text editor such as Notepad, edit the [386enh] section of the
	  SYSTEM.INI file. Change the line that reads:
	
	       mouse=*vmd
	
	  to:
	
	       mouse=vmd.386
	
	These drivers are available on the Mouse Systems BBS. Download the self-
	extracting file called WIN3DRV.EXE. Contained in this file are the following
	files:
	
	  GRNWIN3.DRV
	  3BC2WIN3.DRV
	  VMD.386
	  WINDOWS3.DOC
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
