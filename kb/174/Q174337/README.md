---
layout: page
title: "Q174337: How to Install an AppleTalk Printer in Windows NT 4.0"
permalink: kb/174/Q174337/
---

## Q174337: How to Install an AppleTalk Printer in Windows NT 4.0

	Article: Q174337
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to connect to a printer shared on an AppleTalk
	network.
	
	MORE INFORMATION
	================
	
	To connect to a printer shared on an AppleTalk network, you must first create an
	AppleTalk port on your computer by installing the AppleTalk protocol. To do so,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, and then click the Protocols tab.
	
	3. Click Add, click AppleTalk Protocol, and then click OK.
	
	4. When you are prompted, type the path for the Windows NT source files, click
	  Continue, and then click Close.
	
	5. When you are prompted, configure the settings for default adapter and default
	  zone as needed, and then click OK.
	
	6. Click No when you are prompted to restart your computer.
	
	7. If you have installed a Windows NT Service Pack, reinstall the Service Pack.
	
	8. Restart your computer.
	
	Next, install the printer driver and configure the printer to use the AppleTalk
	port. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Double-click the Add Printer icon to start the Add Printer Wizard.
	
	3. Click My Computer, and then click Next.
	
	4. Click Add Port, click AppleTalk Printing Devices, and then click New Port.
	
	5. In the Available AppleTalk Printing Devices box, click the printer you want
	  to connect to, and then click OK.
	
	6. Click No when you receive the following message:
	
	     Do you want to capture this AppleTalk printing device?
	
	  Note that capturing the printer may prevent other computers from printing to
	  this printer. For more information, see the following article in the
	  Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q172324
	  TITLE : Unable to Print to AppleTalk Printer
	
	7. Click Close, and then click Next.
	
	8. Click the appropriate manufacturer and printer, and then click Next.
	
	9. Type a name for the printer (or accept the default name), and then click
	  Next.
	
	10. If you want to share this printer from your computer, click Shared, type a
	  share name (or accept the default name), and then click Next.
	
	11. If you want to print a test page, click Yes, and then click Finish.
	
	12. When you are prompted, type the path for the Windows NT source files, click
	  Continue, and then click Close.
	
	Additional query words: macintosh laserwriter postscript
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
