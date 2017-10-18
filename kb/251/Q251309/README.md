---
layout: page
title: "Q251309: How to Enable Line Printer Remote Printing on Macintosh Clients"
permalink: kb/251/Q251309/
---

## Q251309: How to Enable Line Printer Remote Printing on Macintosh Clients

	Article: Q251309
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint w2000print w2000sfm kbMacService
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to enable line printer remote (LPR) printing on
	Macintosh clients.
	
	MORE INFORMATION
	================
	
	When you troubleshoot Services for Macintosh (SFM) printing issues, it is
	sometimes helpful, for testing purposes, to bypass the Windows NT print queue
	and print directly to the print device by using LPR printing. You can configure
	your Windows NT Server 4.0-based or your Windows 2000 Server-based computer to
	be the Line Printer Daemon (LPD) server, and then send print jobs directly from
	the Macintosh client to the LPD server by using LPR printing, eliminating the
	need to use Print Services for Macintosh.
	
	Macintosh clients that are running AppleShare client version 3.7 or later are
	able to connect to SFM volumes located on a Windows NT Server 4.0-based or
	Windows 2000 Server-based computer over Apple File Protocol/Internet Protocol
	(AFP/IP). However, note that this functionality is not available for printers.
	
	If you use LPR printing in addition to AFP/IP on your Macintosh clients, you can
	eliminate Appletalk traffic on your network, improving network performance by
	reducing the amount of broadcasts. Note that when you use LPR printing on a
	Macintosh client, the printer is not advertised in the Macintosh Chooser.
	
	NOTE: Macintosh operating system version 8.1 or later is required for this
	functionality.
	
	To Enable LPR Printing
	----------------------
	
	1. Start the "Desktop Printer Utility" program, which is included with the
	  Macintosh operating system version 8.1 or later. This program can be located
	  by clicking the Apple Extras folder and then by clicking the Apple
	  LaserWriter Software folder.
	
	2. After you verify that "LaserWriter 8" is displayed on the With menu, click
	  Printer (LPR), and then click OK.
	
	3. Click Change, locate and then click the printer you are configuring the print
	  queue for, and then click Select.
	
	  NOTE: The top portion of this dialog box is used to configure the printer
	  type, and the bottom portion is used to select the printer. The printer list
	  includes all available printer description files that are installed on your
	  computer. If the list does not contain a description file for the printer you
	  are configuring, see your system administrator for additional description
	  files.
	
	4. Click Change on the bottom-right area of your screen, type the Transport
	  Control Protocol/Internet Protocol (TCP/IP) address of the printer listed at
	  the bottom portion of your screen in the Printer Address dialog box, type the
	  appropriate print queue name in the Queue dialog box, and then click OK.
	
	5. On the File menu, click Save As to save the print queue file on the desktop,
	  and then assign a meaningful name to the print queue file that you can
	  recognize later.
	
	The print dialog included with the Macintosh operating system version 8.1 or
	later contains a drop-down list that permits you to select which of the
	configured printers, AppleTalk or LPR, you want to use. The Macintosh Chooser
	can be used to select AppleTalk printers only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint w2000print w2000sfm kbMacService 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
