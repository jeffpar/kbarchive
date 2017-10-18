---
layout: page
title: "Q165459: Internal Tracing for 32-bit CPI-C Applications Not Available"
permalink: kb/165/Q165459/
---

## Q165459: Internal Tracing for 32-bit CPI-C Applications Not Available

	Article: Q165459
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internal tracing of 32-bit CPI-C applications is not available when running the
	CPI-C application on an SNA Server, SNA Workstation, or Windows NT SNA Server
	client.
	
	NOTE: Internal traces for SNA Server components are typically run at the request
	of Microsoft Technical Support.
	
	CAUSE
	=====
	
	The SNA Server has always had SNADMOD internal tracing for SNA Applications that
	use any of the SNA Server's supported APIs. These internal traces are used to
	diagnose problem between the client-server interface. SNA Server hasn't
	supported internal tracing within the CPI-C DLL itself, which would allow the
	diagnosis of logic-related problems within the handling of the CPI-C API.
	
	RESOLUTION
	==========
	
	The 32-bit CPI-C libraries for SNA Server 3.0 have been updated to include
	support for internal tracing within the CPI-C DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snatrace
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
