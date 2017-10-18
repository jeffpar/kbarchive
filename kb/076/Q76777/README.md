---
layout: page
title: "Q76777: README.TXT: Running Specific Windows Applications"
permalink: kb/076/Q76777/
---

## Q76777: README.TXT: Running Specific Windows Applications

	Article: Q76777
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Windows with Multimedia Extensions
	version 1.0 README.TXT file. The Setup program copies this file to the Windows
	with Multimedia Extensions directory.
	
	This information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	RUNNING SPECIFIC WINDOWS APPLICATIONS
	=====================================
	
	This section describes some problems you might have running some
	Windows applications.
	
	Control Panel
	-------------
	
	If you are running Windows 3.0 in real mode and using expanded memory,
	a new desktop wallpaper selection will not take effect immediately.
	You must quit and then restart Windows to see the new selection.
	
	Print Manager and Network Printers
	----------------------------------
	
	The availability of several features in Print Manager depends on the
	support provided by your Network software. The NETWORKS.TXT on-line
	document contains important information about the networks you can use
	with Windows and which features are available in Print Manager for
	each network type. See NETWORKS.TXT for more information.
	
	Using Terminal from the OS/2 DOS Compatibility Box
	--------------------------------------------------
	
	If you want Terminal to communicate through COM ports from the OS/2
	DOS compatibility box, you must set the port before you start Windows.
	To do so, you can run the SETCOM command from the DOS prompt or you
	can include the initialization in your CONFIG.SYS file.
	
	To set the COM port from the DOS prompt, type the following before you
	start Windows:
	
	  SETCOM40 COMx=ON
	
	For example, if you want to use COM1, you would type the following
	command:
	
	  SETCOM40 COM1=ON
	
	To set the COM port automatically, you can add a line in your
	CONFIG.SYS file. See your OS/2 documentation for instructions.
	
	Paintbrush
	----------
	
	You can print color images from Paintbrush only if you are using a
	color POSTSCRIPT printer or an HP PaintJet printer. These are the only
	printers that currently recognize Device Independent Bitmaps (DIBs),
	the color file format Paintbrush uses.
	
	In addition, when running Windows in real mode, you might receive
	out-of-memory messages when you try to print. If so, try one of the
	following:
	
	- Close all other applications and try printing again.
	
	- Save the Paintbrush file and exit Windows. Start Windows
	  again in standard mode or 386 enhanced mode, and then print
	  the Paintbrush file.
	
	- If you can run only in real mode, you can convert the color
	  image and save it to a black and white format, then open
	  the converted file, and print the monochrome bitmap.
	
	Additional query words: MMWIN kbmm 1.00 readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
