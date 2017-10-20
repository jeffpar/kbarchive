---
layout: page
title: "Q182883: Using SNA Server 2.11, 3.0, and 4.0 in Same Network"
permalink: /kb/182/Q182883/
---

## Q182883: Using SNA Server 2.11, 3.0, and 4.0 in Same Network

{% raw %}

	Article: Q182883
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server versions 2.11 and 3.0 or later can operate successfully in the same
	subdomain. The SNA Server computer running the oldest version must be installed
	as the primary server. Features new to version 4.0 cannot be used until all SNA
	Server computers in the subdomain are running at least version 3.0 or later.
	
	Although this article explains how to run different versions of SNA Server within
	the same subdomain, when you are upgrading to a new version of SNA Server,
	Microsoft recommends implementing an SNA subdomain that contains SNA Server
	computers installed with the newer version and then migrating clients to these
	new servers. This approach requires additional servers during the transition
	period, though it reduces the interoperability issues raised when running SNA
	Server computers of different versions within the same subdomain. Back-level SNA
	clients are supported through SNA Server 3.0 and 4.0 level servers, though
	Microsoft recommends that older clients be upgraded gradually, as time allows.
	
	MORE INFORMATION
	================
	
	If a subdomain contains a combination of SNA Server versions 2.11 and 3.0 or
	later, the configuration file of the earlier versions must be used, because the
	SNA Server configuration file is not backward compatible. SNA Server 3.0 or
	later can read earlier configuration files but cannot update the configuration
	file when SNA Server 2.11 is configured as the primary configuration server. To
	continue use of version 2.11 servers in the subdomain, SNA Server Manager cannot
	be used to perform any configuration tasks. The SNA Server 2.11 Administrator
	tool can be used to configure any SNA Server features that were available in
	2.11. Features new to versions 3.0 and 4.0 will not be available until the
	primary configuration server is running SNA Server version 3.0 or 4.0 and the
	configuration file has been upgraded (or resaved using the SNA 4.0 Manager or
	Microsoft Management Console).
	
	When all servers are upgraded to version 4.0, the last computer to be upgraded in
	the subdomain must be the primary server. The configuration file is upgraded and
	then automatically copied to all backup servers in the subdomain. It is
	recommended that until all servers are upgraded to version 4.0, the SNA Server
	computers running version 4.0 be designated as member servers. Until all servers
	are running version 4.0, and the configuration file is upgraded, the services
	and features listed below are not available, because they require the version
	3.0 or later configuration file.
	
	- The TN3270 service that ships with version 3.0 and later (The TN3270 service
	  that ships with version 2.11 will work, though it must be configured with the
	  SNA Server 2.11 TN3270 Administration tool.)
	
	- The TN5250 Service (not available with version 2.11)
	
	- Host Print Service
	
	- Shared Folders Gateway
	
	- Host Security Integration
	
	- PU Passthrough support
	
	- SNA session level encryption
	
	- Enhanced security for APPC and LUA LUs
	
	REFERENCES
	==========
	
	The information for this article is contained in the SNA Manager online help for
	SNA Server version 4.0. (Administration Guide, Part 1 - Introduction and Basic
	Concepts).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
