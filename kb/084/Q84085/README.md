---
layout: page
title: "Q84085: Novell's Task Mode Switch Causes Problems in 386 Enhanced Mode"
permalink: /kb/084/Q84085/
---

## Q84085: Novell's Task Mode Switch Causes Problems in 386 Enhanced Mode

	Article: Q84085
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Windows operating system version 3.1 in 386 enhanced
	mode on a Novell network, you may experience "pathing" or incorrect startup
	directories if the SHELL.CFG file's Task Mode= setting is set to 0 (zero) or 1.
	
	To correct this problem, edit the SHELL.CFG file with a standard text editor, and
	change the value for Task Mode= as follows:
	
	  Task Mode=2
	
	MORE INFORMATION
	================
	
	The Novell NetWare workstation SHELL.CFG file supports a switch that can be used
	to effectively disable Windows support features in the NetWare shell. The chart
	below shows the three valid values and their purposes.
	
	Value     Purpose
	-----     -------
	
	 0       This setting disables all support for multitasking
	         environments in order to save a conventional memory.
	
	 1       This setting is for use with third-party multitasking
	         environments other than Microsoft Windows.
	
	 2       This setting is for use with Microsoft Windows.
	
	The default value is 2; therefore, if this line is not present in the user's
	SHELL.CFG file, Windows will run correctly.
	
	If you set this value to 0 when you did not have Windows 3.1 installed but are
	now running Windows 3.1 in the 386 enhanced mode, you will experience problems
	in MS-DOS boxes. The most common problem is that separate MS-DOS boxes will
	share the same network connections, including working directories. (This is
	similar to having the NWShareHandles option enabled in Control Panel or not
	having VNETWARE.386 loaded in SYSTEM.INI.)
	
	Novell NetWare is manufactured by Novell, vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
