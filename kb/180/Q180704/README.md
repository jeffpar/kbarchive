---
layout: page
title: "Q180704: SLI_CLOSE May Hang if CICS Doesn't Respond to SHUTC"
permalink: kb/180/Q180704/
---

## Q180704: SLI_CLOSE May Hang if CICS Doesn't Respond to SHUTC

	Article: Q180704
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SLI application calls SLI_CLOSE, the SLI_CLOSE may never complete if the
	host sends an UNBIND request but fails to send a SHUTC response.
	
	This problem was found when connecting an SLI application to CICS. If the CICS
	region is stopped and started, in some cases the SLI application's SLI_CLOSE
	request failed to complete.
	
	The following API and message sequence summarizes the failure scenario:
	
	SLI Program  SLI API      SNA Server/Host
	===========  =========    =================
	 < SLI program in session with the host >
	
	SLI_BID ->
	                         <- SHUTD
	            <- SLI_BID (LUA_SESSION_END_REQUESTED)
	SLI_CLOSE ->
	            SHUTD +RSP ->
	            CHASE ->
	                         <- CHASE +RSP
	            SHUTC ->
	                         <- UNBIND (type 01 = normal)
	            SENSE 08390000 ->
	                         UNBIND +RSP ->
	
	CAUSE
	=====
	
	The SLI interface was hanging if it received an UNBIND when waiting for a SHUTC
	response.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this update applied, the SLI interface will now complete the SLI_CLOSE if
	an UNBIND is received, even if no SHUTC response is received.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
