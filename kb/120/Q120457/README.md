---
layout: page
title: "Q120457: Undocked Laptop RAS Server Cannot See Connected RAS Client"
permalink: /kb/120/Q120457/
---

## Q120457: Undocked Laptop RAS Server Cannot See Connected RAS Client

	Article: Q120457
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a RAS client dials into a RAS server that is undocked from its docking
	station, the RAS server cannot see the client through the usual means such as
	Net View, Net Use, Send Message from Radadmin, etc):
	
	- "Net View \\<client>" reports: Error 53 - Network path not found
	
	- Rasadmin "Send Message" reports: The message alias could not be found on the
	  network
	
	NOTE: The RAS client can see and access network resources on the RAS server: the
	problem is that the server cannot see the client.
	
	CAUSE
	=====
	
	When it is on an undocked laptop, the RAS server must be configured for "view
	this computer only" in RAS Setup.
	
	RESOLUTION
	==========
	
	Control Panel->Network->Configure RAS->Network->NetBEUI / TCP/IP /
	IPX- >Configure).
	
	The RAS server now can see the client.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
