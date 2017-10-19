---
layout: page
title: "Q96332: F5 and F8 Keys Do Not Seem to Affect Startup Files"
permalink: /kb/096/Q96332/
---

## Q96332: F5 and F8 Keys Do Not Seem to Affect Startup Files

	Article: Q96332
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On some fast computers, the "Starting MS-DOS..." message may flash on the screen
	too quickly to allow you to press the F5 or F8 function key.
	
	If you have problems getting your computer to respond to the F5 and F8 function
	keys, make sure the following lines are not in your CONFIG.SYS file:
	
	  switches=/f     Skips the 2-second delay after displaying the
	                  "Starting MS-DOS ..." message during startup.
	
	  switches=/n     Prevents you from using the F5 or F8 key to bypass
	                  startup commands.
	
	NOTE: If you are using MS-DOS 6.2 and DoubleSpace, make sure the above lines are
	not in your DBLSPACE.INI file. (DBLSPACE.INI is a hidden, system file located in
	the root directory of your host drive.)
	
	MORE INFORMATION
	================
	
	You can use a small multiple-configuration menu to determine if the F5 and F8
	function keys are working properly. Adding the following five lines to the top
	of your CONFIG.SYS file creates a startup menu that gives you one menu item. You
	can then either press ENTER to start your computer, press the F5 function key to
	bypass your configuration files, or press the F8 function key to step through
	the CONFIG.SYS file.
	
	  [COMMON]
	  [MENU]
	  MENUITEM=ONE,Your standard startup...
	  MENUDEFAULT=ONE,15
	  [ONE]
	
	These statements give you 15 seconds before your CONFIG.SYS and AUTOEXEC.BAT
	files are processed. They do not affect the contents of your CONFIG.SYS file.
	
	Type "help multi-config" (without the quotation marks) at the MS-DOS command
	prompt to learn more about using multiple-configuration menus.
	
	Type "help switches" (without the quotation marks) to learn more about using the
	Switches command.
	
	Additional query words: 6.00 6.20 ctrl+f5 ctrl+f8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
