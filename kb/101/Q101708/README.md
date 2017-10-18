---
layout: page
title: "Q101708: Platform Restrictions for MS-DOS-Based Graphics Programs"
permalink: kb/101/Q101708/
---

## Q101708: Platform Restrictions for MS-DOS-Based Graphics Programs

	Article: Q101708
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The text below discusses the hardware platform restrictions Windows NT
	imposes on MS-DOS-based graphics applications.
	
	Intel x86-Based Computers
	-------------------------
	
	An MS-DOS-based graphical application cannot run in a window on a
	computer with an Intel microprocessor. This restriction is caused by
	the overhead involved in trapping register and memory accesses from
	the VGA areas to the VDM (virtual MS-DOS machine) to emulate the
	graphics hardware in software; the graphics performance would be too
	low for the application to be useful. Therefore, when an application
	switches into graphics mode, the VDM switches to full-screen mode.
	
	In full-screen mode, most applications can run with native performance
	directly on the installed video adapter. Windows maps VGA memory to
	the appropriate place in the VDM and maps the relevant registers from
	the application to the video adapter. Note that not all miniports map
	every video card extended register, only enough registers to provide
	VGA compatibility. This behavior may prevent some applications (such
	as IBM PC3270 and Aldus Persuasion Player) from working with all SVGA
	cards. In general, such programs experience the same problems that
	they do running with 16-bit Microsoft Windows version 3.1.
	
	In some cases, an application may work correctly only if you start it
	from a full screen Command Prompt (which you can choose in an
	appropriate program information file [PIF]). This usually occurs
	because the application checks for the installed video card. The check
	fails when the application is in a window because only the standard
	VGA emulation is available to the BIOS; the extensions on the
	installed card are not available.
	
	If you press ALT+ENTER, Windows NT displays a window that contains a
	frozen image of the full-screen window. Windows NT halts the
	application and indicates its halted state by adding "-FROZEN" to the
	window title). If you press ALT+ENTER again, Windows NT resumes the
	program full screen.
	
	
	An application changes to full screen mode only after it has system
	focus. If an application runs in text mode without focus and reaches a
	point where it switches to graphics mode, it does not switch to full
	screen until it receives the focus. Until this occurs, Windows NT adds
	the  "-FROZEN" suffix to the window title.
	
	RISC-Based Computers
	--------------------
	
	A graphical MS-DOS-based application can run in a window on a machine
	with a RISC microprocessor. When the application changes to graphics
	mode, the size of the window changes to maintain the correct aspect
	ratio. The MS-DOS window on a RISC-basic computer emulates a Video
	Seven VGA card. If you see two mouse images while the window is open
	(one the application produces and the Windows NT mouse pointer),
	choose Hide Mouse Pointer from the window system menu and use the
	application mouse pointer. To restore the system pointer image, press
	any system hot key.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
