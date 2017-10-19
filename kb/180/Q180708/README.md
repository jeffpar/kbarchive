---
layout: page
title: "Q180708: SLI_OPEN May Fail With LUA_STATE_CHECK/LUA_NO_SLI_SESSION"
permalink: /kb/180/Q180708/
---

## Q180708: SLI_OPEN May Fail With LUA_STATE_CHECK/LUA_NO_SLI_SESSION

	Article: Q180708
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SNA Server Win32 SLI API interface, an SLI application may
	receive the following SLI_OPEN error when attempting to reopen a dependent
	session:
	
	  
	
	 primary_rc   = 0x0002     (LUA_STATE_CHECK)
	 secondary_rc = 0x00000034 (LUA_NO_SLI_SESSION)
	
	The following API and message flow summarizes the behavior that may be observed
	in SNA Server API and 3270 message traces:
	
	SLI Program  SLI API   RUI API     SNA Server /Host
	===========  =======   =======     =================
	       <SLI program in session>
	
	SLI_BID ->
	SLI_SEND (send host logoff) ->
	            <- SLI_SEND OK
	                                  <- UNBIND
	            <- SLI_BID (LUA_SESSION_FAILURE)
	            RUI_TERM ->
	                      <- RUI_TERM OK
	SLI_OPEN ->
	            <- SLI_OPEN ERROR: LUA_STATE_CHECK, LUA_NO_SLI_SESSION
	
	CAUSE
	=====
	
	The SNA Server SLI interface was incorrectly locating an SLI control block based
	on the LU name, which is not always unique. Instead, SLI should have been
	checking the session ID which is always unique.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
