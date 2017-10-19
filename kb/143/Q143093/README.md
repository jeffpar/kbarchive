---
layout: page
title: "Q143093: FP: Basic FrontPage Troubleshooting Utilities"
permalink: /kb/143/Q143093/
---

## Q143093: FP: Basic FrontPage Troubleshooting Utilities

	Article: Q143093
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbtshoot kbusage kbdta
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2002 version of this article, see Q292623.
	
	For a Microsoft FrontPage 98 version of this article, see Q198154.
	
	For a Microsoft FrontPage 97 and earlier version of this article, see Q194331.
	
	SUMMARY
	=======
	
	This article describes the basic troubleshooting tools that are shipped with
	FrontPage.
	
	MORE INFORMATION
	================
	
	FrontPage TCP/IP Test
	---------------------
	
	The TCP/IP Test utility tests for a properly installed version of Windows
	sockets, the IP address, and the host name (if any) of your computer. The
	FrontPage TCP/IP test also verifies the local loopback address (127.0.0.1) and
	localhost, the standard loopback host name.
	
	FrontPage 97:
	
	To run the TCP/IP test utility, follow these steps:
	
	1. Start FrontPage Explorer.
	
	2. On the Help menu, click About Microsoft FrontPage Explorer.
	
	3. In the About FrontPage Explorer dialog box, click Network Test.
	
	4. In the TCP/IP Test dialog box, click Start Test.
	
	FrontPage 1.1:
	
	To run the TCP/IP test utility, follow these steps:
	
	1. On the Windows Start menu, point to Programs, point to Microsoft FrontPage,
	  and then click TCP/IP Test.
	
	2. In the TCP/IP Test dialog box, click Start Test.
	
	Server Administrator
	--------------------
	
	Use the Server Administrator to check for properly installed server extensions,
	the server type, the server port, the server content area, and the server
	configuration file if the server has one. It is recommended that you uninstall
	and then reinstall the extensions if the content area or configuration file has
	changed.
	
	The Server Administrator also allows you to enable or disable authoring on a
	selected port. The Server Administrator also allows you to add user names and
	passwords to a list of administrators on all servers except Microsoft Internet
	Information Server.
	
	The icon you use to start the FrontPage Server Administrator is in different
	locations depending on the version of FrontPage and the version of Windows you
	are running.
	
	All versions of FrontPage Running on Windows NT 3.51:
	
	The icon is located in the program group for Microsoft FrontPage. This is also
	true for FrontPage 1.0 on Windows 3.x.
	
	FrontPage 97 Running on Windows 95 or Windows NT 4.0:
	
	The icon is located in the directory where you installed FrontPage. By default,
	this location is C:\Program Files\Microsoft FrontPage.
	
	FrontPage 1.1 Running on Windows 95 or Windows NT 4.0:
	
	On the Windows Start menu, point to Programs, point to Microsoft FrontPage, and
	then click FrontPage Server Administrator.
	
	Check Installation Utility (FrontPage 1.0 Only)
	-----------------------------------------------
	
	The Check Installation utility is a component of FrontPage 1.0 only. It is not
	available for later versions of FrontPage. The Check Installation utility
	examines your system to ensure that the system dynamic-link libraries (DLLs)
	necessary to run FrontPage are installed correctly. The results are displayed in
	a window and are written to the Chkver.log file in the Bin folder within the
	FrontPage Root. The default FrontPage Root for version 1.0 is c:\Vermeer.
	
	Additional query words: fp97 front page vermeer tshoot troubleshoot tcpip administrator verify troubleshooting error log logged files configuration port extensions content loopback address host name sockets winsock localhost utilities utility test testing tests.
	
	======================================================================
	Keywords          : kbtshoot kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
