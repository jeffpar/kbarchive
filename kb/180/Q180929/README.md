---
layout: page
title: "Q180929: TN3270 Client Ignoring Keyboard Lock"
permalink: kb/180/Q180929/
---

## Q180929: TN3270 Client Ignoring Keyboard Lock

	Article: Q180929
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
	
	A TN3270 client may send data to the TN3270 Service even though the keyboard
	should have been locked.
	
	CAUSE
	=====
	
	The client is sending data before the host has sent a Change Direction (CD) or
	End Bracket (EB). In a trace, behavior similar to the following may be seen:
	
	1. Host sends Begin Bracket (BB) and no CD, with RU=F5C3D7C1, (locking the
	  keyboard).
	
	2. TN3270 Server sends a 05C1D7C1 to the client.
	
	3. SNA Server sends a +rsp to the Host.
	
	4. Client sends in the first part of the data, 7D40C4C1... (ignoring the
	  keyboard lock).
	
	5. Client sends in the rest of the data.
	
	6. Host sends CD (Unlocking the keyboard).
	
	7. TN3270 Server sends 01C2FFEF to the client.
	
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
	
	The fix alters SNA Server's TN3270 behavior by queuing the messages from the
	TN3270 client until a CD or EB is received from the host.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
