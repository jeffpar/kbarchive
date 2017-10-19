---
layout: page
title: "Q170422: SNA Server APPC Returns AP_BAD_PARTNER_LU_ALIAS in Error"
permalink: /kb/170/Q170422/
---

## Q170422: SNA Server APPC Returns AP_BAD_PARTNER_LU_ALIAS in Error

	Article: Q170422
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an APPC (or CPIC) application attempts to allocate a conversation using a
	Local APPC LU alias that is owned by an SNA Server that is not running, SNA
	Server incorrectly returns the following error to the APPC application:
	
	  primary_rc = AP_PARAMETER_CHECK (0x0001)
	  secondary_rc = AP_BAD_PARTNER_LU_ALIAS (0x0000015B)
	
	APPC should return primary_rc = AP_COMM_SUBSYSTEM_NOT_LOADED (0xF004), to
	indicate that the server is not running, instead of indicating that the partner
	LU alias is invalid.
	
	CAUSE
	=====
	
	This problem was introduced in SNA Server 3.0 as part of the new support for
	dynamic APPC LU partnering, where the wrong initial return code was being set.
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 (post SP1) is available to correct this problem.
	The updated module is SNASERVR.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: cedar
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	
	=============================================================================
	
