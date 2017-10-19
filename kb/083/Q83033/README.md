---
layout: page
title: "Q83033: Novell NetWare: Error Message on Printer Reconnections"
permalink: /kb/083/Q83033/
---

## Q83033: Novell NetWare: Error Message on Printer Reconnections

	Article: Q83033
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 has a feature called persistent network
	connections. When you start Windows, it attempts to reestablish the network
	connections that were in use when you closed your last Windows session. This
	applies to both network servers and printers.
	
	When you have persistent printer connections and are running Novell NetWare, if
	the print queue no longer exists, you receive an error message when Windows
	starts up. The NetWare driver is attempting to reconnect your system to a print
	queue that no longer exists. You continue to be presented with this error
	message every time Windows is started until the port in question is connected to
	another network print queue.
	
	There are three solutions to this problem; see below for more details.
	
	MORE INFORMATION
	================
	
	Resolve the problem with one of the following methods.
	
	Method 1: Making Permanent Connections
	--------------------------------------
	
	By making your new connections permanent, you will overwrite the information for
	the nonexistent print queue in the WIN.INI file with your new permanent
	connection information. Next time you start Windows, it will reconnect you to
	your new printer connections and not display error messages.
	
	Method 2: Connecting from the MS-DOS Prompt
	-------------------------------------------
	
	If you do not want to create a permanent printer queue connection in Windows, you
	can connect all the LPT ports to a NetWare print queue from the MS-DOS prompt
	before entering Windows.
	
	If you do this, the next time you start Windows the NetWare driver will prompt
	you to find out if you want to override the existing connection with the
	connection as specified in the WIN.INI file (which is invalid). This message
	occurs because the printer connection definitions in the WIN.INI file are
	invalid (no print queue by that name exists), and the associated LPT port has
	already been redirected (in MS-DOS prior to starting Windows). Choose the No
	button.
	
	You will then be prompted with another message:
	
	  Do you want to remove this printer connection definition from WIN.INI?
	
	Choose the Yes button. This removes the invalid entry from your WIN.INI file. The
	next time you start Windows, you won't get any error messages about your invalid
	print queues.
	
	Method 3: Editing the WIN.INI File
	----------------------------------
	
	You can edit the WIN.INI file with an MS-DOS-based text editor or with Notepad to
	remove the invalid information and replace it with valid information.
	
	
	Additional query words: 3.10 3.11 kbnetwork net ware novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
