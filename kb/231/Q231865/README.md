---
layout: page
title: "Q231865: SNA Server Interoperability with Windows Load Balancing"
permalink: /kb/231/Q231865/
---

## Q231865: SNA Server Interoperability with Windows Load Balancing

{% raw %}

	Article: Q231865
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Load Balancing Server (WLBS) is a TCP/IP-based load-balancing solution
	that load balances incoming TCP/IP packets to all nodes in a cluster or a single
	node in a cluster. WLBS distributes the load across identical servers. All nodes
	in the cluster must be configured identically to provide the same system
	services.
	
	You can configure WLBS to load balance on multiple servers filtered to use single
	affinity, no affinity, or Class C. SNA Servers can function in a WLBS
	environment configured for single affinity, however, it is not recommended. When
	configured for single affinity, all incoming packets using the WLBS virtual IP
	address are locked to a specific node in the WLBS cluster. Every packet that is
	sent from the client using the cluster IP address connects to that node. WLBS
	does not make any application routing decisions; all load-balancing rules are
	based on TCP/IP routing decisions.
	
	MORE INFORMATION
	================
	
	SNA Server exhibits the following limitations:
	
	- SNA client's request for 3270 or APPC Logical Units (LUs) may not exist on
	  the targeted SNA Server. SNA Server rejects the requested LU and cannot
	  service the client's request.
	
	- SNA Server may not have any 3270 or APPC LUs available to service the SNA
	  client-requested LU Pool.
	
	- SNA clients are not able to request a LU from another SNA Server when an SNA
	  connection fails.
	
	For these reasons, SNA clients should not use the Windows Load Balancing Server
	virtual IP address to connect to an SNA Server installed on a WLBS node
	configured for multiple hosts. This affects Microsoft SNA Server versions 2.11,
	2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 and 4.0 SP2.
	SNA Server can take advantage of the native hot backup and load-balancing
	features as explained in the following Knowledge Base article:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
