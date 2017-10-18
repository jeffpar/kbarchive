---
layout: page
title: "Q246526: Cannot Browse Secure Web Site Using Secure Sockets Layer"
permalink: kb/246/Q246526/
---

## Q246526: Cannot Browse Secure Web Site Using Secure Sockets Layer

	Article: Q246526
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view a secure Web site by using a server running Microsoft
	Windows NT Server 4.0, you may not be able to browse to an internal Hypertext
	Transfer Protocol Secured (HTTPS) site. However, the key appears properly
	installed in Key Manager, and Schannel.dll shows as the Domestic (128-bit)
	version.
	
	CAUSE
	=====
	
	This behavior can occur when you install Service Pack 3 (SP3) for Windows NT
	Server 4.0 from the Microsoft Developer's Network CD-ROM, or a similar source,
	which puts the 40-bit (Export) version of SP3 on the server. When you install
	SP3, these media, which have 40-bit security, are installed even though you
	click Yes to keep the current (128-bit) Schannel.dll, because there are other
	.dll files that handle Secure Sockets Layer (SSL).
	
	RESOLUTION
	==========
	
	To resolve this behavior, visit the following Microsoft Web site and download
	the full 128-bit version of SP3:
	
	  http://support.microsoft.com/support/ntserver/content/servicepacks/SP3.asp
	
	NOTE: When you download the 128-bit version of Service Pack 3, a reverse Domain
	Name Server (DNS) lookup is used to ensure that your domain name is registered
	with a North American site.
	
	Additional query words: iis internet information server secure sockets
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
