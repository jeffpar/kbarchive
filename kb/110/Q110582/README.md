---
layout: page
title: "Q110582: SNA Server Service Stays Inactive When Started"
permalink: /kb/110/Q110582/
---

## Q110582: SNA Server Service Stays Inactive When Started

	Article: Q110582
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an SNA Server link service fails to start for any reason, the SNA Server
	service will not start. Using SNA Server Admin, the server switches from Pending
	to Inactive when it is started.
	
	WORKAROUND
	==========
	
	To work around this problem, remove any SNA Server link services that depend on
	adapters that are not present, or determine why the SNA link service failed to
	start. Possible causes for link service initialization failures include, but are
	not limited to, the following:
	
	- Adapter not present in the machine.
	
	- Interrupt conflict with another device in the machine.
	
	- DLC driver not installed or bound to the network adapter.
	
	MORE INFORMATION
	================
	
	When SNA Server is installed, the SNA Server service is configured to depend on
	all underlying link services to start. However, if an underlying link service
	fails to start for any reason, SNA Server fails to start and the following error
	will be logged in the Windows NT system log:
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The SnaServer service depends upon the <snalink> service
	  which failed to start because of the following error:
	  The dependency service or group failed to start.
	
	Note that <snalink> is the name of the SNA Server link service specified
	during SNA Server setup (default names are SnaSdlc1, SnaDlc1, SnaDft1, SnaX251).
	This error occurs because the <snalink> service did not start. The reason
	for the failure should be present in a preceding error in the system event log,
	reported as Event ID #7000.
	
	This no longer occurs with SNA Server versions 3.0 and later.
	
	Additional query words: prodsna SNA service 7000 7001
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2
	
	=============================================================================
	
