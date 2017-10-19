---
layout: page
title: "Q154031: INFO: Microsoft SNA Server over SDLLC"
permalink: /kb/154/Q154031/
---

## Q154031: INFO: Microsoft SNA Server over SDLLC

	Article: Q154031
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SNA Server can be configured to connect to a mainframe or AS/400 using
	SDLLC (SDLC routed to Token Ring or Ethernet). A Cisco router will only support
	PU 2.0 (XID format "0").
	
	MORE INFORMATION
	================
	
	An SDLLC connection should be configured like any SDLC connection on the SNA
	Server. Information on the configuration properties can be found in Q112159 or
	in Appendix D of the MS SNA Server [ASCII 147]Administration Guide.[ASCII 148]
	Information for configuring 3270 device emulation (PU 2.0) to an AS/400 can be
	found in Q145954.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
