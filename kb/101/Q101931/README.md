---
layout: page
title: "Q101931: Mac Srv: Asterisk for Zone Name in Global Server Report"
permalink: kb/101/Q101931/
---

## Q101931: Mac Srv: Asterisk for Zone Name in Global Server Report

	Article: Q101931
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Global Server Report in the version 2.0, 3.0, or 3.1 Microsoft Mail for
	AppleTalk Networks Mail Network Administrator may show asterisks (*) for the
	zone name.
	
	CAUSE
	=====
	
	This may occur for one of the following three reasons:
	
	- The Server is not connected to an Apple Internet; therefore, no Internet
	  routers exist. Routers provide zone information on an AppleTalk network.
	
	- When a new server, Server B, asks for the version of an existing server,
	  Server A, then Server A also learns about the existence of Server B. Server A
	  has a network address to which it can send mail to Server B, but it does not
	  have the textual name of Server B's zone. Server A enters an "*" for the
	  zone. The next time Server A does a full network scan it will learn what zone
	  Server B is in. The "*" zone is a temporary state that a new server might be
	  in for a few hours until it is seen on a normal scan.
	
	- If a portion of the network becomes unplugged/unattached from the main
	  network and loses contact with any routers, then when a server does a scan,
	  all other servers on that portion of the network will appear to be in zone
	  "*". The scanning server will remember this until the next time it does a
	  full scan after the routers have been restored.
	
	Additional query words: 2.00 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200
	Version           : WINDOWS:2.0,3.0,3.1
	
	=============================================================================
	
