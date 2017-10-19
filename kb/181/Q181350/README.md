---
layout: page
title: "Q181350: Clients Fail to Connect to Notes Server Running on Windows NT"
permalink: /kb/181/Q181350/
---

## Q181350: Clients Fail to Connect to Notes Server Running on Windows NT

	Article: Q181350
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have Lotus Notes server software running on your computer running Windows NT
	Server. Your Lotus Notes clients may experience difficulty connecting to this
	Lotus Notes server for periods of time up to five minutes. A network packet
	capture reveals that the client connection attempts are being refused by a
	Transmission Control Protocol (TCP) reset from the server.
	
	CAUSE
	=====
	
	Lotus Notes Server programmatically binds a backlog queue of five to Winsock.
	
	RESOLUTION
	==========
	
	Lotus Development Corporation has produced a fix that increases the size of the
	backlog queue to the maximum under Windows NT Server. Please contact Lotus Notes
	technical support for more information regarding this fix.
	
	Lotus Notes is manufactured by Lotus Development Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this products' performance or reliability.
	
	For information about how to contact Lotus Development Corporation, query in the
	Knowledge Base for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	MORE INFORMATION
	================
	
	The issue appears when a large number of users try to connect to the Lotus Notes
	server at the same time. The Winsock backlog queue fills up because of the time
	it takes for the server to service the request and the hundreds of new requests
	that are continually being attempted. This problem has only been reported in
	large enterprise environments and has been reproduced on a Lotus Notes 4.x
	server but may affect earlier versions as well.
	
	For additional information on TCP/IP, please see the following white paper
	available on the Microsoft anonymous ftp server:
	
	  File Name: Tcpipimp2.doc
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "Microsoft Windows NT 3.5/3.51/4.0: TCP/IP Implementation
	  Details TCP/IP Protocol Stack and Services, Version 2.0"
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
