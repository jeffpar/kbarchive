---
layout: page
title: "Q164574: LUA Pools Cannot Be Assigned to SNA 3.0 TN3270 Service"
permalink: /kb/164/Q164574/
---

## Q164574: LUA Pools Cannot Be Assigned to SNA 3.0 TN3270 Service

{% raw %}

	Article: Q164574
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft SNA Server version 3.0 does not allow an LUA Pool to be assigned to
	the TN3270 service with SNA Server Manager.
	
	LUA Pools could be used with the TN3270 service that is included with SNA Server
	version 2.11.
	
	CAUSE
	=====
	
	SNA Server 3.0 Manager is not designed to allow the use of LUA Pools with the
	TN3270 service because any LUA LUs that are assigned to the TN3270 service
	operate as a virtual pool.
	After the release of SNA Server 3.0, Microsoft received several requests for the
	addition of support for LUA Pools to help simplify TN3270 configuration.
	
	RESOLUTION
	==========
	
	SNA Server 3.0 Manager has been modified to allow the use of LUA Pools with the
	TN3270 service. Several SNA Server files were updated to provide this support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
