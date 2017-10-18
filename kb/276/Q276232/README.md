---
layout: page
title: "Q276232: SNARAS Connections Fail with Events 101 and 201"
permalink: kb/276/Q276232/
---

## Q276232: SNARAS Connections Fail with Events 101 and 201

	Article: Q276232
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to open Remote Access Service (RAS) connections over SNARAS may fail
	with a "TP Not Avail, No Retry" error. The RAS server logs the following events
	when this problem occurs:
	
	Event ID: 60 
	Source: SNA Server
	Description: Failed to invoke APPC TP SNARAS, sense data = X'084C0000'
	
	Event ID: 557
	Source: SNA Server
	Description: DLOAD has timed out
	
	These errors occur after the SNARAS service fails and logs the following events:
	
	Event ID 201:
	Description:  SNARAS - Internal error: File E:\sna40\snaras\win32\srline.c at line 185. 
	
	EVENT ID 101:
	Description:  SNARAS - Bad in use count in correlator. Got 0x3A00000 expected 0x0.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
