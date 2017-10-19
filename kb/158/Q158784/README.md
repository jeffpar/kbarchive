---
layout: page
title: "Q158784: Personal Web Server Won't Support Secured Sockets Layer Security"
permalink: /kb/158/Q158784/
---

## Q158784: Personal Web Server Won't Support Secured Sockets Layer Security

	Article: Q158784
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share a folder for Hypertext Transport Protocol (HTTP) access in
	Windows Explorer, enabling the Secured Sockets Layer (SSL) option does not
	affect the server.
	
	CAUSE
	=====
	
	SSL security is not supported in Personal Web Server.
	
	MORE INFORMATION
	================
	
	There is currently no support for SSL security in Personal Web Server. If you
	require this functionality, consider upgrading to Microsoft Windows NT Server
	and Internet Information Server.
	
	NOTE: The version of Personal Web Server that is included with Microsoft Windows
	95 OEM Service Release 2 is the only version that has an option for SSL
	security. The versions of Personal Web Server included with Microsoft Internet
	Explorer Starter Kit and released on the Web do not have the SSL option.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
