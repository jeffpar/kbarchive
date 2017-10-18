---
layout: page
title: "Q140442: Err Msg: Client Service for NetWare. Unable to Complete..."
permalink: kb/140/Q140442/
---

## Q140442: Err Msg: Client Service for NetWare. Unable to Complete...

	Article: Q140442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a Windows 95-based computer acting as an NCP server
	(NWSERVER) from an MS-DOS session using the Microsoft NCP Client (NWREDIR), you
	may receive the following error message on a blue screen:
	
	  Client Service for NetWare
	
	  Unable to complete a background operation on connection to <server>.
	  Select Retry to try the operation again, or press Escape to cancel all
	  outstanding background operations on this connection.
	
	  Operation: File Write
	  Error: 0x33 'No Response'
	
	CAUSE
	=====
	
	This error can occur if the NCP server was shut down after a connection or drive
	mapping was made and data was transferred between the two computers. Any
	additional data transfers to the unavailable server result in the error message.
	
	RESOLUTION
	==========
	
	Verify that the Windows 95 NCP server you are trying to connect to is running
	and that the File and Printer Sharing for NetWare Networks service is loaded.
	
	To determine whether the File and Printer Sharing for NetWare Networks service is
	loaded, follow these steps at the server:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Check the "The following network components are installed" box to see if the
	  File and Printer Sharing services is loaded.
	
	If the File and Printer Sharing service is not loaded, follow these steps to load
	it:
	
	1. Click Add, click Services, and then click Add.
	
	2. In the Manufacturers box, click Microsoft. In the Network Services box, click
	  File and Printer Sharing for NetWare Networks.
	
	3. Click OK or Close until you return to Control Panel.
	
	4. When you are prompted to restart your computer, do so.
	
	MORE INFORMATION
	================
	
	Press the ESC key to recover from the blue error message screen.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
