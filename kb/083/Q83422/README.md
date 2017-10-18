---
layout: page
title: "Q83422: COM3 Incorrectly Reported as Local Port by Windows"
permalink: kb/083/Q83422/
---

## Q83422: COM3 Incorrectly Reported as Local Port by Windows

	Article: Q83422
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you choose Connect from the Printers option in Control Panel, COM3 is
	detected as a local port even when there is not a physical COM3 port present.
	
	MORE INFORMATION
	================
	
	Choosing the Connect button displays the list of available ports with a
	description of the ports' usage. The descriptions will be one of the following:
	
	1. Network Connection: This displays the current network printer connection for
	  that port.
	
	2. Local Port: This option is reported if Windows detects that the physical port
	  exists.
	
	3. Local Port Not Present: This option is reported if Windows does not detect
	  the port or if the port is currently being used by another device such as a
	  mouse or modem.
	
	For COM3, Windows will use the default address of 3E8H for COM3 even though the
	port is not physically present. Because this default address is used, the port
	is always recognized as a local port.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  win31 COM serial ports 3.1
	
	Additional query words: 3.10 COM2
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
