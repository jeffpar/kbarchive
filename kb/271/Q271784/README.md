---
layout: page
title: "Q271784: IBM SDLC Link Service Fails Under Windows 2000"
permalink: kb/271/Q271784/
---

## Q271784: IBM SDLC Link Service Fails Under Windows 2000

	Article: Q271784
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport sna4
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing and configuring a connection to use the IBM SDLC (Synchronous
	Data Link Control) Link Service, the connection goes to a pending state then
	drops back to an inactive state. The Application Event Log reports an event ID
	169, "Description Failed to open device driver \Device\IBMSDLC. Windows NT
	rc=c0000034".
	
	CAUSE
	=====
	
	Microsoft Windows 2000 requires that a driver be installed into and recognized
	by the operating system.
	
	RESOLUTION
	==========
	
	Install the hardware into the operating system using the Add/Remove Hardware
	Wizard in Control Panel. The IBM driver is found by selecting X.25/SDLC Adapter
	Base 380.
	
	MORE INFORMATION
	================
	
	The same device driver problem will occur if you are using Microsoft SNA Server
	4.0 because this is an operating system issue, not an application issue and is
	not specifically restricted to the IBM driver. Similar problems may occur with
	any link service driver.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
