---
layout: page
title: "Q276446: Branch Servers Using DLS Use Dynamic Port for SnaBase Connection"
permalink: /kb/276/Q276446/
---

## Q276446: Branch Servers Using DLS Use Dynamic Port for SnaBase Connection

{% raw %}

	Article: Q276446
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Branch-based SNA Servers that use a Remote Link Service may not be able to
	communicate with a central SNA Server if Internet firewalls or screening routers
	between the SNA Server systems are filtering outgoing Transfer Control
	Protocol/Internet Protocol (TCP/IP) ports in addition to incoming TCP/IP ports.
	
	Branch-based SNA Servers open a connection to a central SNA Server's SnaBase
	service in order to initialize the distributed host connection. The TCP/IP
	source port that is used by the branch server for this SnaBase connection is
	dynamic. If there is a firewall or screening router between the branch and
	central SNA Server that is filtering on outgoing ports, the firewall will not
	forward the responses from the central SNA Server to the branch SNA Server
	because the "dynamic" source port will not be known to the firewall.
	
	NOTE: In most cases that involve firewalls (or screening routers), only the
	incoming TCP/IP ports are filtered, so this would not be an issue. The filtering
	of outgoing TCP/IP ports is not as common as filtering incoming ports.
	
	For additional information about the latest service pack for SNA Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	The following Knowledge Base articles describe how to configure SNA Servers to
	use specific (static) TCP/IP ports and ranges of ports when using Distributed
	Link Services (DLS) in environments that use firewalls and/or screening routers:
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q164590 Branch Servers Using DLS Cannot Communicate Through Firewalls
	
	  Q224303 SNA Server Allows Range of IP Ports with Distributed Link Service
	
	After you apply the update, the branch-based SNA Servers that use the methods
	described by the referenced articles will also use static TCP/IP ports (or a
	range of static ports) to open connections to a central SNA Server's SnaBase
	service.
	
	NOTE: A range of ports should be used for the reasons described in the referenced
	articles.
	
	
	
	Additional query words: Snaip sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
