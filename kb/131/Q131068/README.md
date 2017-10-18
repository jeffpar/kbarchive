---
layout: page
title: "Q131068: SNA Server Does Not Resource Locate to Active APPC Connection"
permalink: kb/131/Q131068/
---

## Q131068: SNA Server Does Not Resource Locate to Active APPC Connection

	Article: Q131068
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server WinAPPC engine may display "Primary rc=0003 Secondary
	rc=00000004" or "Primary rc=0003 00000005" when trying to connect to an SNA
	Server domain with the following configuration:
	
	- Two or more SNA Servers that have peer connections to the same host resource
	  (same remote LU name), and have Local LUs that are each a "Member of the
	  default outgoing local appc LU pool". One of the SNA server's connections is
	  active and the other server's connection is inactive or pending.
	
	  If it is inactive, then "Primary rc=0003 Secondary rc=00000004" is displayed;
	  if it is pending, then "Primary rc=0003 00000005" is displayed.
	
	- The client that is attempting to connect to this domain, specifies only the
	  Remote LU and lets the SNA Server domain resource locate to the appropriate
	  SNA Server.
	
	CAUSE
	=====
	
	An SNA Server client creates a service table by first contacting the SNA Server
	domain. The service table is comprised of all available SNA Servers in the
	domain that can service requests from SNA Server applications. The SNA Server
	client tries each SNA Server in the service table in numeric order until it
	finds one SNA Server that can satisfy the client's request (using the Remote LU
	specified by the client application). Because the service table list is
	generated randomly, the available SNA Servers can end up in any order
	numerically. SNA Server uses the second entry it finds in the list when it
	attempts to allocate an APPC conversation.
	
	Therefore, in the failing case, the SNA Server with the active connection must be
	first in the service table, and the SNA Server with the inactive connection will
	end up further down the list. When the client fails on the second inactive
	connection, SNA Server doesn't resource locate to any other servers in the
	service table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.1. This problem was
	corrected in SNA Server version 2.11.
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
