---
layout: page
title: "Q266275: HIS 2000 Client LU6.2 Load Balancing Across SNA Server Services"
permalink: /kb/266/Q266275/
---

## Q266275: HIS 2000 Client LU6.2 Load Balancing Across SNA Server Services

{% raw %}

	Article: Q266275
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	An APPC or CPIC application running on Host Integration Server 2000 (as in SNA
	Server 4.0) directs Allocate requests for a specific LU/LU pair against the same
	SNA Server service. When an APPC or CPIC application gets a conversation through
	a specific SNA Server, further Allocate requests for the same LU/LU pair favors
	the same server.
	
	However, in Host Integration Server 2000, a registry entry can be used to force
	APPC or CPIC Allocate requests from a single process through different SNA
	Servers in the subdomain. You can use this to achieve load balancing of LU6.2
	requests from a single APPC or CPIC process to two or more SNA Server services
	configured with redundant APPC LU resources. Also, if an LU6.2 application has a
	conversation through a remote server and a local server service (providing the
	same resources) is started, the registry entry can cause the LU6.2 application
	to try the local server for new Allocate requests.
	
	For additional information about APPC load balancing with SNA Server (all
	versions) and Host Integration Server 2000 (when the registry setting is not
	used), click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	MORE INFORMATION
	================
	
	The TN3270 load-balancing enhancements implemented in SNA Server 4.0 Service
	Pack 3 (described in knowledgebase article Q236591) have now been implemented
	for APPC/LU6.2 in Host Integration Server 2000. This new LU6.2 load-balancing
	feature is not available in SNA Server 4.0.
	
	This new behavior for CPIC or APPC application resource location is enabled by
	setting the ResLocFlags registry entry to a Data value of either 0x8000 or
	0x8001 under the following registry key:
	
	  KEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase\Parameters\Client\
	  ResLocFlags: REG_DWORD: 0x8001 (Default = 0)
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If the data value is 0x8000, then the APPC DLL routes all Allocate requests to
	any locally running instances of the SNA Server service (for example, if the
	LU6.2 application is running on a server), instead of trying an existing
	connection to SNA Server running on a separate computer.
	
	If the data value is 0x8001, the "try local first" behavior is implemented, as
	well as the "load balance among remote servers" feature. which is described in
	article Q185446.
	
	In both cases, the Host Integration Server 2000 APPC DLL first tries to use a
	locally running SNA Server service (if running on a server). If a request cannot
	be satisfied locally, the APPC DLL tries to connect to a remote server that
	supports the LU/LU/mode being requested. Note that there is no load balancing
	among local SNA Servers. That is, APPC or CPIC applications will first consume
	all resources from one local SNA server before allocating resources from the
	other local SNA Servers.
	
	NOTE: If ResLocFlags is not set, it defaults to 0, meaning that the behavior in
	SNA Server 4.0 is used. When the APPC DLL gets a conversation through one SNA
	Server, it tries the same SNA Server for additional Allocate requests for the
	same LU/LU pair. The APPC DLL will not try an additional SNA Server until the
	first server's LU6.2 resources are exhausted or the server becomes unreachable.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	

{% endraw %}
