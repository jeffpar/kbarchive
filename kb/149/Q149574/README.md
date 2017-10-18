---
layout: page
title: "Q149574: Internet Explorer 2.0 Fails to Connect to SSL Enabled IIS Server"
permalink: kb/149/Q149574/
---

## Q149574: Internet Explorer 2.0 Fails to Connect to SSL Enabled IIS Server

	Article: Q149574
	Product(s): Internet Information Server
	Version(s): WINDOWS:2.0; winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- Microsoft Internet Explorer version 2.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect to some Secure Sockets Layer (SSL) enabled Internet Information
	Servers (IIS), you may get one or more of the following messages:
	
	  HTTP/1.0 403 Access Forbidden (Secure Channel Required - This Virtual
	  Directory requires a browser that supports the configured encryption
	  options.)
	
	  -or-
	
	  Unable to connect to (servername)
	
	While this may happen with Internet Explorer for Windows 95, other SSL capable
	browsers may connect normally with no errors. Currently, the only Microsoft
	browser with SSL support is Internet Explorer 2.0 for Windows 95.
	
	CAUSE
	=====
	
	Internet Explorer version 2.0 for Windows 95 has problems connecting to some SSL
	certificates. A new certificate will generally NOT fix the problem.
	
	RESOLUTION
	==========
	
	This problem has been fixed in the latest version of Internet Explorer 2.0 for
	Win95. This new version of Internet Explorer is available to the public for
	downloading on http://www.microsoft.com to address this issue.
	
	Additional query words: prodiis netscape mosaic fail secure site winnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbIEsearch kbiis100 kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE200WinNT400
	Version           : WINDOWS:2.0; winnt:1.0
	
	=============================================================================
	
