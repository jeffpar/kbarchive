---
layout: page
title: "Q175793: Event ID 20105 or 20108 on RRAS Server That Will Not Redial"
permalink: kb/175/Q175793/
---

## Q175793: Event ID 20105 or 20108 on RRAS Server That Will Not Redial

	Article: Q175793
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Windows NT Routing and Remote Access Service (RRAS) Server may
	fail to redial a demand dial connection when the connection is dropped or lost.
	One or more of the following event log messages may also be logged in your event
	viewer:
	
	  Event ID   : 20105
	  Source     : Router
	  Description: Unable to load the interface <interfacename> from
	               the registry. The following error occurred: There are no
	               routing-enabled ports available for use by the demand dial
	               interface.
	
	-or-
	
	  Event ID   : 20108
	  Source     : Router
	  Description: Unable to open the port <portname> for use. The port is
	               already open.
	
	CAUSE
	=====
	
	This problem occurs when the port that the demand dial interface is configured
	to use is already in use by another application or service.
	
	RESOLUTION
	==========
	
	To resolve the problem, close or disable the application or service that has
	control of the port that your demand dial interface is configured to use.
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
