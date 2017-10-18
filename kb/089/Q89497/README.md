---
layout: page
title: "Q89497: Modifying WIN.SRC to Customize Windows Network Setup"
permalink: kb/089/Q89497/
---

## Q89497: Modifying WIN.SRC to Customize Windows Network Setup

	Article: Q89497
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows, you can use a text editor such as Notepad to edit the
	WIN.SRC file and define custom settings for the Windows environment for multiple
	workstations.
	
	MORE INFORMATION
	================
	
	When Windows is set up on a network workstation with the SETUP /N command, a
	WIN.INI file is built with default settings. When SETUP.EXE is run, it uses
	WIN.SRC as the source file for building the WIN.INI file. This file contains
	information that defines your Windows environment and is used by both Windows
	and Windows-based applications.
	
	The following are examples of methods you can use to customize the WIN.SRC file
	when setting up Windows on a network.
	
	NOTE: The read-only attribute must be cleared before modifying the file. This can
	be done by using Windows File Manager, or with MS-DOS by using the ATTRIB
	command. When you are done modifying the WIN.SRC file, reset the read-only
	attribute.
	
	Loading an Application Automatically
	------------------------------------
	
	To have all workstations load a Windows-based application automatically during
	startup, do the following:
	
	1. Open WIN.SRC in Notepad.
	
	2. In the [windows] section of the WIN.SRC file, find the "load=" line.
	
	3. Add the filename of the program to be executed. For example, to have all
	  installations of Windows load the Clock application, add CLOCK.EXE to the
	  "load=" line:
	
	  load=clock.exe
	
	4. Save WIN.SRC.
	
	Loading Wallpaper Automatically
	-------------------------------
	
	To have all workstations use a standard wallpaper on startup, do the following:
	
	1. Open WIN.SRC in Notepad.
	
	2. In the [Desktop] section, find the Wallpaper=(None) line.
	
	3. Replace "(None)" with the bitmap filename you would like as the desktop
	  background. For example, to have the Paper bitmap display automatically
	  during startup, replace "(None)" with "PAPER.BMP":
	
	  Wallpaper=PAPER.BMP
	
	  Note: You will want to have the bitmap file in the shared Windows directory.
	
	4. Save WIN.SRC.
	
	Associating a File Extension with an Application
	------------------------------------------------
	
	To have all workstations associate a file extension with a particular
	application, do the following:
	
	1. Open WIN.SRC in Notepad.
	
	2. Find the [Extensions] section of the WIN.SRC file.
	
	3. Add the following line
	
	  extension=command-line
	
	  where "extension" is the filename extension of one to three characters and
	  "command-line" is the application filename followed by a caret (^) and the
	  document extension. For example, to associate calendar files with the
	  calendar program, add the following line:
	
	  cal=calendar.exe ^.cal
	
	4. Save WIN.SRC.
	
	Changing the Color Scheme for All Workstations
	----------------------------------------------
	
	To have all workstations come up in a color scheme other than the Windows default
	color scheme, do the following:
	
	1. On an existing installation of Windows, select the desired color scheme.
	
	2. From this installation, use Notepad to view the WIN.INI file, and find the
	  [colors] section.
	
	3. Select the entire section, then choose Copy from the Edit menu in Notepad to
	  copy this text to the Windows Clipboard.
	
	4. In Notepad, open WIN.SRC from the shared Windows directory.
	
	5. From the Edit menu, choose Paste and paste the [colors] section to the end of
	  the WIN.SRC file.
	
	Opening CONTROL.SRC (Windows 3.1) or CONTROL.INI (Windows 3.0) and editing the
	file before network setup does not affect Windows colors. It will affect the
	list of colors in the Control Panel Colors application.
	
	Under Windows 3.1, there is also the automated setup command, SETUP /H, which
	allows you to customize the setup of workstations automatically. For more
	information on this topic, see pages 75-82 of the "Microsoft Windows Resource
	Kit" (WRK) guide for Windows version 3.1.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, pages 543-556
	"Getting Started with Microsoft Windows," version 3.1, pages 6-9
	
	KBCategory: kbnetwork kbdisplay kbtool kbenv kbusage
	KBSubcategory: win30 win31
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
