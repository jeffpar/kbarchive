---
layout: page
title: "Q225156: Print Server Shows Incorrect Status Starting Large # of Printers"
permalink: kb/225/Q225156/
---

## Q225156: Print Server Shows Incorrect Status Starting Large # of Printers

	Article: Q225156
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting a large number of print sessions simultaneously on SNA Server,
	status updates may not be reflected properly in SNA Manager, which may indicate
	that printers are unavailable when in actuality they are functioning properly.
	
	Event Viewer may also show the following event log:
	
	  Event ID: 12 Source: SNA Print Server The Buffer pool for messages has become
	  exhausted. Data may be lost.
	
	Internal tracing may show the following:
	
	  aimmain.c(1450)    AGFQH Free Queue is EMPTY!
	  aimctrl.c(972)     AStus Status message lost
	  aimctrl.c(1005)    AStus Leave, rc=5
	
	CAUSE
	=====
	
	There is a limited queue of resources used internally to send Manager status
	messages, and these are getting used up faster than they are being freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0SP1, 4.0SP2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
