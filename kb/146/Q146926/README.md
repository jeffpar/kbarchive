---
layout: page
title: "Q146926: XCLN: Exchange Client Starts Microsoft Network Login"
permalink: kb/146/Q146926/
---

## Q146926: XCLN: Exchange Client Starts Microsoft Network Login

	Article: Q146926
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange client for Windows 95, it brings up the
	logon dialog box for an Internet provider. This logon dialog is typically for
	either The Microsoft Network (MSN) or CompuServe (WINCIM), but it can be for any
	provider that takes advantage of the Windows 95 AutoDial feature.
	
	RESOLUTION
	==========
	
	When software for the Internet provided is installed, it automatically
	configures the computer to automatically dial whenever a TCP/IP Winsock call is
	attempted.
	
	To change this behavior:
	
	- Run the Control Panel/Internet application and then uncheck the "Connect to
	  the Internet as needed" checkbox. If you are using a version of Internet
	  Explorer prior to version 3.0x, then the checkbox will be labeled "Use
	  AutoDial".
	
	  -or-
	
	- Alternate click "The Internet" icon on the desktop and select Properties.
	  Then click the Connection tab and uncheck the "Connect to the Internet as
	  needed" box. If you are using a version of Internet Explorer prior to version
	  3.0x, then the checkbox will be labeled "Use AutoDial".
	
	
	Additional query words: faq dial-up dialing msn compuserve
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
