---
layout: page
title: "Q158649: InetServer_Event.log File Not Displayed Properly in Notepad"
permalink: kb/158/Q158649/
---

## Q158649: InetServer_Event.log File Not Displayed Properly in Notepad

	Article: Q158649
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The InetServer_Event.log file may show pairs of black boxes when viewed in
	Notepad, and it may be one long line.
	
	CAUSE
	=====
	
	The InetServer_Event.log file is not being written to correctly. The
	InetServer_Event.log file contains line feed/carriage return (LF/CR) at the end
	of each line, instead of carriage return/line feed (CR/LF). In Notepad, this is
	displayed as a pair of black boxes wherever a hard carriage return should be
	located in the file.
	
	RESOLUTION
	==========
	
	Open a copy of the InetServer_Event.log file in WordPad instead of Notepad. To
	start WordPad, click the Start button, point to Programs, point to Accessories,
	and then click WordPad.
	
	NOTE: You must copy the InetServer_Event.log file to another location before
	opening it. Because this file is accessed by Personal Web Server, opening the
	file in WordPad in its original location may generate an error message.
	
	MORE INFORMATION
	================
	
	When you open the InetServer_Event.log file in WordPad, the text does not line
	up exactly because of the extra characters created by the boxes. However, it
	will be easier to read in WordPad than it is in Notepad.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
