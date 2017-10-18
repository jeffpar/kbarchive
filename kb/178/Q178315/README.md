---
layout: page
title: "Q178315: APPC or CPIC Programs Stop Working"
permalink: kb/178/Q178315/
---

## Q178315: APPC or CPIC Programs Stop Working

	Article: Q178315
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPIC application that attempts to use a fully qualified Remote APPC
	LU name instead of a Remote APPC LU alias will not work on the initial retail
	release of SNA Server 4.0. The following symptoms occur when an APPC or CPIC
	application attempts to use a fully qualified Remote APPC LU name:
	
	- An APPC application's [MC_]ALLOCATE request fails with primary_rc =
	  AP_COMM_SUBSYSTEM_NOT_LOADED (0xF004)
	
	- A CPIC application's CMALLC request fails with CM_PRODUCT_SPECIFIC_ERROR (rc
	  = 20).
	
	This problem does not occur if the APPC or CPIC application specifies a Remote
	APPC LU alias in its [MC_]ALLOCATE or CMALLC request.
	
	
	CAUSE
	=====
	
	SNA Server 4.0 implements the ability to limit user access to Remote APPC LU's.
	However, during implementation of this feature, APPC or CPIC application access
	to fully qualified Remote APPC LU names was inadvertently disallowed, even if
	Remote APPC LU security is not enabled using SNA Server Manager.
	
	WORKAROUND
	==========
	
	A fix to this problem is available from Microsoft. To work around this problem
	without obtaining this fix, do one of the following:
	
	- Modify the APPC application to use a Remote APPC LU alias.
	
	  -OR-
	
	- Change the CPIC side information name to use a Remote APPC LU alias instead
	  of using a fully qualified Remote APPC LU name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
