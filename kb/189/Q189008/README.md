---
layout: page
title: "Q189008: SBS Unable to Get Name Resolution with DNS"
permalink: kb/189/Q189008/
---

## Q189008: SBS Unable to Get Name Resolution with DNS

	Article: Q189008
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Small Business Server can use Dial-Up Networking to connect to
	an ISP; however, after connected, you cannot get name resolution from your ISP's
	DNS server.
	
	When trying to resolve host names to IP addresses, your server may receive the
	following error message:
	
	  Bad IP Address <hostname>
	
	However, you can still ping hosts by IP address.
	
	Additionally the SBS server also may not be able to successfully connect to FTP,
	HTTP, Telnet resources on the Internet.
	
	CAUSE
	=====
	
	WinSock Proxy Client is installed and enabled on the server.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Winsock Proxy Agent by following these
	steps:
	
	1. Click Start, point at Settings, and then click Control Panel.
	
	2. Double-click the WSP Client icon.
	
	3. Click to clear the Enable the WinSock Proxy Client check box.
	
	4. Close the configuration screen and restart the computer.
	
	MORE INFORMATION
	================
	
	The WinSock Proxy Agent is installed and enabled by default in the Windows NT
	Small Business Server. If you are not using the Proxy server, you should disable
	this feature.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
