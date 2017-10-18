---
layout: page
title: "Q245071: Cannot Use Telnet on UNIX Workstation Through Proxy Server 2.0."
permalink: kb/245/Q245071/
---

## Q245071: Cannot Use Telnet on UNIX Workstation Through Proxy Server 2.0.

	Article: Q245071
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to use a telnet client program on a UNIX workstation to
	connect to another computer through a machine that is running Microsoft Windows
	NT Server 4.0 and Microsoft Proxy Server 2.0.
	
	CAUSE
	=====
	
	This behavior can occur if the telnet client program on the UNIX workstation is
	not fully compatible with Socks version 4.3a.
	
	RESOLUTION
	==========
	
	To resolve this issue, use a telnet client program that is fully compatible with
	Socks version 4.3a on the UNIX workstation.
	
	MORE INFORMATION
	================
	
	Socks is a cross-platform mechanism that establishes secure communications
	between client and server computers. The Socks Proxy Service supports Socks
	version 4.3a and allows network users transparent access to the Internet by
	means of a Proxy Server. The Socks Proxy Service extends the redirection
	provided by the WinSock Proxy service to non-Windows platforms. It uses
	Transmission Control Protocol/Internet Protocol (TCP/IP) and can be used for
	TELNET, File Transfer Protocol (FTP), Gopher, and Hypertext Transfer Protocol
	(HTTP). The Socks Proxy Service does not support applications that rely on the
	User Datagram Protocol (UDP).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nt 4.0 fail proxy telnet
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbProxyServSearch kbProxyServ200
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
