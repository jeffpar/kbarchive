---
layout: page
title: "Q135495: Dynamically Adding LUA LUs is Supported"
permalink: kb/135/Q135495/
---

## Q135495: Dynamically Adding LUA LUs is Supported

	Article: Q135495
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
	
	SNA Server Admin allows some changes to be made dynamically, so you do not have
	to stop the SNA Server service. However, under SNA Server 2.0, 2.1, and 2.11,
	SNA Server does not support the dynamic definition of LUA LUs. The SNA Server
	service must be stopped and started when new LUA LUs are added to the
	configuration.
	
	RESOLUTION
	==========
	
	An enhancement to SNA Server 2.11 now supports the dynamic creation and pooling
	of new LUA LUs.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 pool lu
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
