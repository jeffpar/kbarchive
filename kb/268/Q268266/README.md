---
layout: page
title: "Q268266: TN3270 Print Session Stops Responding When Host Sends a SHUTD"
permalink: kb/268/Q268266/
---

## Q268266: TN3270 Print Session Stops Responding When Host Sends a SHUTD

	Article: Q268266
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A TN3270 print session may stop responding when it receives a SHUTD (shutdown)
	command if the host terminates the bracket by sending a null RU with the EB (end
	bracket) flag set.
	
	CAUSE
	=====
	
	A null RU that is sent by the host to a TN3270E printer session is never
	received, and then managed by the TN3270E printer. This problem occurs because
	of a behavior that was introduced in a workaround to a bug contained in some
	third-party emulators. A null RU is directly acknowledged by the TN3270 service,
	and if it is included in this frame, the EB information is never sent to the
	emulator. For this reason, the TN3270E session remains in a PENDBB (pending
	between bracket) status and never goes into a BETB (between bracket) status. In
	this condition, a SHUTD (shutdown) request coming from the host is never
	accepted, as the TN3270E session is still waiting for the end of the bracket.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
