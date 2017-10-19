---
layout: page
title: "Q182063: SNA API Traces May Fail to Capture CMALLC or Allocate Failures"
permalink: /kb/182/Q182063/
---

## Q182063: SNA API Traces May Fail to Capture CMALLC or Allocate Failures

	Article: Q182063
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If CPIC or APPC API tracing is enabled for SNA Applications, and the APING
	sample program is run while the SNA Server service is stopped, the API traces
	only capture up to the CPIC CMALLC and APPC ALLOCATE requests. Although the
	APING application fails with a CPIC Error 20, the CPIC CMALLC and APPC
	MC_ALLOCATE errors and any further API traces are not captured in the trace
	files.
	
	This problem also affects LU6.2 message tracing. The LU6.2 message traces capture
	the OPEN(LU62) request, but not the error response.
	
	This problem is not specific to APPC or CPIC applications. This tracing problem
	can also occur with LUA RUI or SLI applications, if the LUA application ends
	suddenly after receiving an LUA API error.
	
	
	CAUSE
	=====
	
	The Windows NT SNA Application tracing module (Dbgtrace.dll) fails to flush
	trace buffer data before the application ends. In this case, the APING program
	ends immediately after receiving the error, causing the trace buffer to fail to
	be flushed to the trace file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
