---
layout: page
title: "Q151205: Configure Downstream Leased SDLC Connection Causes Error 3992"
permalink: kb/151/Q151205/
---

## Q151205: Configure Downstream Leased SDLC Connection Causes Error 3992

	Article: Q151205
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You will get the following error when you configure a Downstream Leased SDLC
	connection:
	
	  Error: 3992
	
	  Leased SDLC connections cannot support Incoming Calls.
	
	  Leased connections do not require either end to initiate the
	  connection, therefore both ends treat the connection as
	  Outgoing Calls only.
	
	CAUSE
	=====
	
	SNA Server 2.11 Service Pack 1 included a fix that changed the default Allowed
	Directions for Downstream Connections to Incoming Calls.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139423 Downstream Connection Should Default to Incoming Calls
	
	Service Pack 1 does not check to see if a SDLC connection is Leased before
	defaulting the Allowed Directions setting to Incoming Calls. Error 3992 results
	because Leased SDLC connections cannot support Incoming Calls.
	
	WORKAROUND
	==========
	
	Use SNA Server Admin to create a new SDLC connection specifying Remote End as
	Host System. After you configure this connection, go back into the Connection
	Properties for this connection and change Remote End to Downstream.
	
	SNA Server Admin has been updated to check whether a new downstream SDLC
	connection is Leased before defaulting the Allowed Directions setting to
	Incoming Calls.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
