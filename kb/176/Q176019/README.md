---
layout: page
title: "Q176019: SNA Windows 95 Client Support for Multiple Users on Windows NT"
permalink: kb/176/Q176019/
---

## Q176019: SNA Windows 95 Client Support for Multiple Users on Windows NT

	Article: Q176019
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT supports applications running under different user contexts. However,
	if these applications attempt to use the SNA Server API interfaces on a Windows
	NT computer running the SNA Server Windows 95 client, only the first SNA
	application will work. The error message will vary, depending on the
	application, though an APPC or CPIC application will encounter the following API
	return codes:
	
	  APPC primary return code = 0xF004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	
	  CPIC return code = 20 (PRODUCT_SPECIFIC_ERROR)
	
	NOTE: The above errors may occur under other more common circumstances as well,
	though these errors should not be confused with the specific problem described
	in this article. For more information about the above API errors, see the
	following Knowledge Base articles:
	
	  Q148359 SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED
	
	  Q132720 SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	
	CAUSE
	=====
	
	The SNA Server Windows 95 client was originally designed to support client
	applications under a single user context.
	
	
	WORKAROUND
	==========
	
	Use the SNA Server Windows NT client software on the Windows NT computer,
	instead of the SNA Server Windows 95 client software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Server Windows 95 client
	included in SNA Server versions 3.0, 3.0 Service Pack 1, and 3.0 Service Pack
	2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
