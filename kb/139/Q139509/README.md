---
layout: page
title: "Q139509: RUI Application Does Not See STSN.REQ"
permalink: /kb/139/Q139509/
---

## Q139509: RUI Application Does Not See STSN.REQ

	Article: Q139509
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run an RUI application, during a RQR-CLEAR-STSN-UNBIND processing, SNA
	Server intercepts and responds to the STSN.REQ without application intervention.
	The RUI application does not see the STSN.REQ.
	
	CAUSE
	=====
	
	A CLEAR request received immediately before the STSN causes the CS1APLTR field
	of the SCB to be reset. However, CS1APLTR field should only be reset when the
	session is deactivated.
	
	RESOLUTION
	==========
	
	An update to the SNA Server 2.11 file SNASERVR.EXE corrects this problem.
	
	
	For more information on definitions of RQR, CLEAR, STSN, and UNBIND, see the RU
	Chapter of the IBM SNA Formats Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
