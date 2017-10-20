---
layout: page
title: "Q165703: 16-bit RUI Calls Don't Complete Properly Using NT Thunking DLL"
permalink: /kb/165/Q165703/
---

## Q165703: 16-bit RUI Calls Don't Complete Properly Using NT Thunking DLL

{% raw %}

	Article: Q165703
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running a 16-bit RUI application on a computer running Windows NT that is
	using the SNA Server 2.11 or SNA Workstation 2.11 RUI thunking DLL interface,
	the application may not be properly notified of asynchronous completion of an
	RUI call, causing the application to quit responding (hang).
	
	CAUSE
	=====
	
	The SNA Server LUA RUI and SLI thunking DLLs were not properly allocating and
	locking memory for verb control blocks, causing 16-bit RUI thunking calls to
	fail to complete.
	
	
	RESOLUTION
	==========
	
	An update to SNA Server and SNA Workstation 2.11 (newer than Service Pack 2) and
	SNA Server 3.0 are available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server and SNA Workstation
	version 2.11 and SNA Server version 3.0. This problem was corrected in the
	latest Microsoft SNA Server 3.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
