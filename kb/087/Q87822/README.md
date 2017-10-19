---
layout: page
title: "Q87822: ROTATE.DRV Will Not Rotate Full-Screen MS-DOS Applications"
permalink: /kb/087/Q87822/
---

## Q87822: ROTATE.DRV Will Not Rotate Full-Screen MS-DOS Applications

	Article: Q87822
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows for Pen Computing, the Rotate Screen Orientation function from
	Control Panel controls only Windows or MS-DOS-based applications running in a
	window.
	
	Full-screen MS-DOS-based applications and the MS-DOS command prompt will not be
	affected.
	
	MORE INFORMATION
	================
	
	To rotate an MS-DOS-based application, you must run the application in a
	window.
	
	MS-DOS-based applications can only be run in a window while Windows is in 386
	enhanced mode.
	
	If you are running a full-screen MS-DOS-based application and you want to run the
	application in a window, press ALT+ENTER.
	
	For more information on this procedure see pages 21-22 of the "Microsoft Windows
	User's Guide" for version 3.1.
	
	To run an MS-DOS-based application in a window automatically when it is launched,
	start the program using a program instruction (PIF) file. You may want to start
	the MS-DOS-based application by writing a PIF file.
	
	The Rotate Screen Orientation icon may be added to the Control Panel by the
	Windows for Pen Computing extensions. Due to the variety of hardware offered by
	Pen Computing equipment manufactures, you may want to customize the display
	screen orientation by rotating it from landscape to portrait.
	
	The Rotate Screen Orientation icon will appear in the Control Panel if the
	CPROT.CPL file is recognized in the CONTROL.INI file. The default location
	should be in the C:\WINDOWS\SYSTEM directory. This is an extenuation to Windows
	and therefore does not affect MS-DOS or the hardware.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100 kbWinPen100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
