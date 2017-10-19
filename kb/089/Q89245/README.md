---
layout: page
title: "Q89245: How to Verify Novell NetWare Shell"
permalink: /kb/089/Q89245/
---

## Q89245: How to Verify Novell NetWare Shell

	Article: Q89245
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine the version of Novell NetWare you are running and your hardware
	configuration, exit Windows and type the following at the MS-DOS command
	prompt:
	
	  IPX I
	
	Then, type:
	
	  NVER
	
	On some systems you may see a line that says the hardware is software
	configurable. This means that you will need either a disk for your computer or
	for your network card that can tell how the card is configured.
	
	MORE INFORMATION
	================
	
	The following is the important information that is displayed:
	
	  NetBIOS version
	  IPX version
	  SPX version
	  LAN driver hardware configuration
	  Shell version
	  MS-DOS version
	  file server name and operating system version
	
	Windows 3.0 and 3.0a require IPX.COM and NETx.COM version 3.02a or later.
	
	Windows 3.1 requires IPX.COM version 3.1 and NETX.COM version 3.26.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
