---
layout: page
title: "Q126399: Event ID 49: Node ID from Remote Computer was Rejected"
permalink: kb/126/Q126399/
---

## Q126399: Event ID 49: Node ID from Remote Computer was Rejected

	Article: Q126399
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your SNA Server, an attempted connection is not able to activate and holds in
	a pending state. The following events appear in the Application Event log:
	
	  Event ID: 49
	  Description: Node ID from remote computer was rejected.
	
	  Event ID: 55
	  Description: No incoming connection matched info on XID from remote
	  MAC address <MAC address>.
	
	From the SNA Server client, when you attempt to connect using a 5250 emulator the
	following error message appears:
	
	  There is a problem with the configuration of the connection to the
	  AS/400
	
	  Primary return code = 0003
	  Secondary return code = 00000005
	
	CAUSE
	=====
	
	One of the three following conditions exist:
	
	- The Network Name in the Connection Properties or the Server properties does
	  not match the Local Network ID in the Network attributes screen on the
	  AS/400.
	
	- The Remote Control Point Name in the Connection Properties does not match the
	  Local Control Point name defined in the AS/400 Network Attribute Screen.
	
	- The Remote Node ID in the Connection properties is filled in. It should be
	  blank.
	
	RESOLUTION
	==========
	
	Reconfigure to correct the problem.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3
	
	=============================================================================
	
