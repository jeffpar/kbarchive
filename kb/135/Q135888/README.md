---
layout: page
title: "Q135888: Windows 95 CD-ROM Mouse.txt File"
permalink: /kb/135/Q135888/
---

## Q135888: Windows 95 CD-ROM Mouse.txt File

	Article: Q135888
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Mouse.txt file from the
	Windows 95 CD-ROM. Setup copies this file to the Windows folder.
	
	MORE INFORMATION
	================
	
	----------------------------------------------------------------------
	           Microsoft Windows 95 README for Pointing Devices
	                             August 1995
	----------------------------------------------------------------------
	
	              (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	------------------------
	How to Use This Document
	------------------------
	
	To view Mouse.txt on screen in Notepad, maximize the Notepad window.
	
	To print Mouse.txt, open it in Notepad or another word processor, and
	then use the Print command on the File menu.
	
	--------
	CONTENTS
	--------
	
	Logitech Mouse
	Mouse Systems/Genius
	Microsoft Natural Keyboards
	Microsoft Intellipoint 1.00
	Microsoft BallPoint Mouse
	
	---------
	
	Logitech Mouse
	==============
	
	The Windows 95 Logitech driver supports Logitech MouseWare features.
	To use the middle button of a three-button Logitech Mouse, use the
	Logitech Mouse Control Center that came with your mouse.
	
	If you are running Windows 95, do not run the Logitech MouseWare Setup
	program that was written for Windows 3.1. If you do, open Mouse
	properties, click the General tab, and then click Change. Then select
	the appropriate Windows 95 Logitech mouse type.
	
	If you use a Logitech serial mouse, but there is a PS/2 mouse port on
	your computer, Windows 95 may not correctly install the Logitech
	driver. If this occurs, use the Device Manager tab in System
	properties to change the PS/2 mouse item, if present, to "Logitech
	Serial Mouse."
	
	Mouse Systems/Genius
	====================
	
	Windows 95 does not have built-in drivers for the Mouse Systems or Genius 
	3-
	button mouse. The standard mouse driver will work with these devices in
	their 2-button mode. Driver updates are available from the Windows Driver
	Library or in the \Drivers\Mouse\Mousesys folder on the Windows 95 CD-ROM.
	
	Microsoft Natural Keyboards
	===========================
	
	Windows 95 has built-in support for your Microsoft Natural Keyboard.
	Windows logo keys have added functionality under the new operating
	system.
	
	You will be unable to install IntelliType version 1.00 under Windows
	95. If you upgrade to Windows 95 over a previously installed Windows
	3.1 configuration, IntelliType will have limited functionality.
	
	If you are upgrading a Windows 3.1x configuration that has IntelliType
	version 1.00 software, it is recommended that you delete the following
	line from your System.ini file, which is located in the folder that
	contains your Windows 95 files:
	
	taskman.exe=TASKSW16.EXE
	
	This will deactivate the Windows 3.1 IntelliType Task Manager and
	ensure full support of the Windows logo keys under Windows 95.
	
	Microsoft IntelliPoint 1.00
	============================
	
	Windows 95 has built-in support for your Microsoft mouse.
	
	You will be unable to install IntelliPoint version 1.00 under Windows
	95. If you upgrade to Windows 95 over a previously installed Windows
	3.1 configuration, IntelliPoint will have limited functionality.
	Contact Microsoft for an updated version of IntelliPoint software.
	
	Microsoft BallPoint Mouse
	==========================
	
	If you need to adjust settings for your BallPoint mouse such as
	orientation, use the Mouse Manager or IntelliPoint control panel icon
	that came with your mouse. If this control panel is not already
	installed on your computer, contact Microsoft for an updated version
	of the mouse software.
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
