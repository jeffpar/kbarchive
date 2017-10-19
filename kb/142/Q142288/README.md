---
layout: page
title: "Q142288: INFO: No System Subdirectory Created on Shared Windows"
permalink: /kb/142/Q142288/
---

## Q142288: INFO: No System Subdirectory Created on Shared Windows

	Article: Q142288
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes where Visual FoxPro installs the Win32s files on a
	network that has shared windows.
	
	MORE INFORMATION
	================
	
	If a network administrator has installed Windows on a network, a "shared
	windows" directory is created on a network drive that all users of the network
	must have access to. In addition to the "shared windows" directory, each user
	has a directory either on the server or on their local hard drive that contains
	their personal .ini, .grp, and reg.dat files. This server-based installation of
	Windows does not have a "system" subdirectory.
	
	For more information about Windows setup, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q83194 WW0526: Windows 3.1 Setup
	
	
	A proper network installation of Windows 3.1 on a network does not create a
	system subdirectory. Normally, Visual FoxPro installs the Win32s files in the
	Windows\System directory. Installing Visual FoxPro to a network that has a
	shared copy of Windows does not create a system subdirectory. The Win32s
	directory is created off of the "shared Windows" directory.
	
	
	
	Each Visual FoxPro user's System.ini file must contain references to this Win32s
	directory. The administrator must be the only person on the network using
	Windows when Visual FoxPro is installed.
	
	To install Visual FoxPro to a network type:
	
	  " x:setup/a " (without the quotation marks)
	
	where x is the letter representing the disk or CD-ROM drive.
	
	After a successful network installation of Visual FoxPro. The administrator must
	perform a workstation installation for each workstation. See page 5 of the
	Installation Guide and Master Index book for additional information on setup
	methods. If Win32s is not referenced in the workstation's System.ini file, the
	workstation setup will try to install Win32s and modify the workstation's
	System.ini file as follows:
	
	
	* System.ini lines updated
	
	[boot] shell=progman.exe
	mouse.drv=mouse.drv
	network.drv=netware.drv
	language.dll=
	sound.drv=mmsound.drv
	comm.drv=comm.drv
	system.drv=system.drv
	386grabber=vga.3gr
	oemfonts.fon=vgaoem.fon
	286grabber=vgacolor.2gr
	fixedfon.fon=vgafix.fon
	fonts.fon=vgasys.fon
	display.drv=vga.drv
	keyboard.drv=keyboard.drv
	*drivers=mmsystem.dll,winmm16.dll
	
	[keyboard]
	keyboard.dll=
	oemansi.bin=
	subtype=
	type=4
	
	[boot.description]
	mouse.drv=Microsoft, or IBM PS/2
	network.drv=Novell NetWare (v4.0)
	language.dll=English (American)
	system.drv=MS-DOS System
	codepage=437
	woafont.fon=English (437)
	aspect=100,96,96
	display.drv=VGA
	keyboard.typ=Enhanced 101 or 102 key US and Non US keyboards
	
	[386Enh]
	*device=Y:\WIN31\win32s\w32s.386
	DEVICE=VSHARE.386
	
	Additional query words: VFoxWin distrib
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
