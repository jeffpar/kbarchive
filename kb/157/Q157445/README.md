---
layout: page
title: "Q157445: SNA Connection Over Distributed Link Fails w/Event 77 err=0D0D"
permalink: /kb/157/Q157445/
---

## Q157445: SNA Connection Over Distributed Link Fails w/Event 77 err=0D0D

{% raw %}

	Article: Q157445
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you activate an SNA Server connection using a Distributed Link Service, the
	connection may remain inactive and never activate. The following event will be
	logged in the Windows NT Application Event Log where SNA Server is running:
	
	  Event 77
	  Source: SNA Server
	
	  Connection <connection name> failed to activate due to failure at
	  link service.
	
	  Error Code = 0D0D
	
	where 0D0D = Link Service not active on remote server
	
	CAUSE
	=====
	
	The Distributed Link Service (SNAREMLS.DLL) was not allocating a buffer large
	enough to read the list of link services from the registry, causing the end of
	the link service data (for example, the service name) to be truncated. The error
	occurs when the distributed link service tried to locate the link service on the
	remote computer, and the service name was not found because the service name was
	truncated.
	
	To identify that this problem is occurring, the following entries will appear in
	internal traces. On the computer running the Distributed Link Service (or
	"SnaRem1", "SnaRem2", ...), internal SnaRem# traces will include the following:
	
	  GRLSN  Remote Services = \\sna_central_gw\snadlc2
	  GRLSN  Read service name "\\SNA_CENTRAL_GW\SNADLC2"
	   :
	   :
	  reslc  Try link service 0 "\\SNA_CENTRAL_GW\SNADLC2?"
	  reslc  Remote link service is \\SNA_CENTRAL_GW\SNADLC2?
	  DFIND   Look in DOMAIN 0 SHR a040000
	  DFIND  Open type = 0
	  DFIND  Locate remote link service \\SNA_CENTRAL_GW\SNADLC2?
	
	NOTE: The question mark (?) at the end of the link service name may be any
	"garbage" character.
	
	On the computer running the SNADLC2 (remote) link service, SnaBase internal
	traces will include:
	
	  SVCED  Searching for service SNADLC2?, type 11
	  SVCED  Service SNADLC2?, type 11 not found
	
	NOTE: The question mark (?) at the end of the link service name indicates that
	while this server does support a link service called SNADLC2, it is not found.
	
	
	RESOLUTION
	==========
	
	Add a semi-colon (;) character to the start and end of the Distributed Link
	Service name(s) specified during SNA Server Setup of the Distributed Link
	Service. For the example above, enter the following:
	
	  Remote Link Services: [;\\sna_central_gw\snadlc2; ]
	
	A hotfix for this problem is available from Microsoft.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
