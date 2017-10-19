---
layout: page
title: "Q153862: XCLN: How to Use CompuServe WinCIM and Exchange Client"
permalink: /kb/153/Q153862/
---

## Q153862: XCLN: How to Use CompuServe WinCIM and Exchange Client

	Article: Q153862
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Windows 3.1 and LAN Manager for MS-DOS version
	2.2c with TCP/IP, after you perform a "Typical" installation of CompuServe
	WinCIM 2.0.1, when you start the Microsoft Exchange client, the CompuServe
	Dialer will attempt to connect to CompuServe.
	
	
	CAUSE
	=====
	
	The Microsoft Exchange client loads the version of Winsock.dll that is provided
	by WinCIM. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152344 XCLN: Winsock Application Starts When Exchange Client Starts
	
	WORKAROUND
	==========
	
	There are two workarounds.
	
	- Rename or remove the Winsock.dll that WinCIM installs in the Windows
	  directory.
	
	  -or-
	
	- When you install WinCIM, select the "Custom" installation. Check the Install
	  Winsock to be Used Only With WinCIM and Mosaic checkbox. This will not copy
	  Winsock.dll to the Windows directory.
	
	MORE INFORMATION
	================
	
	If you start the CompuServe Information Manager program after exiting a
	Microsoft Exchange client, you will receive the following error message:
	
	  Winsock error: Host not found.
	
	If you click the CompuServe Dialer icon, you will receive the following error
	message:
	
	  Wrong WINSOCK DLL:\"WINSOCK.DLL-Microsoft Corp. 1993\".
	  Winsock Filename:C:\LANMAN.DOS\NETPROG\WINSOCK.DLL
	
	There are also two ways to solve this problem.
	
	- If you need to connect to CompuServe after exiting from Microsoft Exchange,
	  you must restart Windows.
	
	  -or-
	
	- Rename or remove the Winsock.dll that LAN Manager installs in the
	  \Lanman.dos\Netprog directory.
	
	Note that if want to start Microsoft Exchange right after disconnecting from
	CompuServe, you will have to wait until the CompuServe Dialer icon disappears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
