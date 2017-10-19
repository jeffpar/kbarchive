---
layout: page
title: "Q180931: MicroGate SDLC Adapter Is Not Being Allowed Time to Reset DSR"
permalink: /kb/180/Q180931/
---

## Q180931: MicroGate SDLC Adapter Is Not Being Allowed Time to Reset DSR

	Article: Q180931
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft SNA Server is trying to dial out too quickly and not giving the
	MicroGate SDLC adapter and modem time to reset the interface leads. The SDLC
	link service should implement a hold-down timer after dropping DTR before it
	raises it. SNA Server will log an event similar to the following when this
	problem occurs:
	
	  Event ID: 175
	  Description: Modem shows DSR before dialing, for connection <connection
	  name> through link service <link service name>.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Once the update is applied, SNA Server will have a default delay of 5,000 ms (5
	seconds) once DTR is dropped to allow time for the SDLC adapter and modem to
	reset the interface leads. To configure this delay:
	
	1. Apply the hotfix.
	
	2. Start the Windows NT Registry Editor (Regedt32.exe) and find the following
	  key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\SnaSDLC1\Parameters\
	
	3. Add the following entry to this key:
	
	  Value Name: DropDTRDelay
	  Data Type: REG_DWORD
	  String: <delay in milliseconds>
	
	The MicroGate SDLC adapter is manufactured by MicroGate, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
