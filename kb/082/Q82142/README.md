---
layout: page
title: "Q82142: Microsoft Learning Windows Hangs when Running Help Demo"
permalink: kb/082/Q82142/
---

## Q82142: Microsoft Learning Windows Hangs when Running Help Demo

	Article: Q82142
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows Productivity Pack, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows 3.1, when you run lesson 2, "Getting Help," from the
	Learning Windows program of the Windows 3.0 Productivity Pack, the program
	starts, proceeds through the demonstration of the Help system, and then stops
	responding (hangs). It may generate the following error message before it
	hangs:
	
	  Help topic does not exist!
	
	If you attempt to recover from this message by choosing OK, and pressing the
	SPACEBAR to continue, the system hangs.
	
	CAUSE
	=====
	
	This problem only occurs when the Learning Windows program in Windows 3.1 is
	running. It occurs because the Learning Windows program LWIN.EXE relies on the
	Windows 3.0 Help file system. This system relies on the file WINHELP.EXE, which
	has been changed in Windows 3.1.
	
	RESOLUTION
	==========
	
	Microsoft Productivity Pack version 1.0 was designed specifically for Windows
	version 3.0. To run Microsoft Productivity Pack with Windows version 3.1, you
	need to obtain the updated version of Productivity Pack that was designed for
	Windows version 3.1.
	
	Additional query words: 3.1 3.10 learning hang help wpp3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinProdPack100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
