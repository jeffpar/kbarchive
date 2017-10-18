---
layout: page
title: "Q150031: Use of SSL Creates Performance Overhead for Browsers"
permalink: kb/150/Q150031/
---

## Q150031: Use of SSL Creates Performance Overhead for Browsers

	Article: Q150031
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2000,3.0,4.0,5
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Advanced Server, version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	- Microsoft Internet Explorer version 5 for Windows 2000 
	- Microsoft Internet Explorer versions 4.0, 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The use of the Secure Sockets Layer (SSL) will slow performance between HTTP
	servers and browsers.
	
	MORE INFORMATION
	================
	
	If two HTTP web servers are developed with identical HTML, and SSL is applied to
	only one of the servers, the client browsers will experience a noticeable
	performance degradation when you browse the SSL web server.
	
	NOTE: Use encryption sparingly. The use of large bitmaps behind an SSL site
	should be used with discretion.
	
	
	Additional query words: prodiis iis implementation
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbIEsearch kbiis400 kbiis300 kbiis200 kbZNotKeyword2 kbIENT400Search kbIE500Search kbWinAdvServSearch kbZNotKeyword3 kbIE2000Search kbIE500Win2000 kbIE400WinNT400 kbIE500WinNT400 kbZnotKeyword7
	Version           : :2.0,2000,3.0,4.0,5
	
	=============================================================================
	
