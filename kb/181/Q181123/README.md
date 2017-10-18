---
layout: page
title: "Q181123: CPIC Application Limited to Single Local APPC LU"
permalink: kb/181/Q181123/
---

## Q181123: CPIC Application Limited to Single Local APPC LU

	Article: Q181123
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that uses the SNA Server CPIC API interface is limited to a
	single Local APPC LU, even if the application calls Initialize_Conversation
	(CMINIT) more than once.
	
	MORE INFORMATION
	================
	
	Because there is no explicit provision in the CPIC API for the application to
	specify the Local APPC LU alias that it wants to use, SNA Server provides three
	methods for defaulting the Local APPC LU alias, as described in the following
	Knowledge Base article:
	
	  Q132720 SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	One of the methods is to enable the "Member of Default Outgoing Local APPC LU
	Pool" on the SNA Server Local APPC LU. If more than one Local APPC LU is enabled
	with this option, the CPIC application is still limited to a single Local LU
	from this pool.
	
	This restriction has the following implications:
	
	- A CPIC application will be unable to allocate two concurrent conversations
	  across two different Local APPC LUs. When using dependent Local APPC LUs
	  (which are limited to a single session), the second CMALLC request will block
	  (or be queued behind the first conversation) until the CPIC application's
	  first conversation over that local LU is ended.
	
	- If there are two SNA Server computers and each is configured with the same
	  Remote APPC LUs and modes but different Local APPC LU aliases, the CPIC
	  application is limited to a single server, unless the CPIC application is
	  restarted. If the CPIC application's conversation through the first SNA
	  Server computer is ended, and attempts to access a conversation through a
	  Remote APPC LU on the second SNA Server computer, the CMALLC request will
	  fail with Error 20 (CM_PRODUCT_SPECIFIC_ERROR). The underlying MC_ALLOCATE
	  will fail with primary_rc = 0001 (AP_PARAMETER_CHECK), secondary_rc =
	  0x0000015b (AP_BAD_PARTNER_LU_ALIAS).
	
	- This limitation occurs with each CPIC application that is run. For example,
	  if two instances of the CPIC application are started, it is possible for one
	  instance to make use of one Local APPC LU, and another instance to use a
	  different Local APPC LU.
	
	In order for the CPIC application to acquire a session over a different Local
	APPC LU, the application must be ended (or call WinCPICCleanup) prior to its
	first call to CMINIT.
	
	The following is a summary of this behavior, as seen in an SNA Application CPIC
	and APPC trace. Note that the CPIC API is built on top of the APPC API
	interface. When a CPIC application calls the CPIC API functions, these CPIC
	functions result in calls to the underlying APPC interface.
	
	CPIC Application   CPIC API   APPC API
	================   ========   ========
	 CMINIT ->
	                 TP_STARTED ->
	                            <- TP_STARTED OK
	                 <- CMINIT OK
	 CMALLC ->
	                 MC_ALLOCATE ->
	                            <- MC_ALLOCATE OK
	 CMSEND ->
	                 MC_SEND_DATA ->
	 [...]
	
	 CMINIT ->
	                <- CMINIT OK
	
	Note that the second CMINIT request never causes CPIC to issue another TP_STARTED
	request. The TP_STARTED request causes a new Local APPC LU to be requested.
	
	This is still an issue with the following SNA Server Service Packs:
	
	- SNA Server 3.0 SP3
	
	- SNA Server 4.0 SP1
	
	- SNA Server 4.0 SP2
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
