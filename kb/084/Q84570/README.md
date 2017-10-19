---
layout: page
title: "Q84570: Where Windows 3.1 Looks for the MOUSE.INI File"
permalink: /kb/084/Q84570/
---

## Q84570: Where Windows 3.1 Looks for the MOUSE.INI File

	Article: Q84570
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbhw kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.1 usually relies on the MOUSE.INI file to tell the MOUSE.DRV
	file which port the mouse is connected to. Windows 3.1 can find the MOUSE.INI
	file in any directory, depending on specific environment and SYSTEM.INI
	settings. Incorrect settings in either the MOUSE.INI file, SYSTEM.INI file, or
	the "set mouse=" variable may prevent the mouse from working in Windows.
	
	MORE INFORMATION
	================
	
	Windows 3.1 looks for the MOUSE.INI file in the following order:
	
	1. The directory specified in the "set mouse=<directory>" statement in the
	  AUTOEXEC.BAT file.
	
	2. The directory specified on the
	  "MOUSE.DRV=<drive>:<path>MOUSE.DRV" line of the SYSTEM.INI file.
	  If no directory is specified, Windows defaults to your Windows directory.
	
	If there is no MOUSE.INI file in any of these directories, Windows creates one.
	The MOUSE.INI file contains the following:
	
	  [mouse]
	  MouseType= <port where Windows 3.1 found a mouse>
	
	If there is a MOUSE.INI file but the mouse is plugged into a different port than
	what's specified by the MouseType= parameter, the mouse driver changes the
	MouseType= parameter to reflect the port in which it did find a mouse.
	
	For example, if the MOUSE.INI reads "MouseType=Serial1", but you later change the
	mouse to COM2, then the mouse driver changes the MOUSE.INI to read
	"MouseType=Serial2" the next time it's loaded.
	
	The "set mouse=" variable in the AUTOEXEC.BAT file overrides the path settings of
	the MOUSE.DRV= in the SYSTEM.INI file during Windows 3.1's search for the
	MOUSE.INI file.
	
	For example,
	
	  If the file:      Contains this line:
	  ------------      -------------------
	  AUTOEXEC.BAT      set mouse=C:\MOUSE\ONE
	  SYSTEM.INI        mouse.drv=D:\MICE\TWO
	
	then Windows 3.1 looks for MOUSE.INI in the C:\MOUSE\ONE directory. (If there is
	no MOUSE.INI file there, one is created in C:\MOUSE\ONE.)
	
	If there is no "set mouse=" variable, Windows 3.1 uses the MOUSE.INI file in the
	path settings of the "mouse.drv=" in the SYSTEM.INI.
	
	For example,
	
	  If the file:       Contains this line:
	  ------------       -------------------
	
	  AUTOEXEC.BAT       none
	  SYSTEM.INI         mouse.drv=D:\MICE\TWO
	
	then Windows 3.1 looks for MOUSE.INI in the D:\MICE\TWO directory. (If there is
	no MOUSE.INI file there, one is created in D:\MICE\TWO.)
	
	If the "set mouse=" variable is set to a nonexistant directory, no MOUSE.INI file
	is used; Windows 3.1 simply looks for the first port with a mouse connected to
	it. No MOUSE.INI file is created.
	
	The Microsoft Mouse software search in Windows is as follows:
	
	  InPort mouse
	  Bus mouse
	  PS/2
	  COM2
	  COM1
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  MOUSE.INI and WIN31
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
