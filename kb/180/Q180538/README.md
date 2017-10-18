---
layout: page
title: "Q180538: SNA Server SDLC Connection Fails to Reactivate After Host IPL"
permalink: kb/180/Q180538/
---

## Q180538: SNA Server SDLC Connection Fails to Reactivate After Host IPL

	Article: Q180538
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SDLC connection from SNA Server to a front-end processor (FEP) remains in a
	pending state after the host performs an IPL. The only means of recovery is to
	stop and restart the SNA Server service.
	
	SNA Server may post an Event 23 in the Windows NT application event log with a
	qualifier of 00A1 or 0025 as a result of these symptoms.
	
	CAUSE
	=====
	
	SNA Server is erroneously handling the non-activation XIDs sent from the FEP on
	an SDLC connection and treating this as a connection outage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in the latest SNA
	Server version 3.0 and 4.0 U.S. Service Packs. For information on obtaining
	these Service Packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, the Ibmsdlc.DLL interface allows for the correct handling
	of SDLC non-activation XIDs.
	
	The SNA Server Ibmsdlc.dll (SDLC Link Service) file supports a "dumb card" driver
	interface that is published in the appendix of the SNA Device Interface
	Specification (SNADIS) guide. This link service will work with any dumb card
	implementation, such as Ibmsync.sys (the IBMSDLC driver), Microgate, DCA ISCA,
	Attachmate SDLC, as well as others.
	
	Other SDLC link services implement the full SNADIS interface so the Ibmsdlc.dll
	is not used. Some examples of these link services include Eicon SDLC and Barr
	SDLC.
	
	
	Additional query words: 0xA1 0x25 IPL pending connection
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
