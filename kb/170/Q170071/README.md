---
layout: page
title: "Q170071: Invokable TP Timeout May Occur With Non-queued Operation"
permalink: kb/170/Q170071/
---

## Q170071: Invokable TP Timeout May Occur With Non-queued Operation

	Article: Q170071
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to invoke a non-queued Win32 autostarted APPC or CPIC
	application configured to run on the SNA Server Windows NT and Windows 95 client
	computer, the following error may occur:
	
	  Event ID: 60
	  Failed to invoke APPC TP <tpname>, sense data = 084C0000
	
	SNA client-side traces reveal that the application is invoked and correctly posts
	a RECEIVE_ALLOCATE (or CMACCP) before the dynamic load request for the TP
	arrives, though the RECEIVE_ALLOCATE (or CMACCP) never completes and the above
	dynamic load timeout error is logged.
	
	CAUSE
	=====
	
	Due to changes implemented within SNA Server 2.11 (and later versions) to
	support IBM CICS for Windows NT, invokable APPC TPs which require non- queued
	operation may occasionally experience dynamic load timeout problems along with
	Event 60.
	
	RESOLUTION
	==========
	
	An update to the SNA Server 3.0 Windows NT and Windows 95 client is available to
	correct this problem (post-SP1). With this update applied, a new registry
	setting can be configured to disable this special support for the IBM CICS
	product
	
	  CicsSupport: REG_DWORD: 0
	
	where:
	
	  0 = disable support for IBM CICS for Windows NT
	  1 = enable support (the default)
	
	If the initial invokable TP is written as a Windows NT service, then the registry
	key value to add exists in:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/<tpname>
	  /Parameters/ 
	
	If the initial invokable TP is written as a Windows NT application, then the
	registry key value to add exists in:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/Tps
	  /<tpname>/Parameters/ 
	
	If the initial invokable TP is configured to run on a Windows 95 client, then the
	registry key value to add exists in
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/SnaBase/Parameters/TPs
	  /<tpname>/Parameters/ 
	
	where <tpname> is the APPC or CPIC transaction program name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: SAS
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
