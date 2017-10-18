---
layout: page
title: "Q58341: Windows 3.0 SYSTEM.INI [boot] Section"
permalink: kb/058/Q58341/
---

## Q58341: Windows 3.0 SYSTEM.INI [boot] Section

	Article: Q58341
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	SYSINI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory,
	
	MORE INFORMATION
	================
	
	[BOOT] SECTION
	--------------
	
	The [boot] section contains a list of the drivers and Windows modules
	with which Windows configures itself when it is started.
	
	The [boot] section can contain the following settings:
	
	----------------------------------------------------------------------
	286grabber=<filename>
	Purpose: Specifies the filename of the device driver (called a
	        grabber) that makes a non-Windows application visible using
	        Windows in standard mode.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	386grabber=<filename>
	Purpose: Specifies the filename of the device driver (called a
	        grabber) that makes a non-Windows application visible using
	        Windows in 386 enhanced mode.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	comm.drv=<filename>
	Purpose: Specifies which serial communications driver you are using.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	display.drv=<filename>
	Purpose: Specifies which display driver you are using.
	To change: Choose the Windows Setup icon from the Main Group window.
	----------------------------------------------------------------------
	fixedfon.fon=<filename>
	Purpose: Specifies the fixed system font used by Windows Version 2.0.
	        This font would still be used by Version 2.0 applications.
	To change: Choose the Windows Setup icon from the Control Panel
	        window. This setting changes when you change the display
	        setting.
	----------------------------------------------------------------------
	fonts.fon=<filename>
	Purpose: Supplies the names of the font files for the ANSI character
	        set.
	To change: Choose the Windows Setup icon from the Control Panel
	        window. This setting changes when you change the display
	        setting.
	----------------------------------------------------------------------
	keyboard.drv=<filename>
	Purpose: Specifies which keyboard driver you are using.
	To change: Choose the Windows Setup icon from the Main Group window.
	----------------------------------------------------------------------
	language.dll=<library-name>
	Purpose: Specifies the dynamic-link library that supplies
	        language-specific functions. If no language library is
	        specified, Windows uses the built-in U.S. English library.
	To change: Choose the International icon from the Control Panel
	        window.
	----------------------------------------------------------------------
	mouse.drv=<filename>
	Purpose: Specifies which mouse driver you are using.
	To change: Choose the Windows Setup icon from the Main Group window.
	----------------------------------------------------------------------
	network.drv=<filename>
	Purpose: Specifies which network driver you are using.
	To change: Choose the Windows Setup icon from the Main Group window.
	----------------------------------------------------------------------
	oemfonts.fon=<filename>
	Purpose: Supplies the names of the font files for the OEM character
	        set. This setting is associated with the display setting.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	shell=<filename>
	Default: progman.exe
	Purpose: Specifies the Windows program that serves as the user shell
	        for Windows.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	sound.drv=<filename>
	Purpose: Specifies which sound driver you are using.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	system.drv=<filename>
	Purpose: Specifies the system hardware you are using. For IBM PC
	        compatible systems, this file is system.drv.
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
