---
layout: page
title: "Q182637: SNA Server Notifies Windows NT Clients of All Invokable TPs"
permalink: /kb/182/Q182637/
---

## Q182637: SNA Server Notifies Windows NT Clients of All Invokable TPs

{% raw %}

	Article: Q182637
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server notifies all SNA Server Windows NT clients of all invokable
	transaction programs (TPs) registered in the SNA dubdomain, even though the SNA
	Windows NT clients ignore these entries. This problem may cause no observable
	symptoms. However, it can cause excessive network traffic between SNA Windows NT
	clients and SNA Server computers if a large number of invokable TPs are
	registered within an SNA Server subdomain. This excessive traffic may lead to
	LAN connectivity problems between SNA Server Windows NT clients and the SNA
	Server computer.
	
	
	CAUSE
	=====
	
	Each SNA Server keeps track of all invokable transaction programs (TPs)
	registered on all servers and clients within the SNA Server subdomain. When SNA
	Server receives an FMH-5 attach message for a specific TP name, SNA Server
	routes the request to the appropriate server or client computer. Although SNA
	Server needs to advertise all registered invokable TPs to all other SNA Server
	computers in the subdomain, it also advertises these entries to all attached SNA
	Server Windows NT clients, which ignore this information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3 and 4.0. This problem was corrected in the latest SNA
	Server version 4.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
