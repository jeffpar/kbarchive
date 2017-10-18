---
layout: page
title: "Q84709: How to Disable Access to Specific Control Panel Tools"
permalink: kb/084/Q84709/
---

## Q84709: How to Disable Access to Specific Control Panel Tools

	Article: Q84709
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): kbenv kbusage win31 win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable access to specific tools in Control Panel.
	You can use the procedure in this article to cause specific tools not to appear
	in Control Panel.
	
	MORE INFORMATION
	================
	
	To disable access to a specific tool in Control Panel, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the Control.ini file in the
	  Windows folder.
	
	2. Search the file for a [don't load] section. If this section does not exist,
	  add it.
	
	3. Add the following line to the [don't load] section for each tool you want to
	  disable
	
	  <icon>=no
	
	  where <icon> is the Control Panel tool you want to disable.
	
	  For Windows and Windows for Workgroups versions 3.1 and 3.11, use the name of
	  the tool as it appears in Control Panel. For example, to disable the Printers
	  tool in Windows for Workgroups 3.11, add the following line to the [don't
	  load] section:
	
	  Printers=no
	
	  For Windows 95, use the name of the .cpl file associated with the tool you
	  want to disable. The Windows 95 .cpl files are listed in the table below. For
	  example, to disable the System tool in Windows 95, add the following line to
	  the [don't load] section:
	
	  sysdm.cpl=no
	
	4. Save the Control.ini file and then quit the editor.
	
	5. Restart the computer.
	
	The following table lists the .cpl file associated with each tool in Control
	Panel in Windows 95:
	
	  .cpl file      Control Panel tool(s)
	  ---------------------------------------------------
	  Access.cpl     Accessibility Options
	  Appwiz.cpl     Add/Remove Programs
	  Desk.cpl       Display
	  Intl.cpl       Regional Settings
	  Jetadmin.cpl   HP JetAdmin
	  Joy.cpl        Joystick
	  Main.cpl       Fonts, Keyboard, Mouse, and Printers
	  Mlcfg32.cpl    Mail And Fax
	  Mmsys.cpl      Multimedia and Sounds
	  Modem.cpl      Modems
	  Netcpl.cpl     Network
	  Password.cpl   Passwords
	  Sysdm.cpl      System and Add New Hardware
	  Timedate.cpl   Date/Time
	  Wgpocpl.cpl    Microsoft Mail Postoffice
	
	
	Additional query words: 3.10 3.11 restrict hide remove
	
	======================================================================
	Keywords          : kbenv kbusage win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,95
	Issue type        : kbhowto
	
	=============================================================================
	
