---
layout: page
title: "Q123766: Doc Err: WINS and LAN Manager 2.x Clients"
permalink: kb/123/Q123766/
---

## Q123766: Doc Err: WINS and LAN Manager 2.x Clients

	Article: Q123766
	Product(s): Microsoft Windows NT
	Version(s): 2.x,3.5,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft LAN Manager, version 2.x 
	-------------------------------------------------------------------------------
	
	One bullet item on page 106 (Chapter 5) of the Microsoft Windows NT Server
	TCP/IP version 3.5 guide and the TCP/IP Online Help (TCPIP.HLP on the
	Windows NT Server version 3.5 CD) titled WINS Benefits states:
	
	  The ability for clients on a Windows NT Server network (including
	  Windows NT, Windows for Workgroups, and LAN Manager 2.x) to browse
	  domains on the far side of a router without a local domain controller
	  being present on the other side of the router.
	
	This paragraph is not completely true. LAN Manager 2.x client computers
	cannot browse domains spanning subnets across routers. These client
	computers listen to server announcements and keep them in their caches.
	They do not use WINS for browsing purposes. LAN Manager 2.x uses WINS for
	the purpose of replacing the LMHOSTS file for NetBIOS name resolution.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan200xSearch
	Version           : :2.x,3.5,4.0
	
	=============================================================================
	
