---
layout: page
title: "Q150569: Stardata TSR on Win3.x Client Causes SNABase Service to Loop"
permalink: kb/150/Q150569/
---

## Q150569: Stardata TSR on Win3.x Client Causes SNABase Service to Loop

	Article: Q150569
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNABase service will reach approximately 100% CPU utilization in Performance
	Monitor and all SNA Server clients connected to this SNA Server will be
	disconnected.
	
	CAUSE
	=====
	
	A badly written application running on a Windows 3.x computer overwrites the
	memory address occupied by the SNA Server Win3.x client-server interface DLL
	files. If the bad application hits a particular code segment (owned by the SNA
	Server components), it will cause SNA Server Win3.x client-server interface to
	send a bogus service table update to the SNA Server with the bad application's
	data. This causes the SNABase service running on the SNA Server to reach
	approximately 100% CPU utilization.
	
	NOTE: Service table updates will normally flow from an SNA Server Win3.x client
	only when the client is configured to support the registration of an APPC
	invokable TP.
	
	
	WORKAROUND
	==========
	
	A fix was made to SNA Server:
	
	- To cause verbose validity checking on any incoming service table update
	  (msgtype 07); only the expected service table updates will be processed.
	
	  In addition, the following application event will be logged when SNA Server
	  receives a bad service table update from a client:
	
	  631 - Invalid message received across the LAN.
	
	- To ignore any incoming service table update.
	
	To cause SNA Server to ignore all incoming service table updates, set the
	following parameter:
	
	\hkey_local_machine
	 \system
	   \current_control_set
	         \Services
	           \SNABase\ 
	             \parameters: IgnoreClientUpdates:REG_DWORD:1
	
	If this parameter has any non-zero value, the SNABase will ignore all client
	updates.
	
	It will also log event 709 when it receives one.
	
	NOTE: If this parameter is set up to ignore all incoming service table updates, a
	SNA Server Windows NT client running SNA Admin will not be able to administer
	the domain. Therefore, it is recommended that you not set this for
	IgnoreClientUpdates unless it is determined that verbose validity checking is
	not preventing the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.10, 2.11, and 2.11.sp1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	
