---
layout: page
title: "Q99382: Using Access Pack with Unsupported Hardware"
permalink: kb/099/Q99382/
---

## Q99382: Using Access Pack with Unsupported Hardware

	Article: Q99382
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbenable
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Trace Access Pack for Windows, version 3.0a is collection of software utilities
	that provides several features to make computers easier to use for people with
	motion- or hearing-related disabilities.
	
	Access Pack for Microsoft Windows consists of three main components:
	
	- A modified keyboard driver, which provides most of the features.
	
	- A modified mouse driver, which is required for the mouse-related features.
	
	- The Access Utility (ACCESS.EXE), which is used to adjust various options and
	  view online Help. The Access Utility is also required if you use the
	  SerialKeys feature.
	
	Access Pack comes with three modified keyboard drivers that support most common
	keyboards. You must have the proper keyboard driver installed to use any of the
	Access Pack features.
	
	MORE INFORMATION
	================
	
	In the current release, the Access Pack mouse driver supports only the Microsoft
	PS/2-style mouse, IBM PS/2 mouse, and those 100-percent compatible with such
	mice. It does not support the Microsoft BallPoint mouse.
	
	If You Can't Install the Mouse Driver
	-------------------------------------
	
	If you can't install the Access Pack mouse driver, you can use most of the Access
	Pack features, but the MouseKeys and SerialKeys features are unavailable and you
	cannot run the Access Utility to customize settings or view online Help.
	
	If you try to run the Access Utility with improper mouse or keyboard drivers, the
	following error message is displayed:
	
	  Call to Undefined Dynalink
	
	For more information on this error, query on the following words in the Microsoft
	Knowledge Base:
	
	  windows and "call to undefined dynalink"
	
	If You Have an Unsupported Mouse
	--------------------------------
	
	If you have a mouse that is not supported by the Access Pack mouse driver,
	install the Access Pack keyboard driver. You can then use the
	keyboard-activation hot keys to enable most features. (For example, you can turn
	the StickyKeys feature on or off by pressing and releasing the left SHIFT key
	five times.) The keyboard-activation sequences are described in the ACCESS.WRI
	file provided with Microsoft Access Pack.
	
	In this configuration, you cannot run the Access Utility to adjust the user
	options. However, you can adjust these option by manually editing the
	appropriate entries in the WIN.INI file.
	
	If you edit WIN.INI entries, refer to the WININI.WRI file or the Windows Resource
	Kit for procedures, or query on the following words in the Microsoft Knowledge
	Base:
	
	  winini.wri and access and pack
	
	Additional query words: handicaps disability disabilities accessibility 3.00 3.00a 3.10 3.11 3.0a 3.1 stickeykeys
	
	======================================================================
	Keywords          : kbenable 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
