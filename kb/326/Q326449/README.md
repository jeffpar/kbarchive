---
layout: page
title: "Q326449: LUA Session Allocation Behavior Between Two TN3270 Services"
permalink: kb/326/Q326449/
---

## Q326449: LUA Session Allocation Behavior Between Two TN3270 Services

	Article: Q326449
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the behavior of a Logical Unit Application (LUA) session
	allocation when a 3270 client that is configured for TN3270 specifies the server
	name or IP address and pool name when using multiple TN3270 services.
	
	MORE INFORMATION
	================
	
	All 3270 clients that are configured in TN3270 mode and that specify a server
	name or IP address and LUA pool acquire an LUA logical unit (LU) from the server
	or IP address that the client specified.
	
	For example:
	
	- Server A and server B are in the same SNA Subdomain.
	
	- Available LUA LUs from both servers are assigned to a common LUA pool named
	  LUAPOOL.
	
	- LUAPOOL is assigned to both TN3270 Services on server A and server B.
	
	- A 3270 client specifying server A using LUAPOOL will always acquire an LUA LU
	  from server A until all LUA LUs are used up from server A. After that, LUA
	  LUs are pulled from server B.
	
	If the TN3270 service or server A is inactive or unavailable, the 3270 client
	will not acquire an LUA LU from server B. Instead, you receive an error similar
	to the following:
	
	  Host Connection Timed Out.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q185446 TN3270 Server LUA Pool Use Should Load Balance Across Servers
	
	  Q236591 SNA Server LU Allocation Favors Active Remote Connections over
	  Available Local Connections
	
	  Q266275 HIS 2000 Client LU6.2 Load Balancing Across SNA Server Services
	
	  Q268127 TN3270 LUs Must Be Pooled Across Multiple Nodes or Connections
	
	Additional query words:
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
