---
layout: page
title: "Q159627: TN5250 Clients Cannot Connect to a Specific AS/400"
permalink: kb/159/Q159627/
---

## Q159627: TN5250 Clients Cannot Connect to a Specific AS/400

	Article: Q159627
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN5250 clients that are connecting to an SNA Server that has connections to
	multiple AS/400s cannot specify which AS/400 to connect to.
	
	CAUSE
	=====
	
	The TN5250 RFC (RFC 1205) does not include a specification that would allow
	TN5250 clients to specify an AS/400 to connect to. Therefore, the TN5250 service
	included with SNA Server 3.0 was not designed to support a mechanism that would
	allow TN5250 clients to connect to a specific AS/400.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Set up multiple computers running SNA Server and running the TN5250 service.
	  Each one must have a connection to a different AS/400.
	
	2. Configure the TN5250 client(s) to connect to the TCP/IP Address or Host Name
	  of the computer running SNA Server that has a connection to the AS/400 that
	  the client(s) wants to connect to.
	
	NOTE: Only one instance of the TN5250 Server service can be used on a computer
	running SNA Server. To support this resolution, multiple computers running SNA
	Server must be used, each running a different TN5250 Server service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: manager prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	
