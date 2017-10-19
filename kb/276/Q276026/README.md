---
layout: page
title: "Q276026: SNA Print Server May Insert Extra Form Feed"
permalink: /kb/276/Q276026/
---

## Q276026: SNA Print Server May Insert Extra Form Feed

	Article: Q276026
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print jobs that print properly with earlier versions of SNA Server may produce
	an extra form feed after you install SNA Server 4.0 Service Pack 3 (SP3).
	
	CAUSE
	=====
	
	This problem was introduced in SNA Server SP3 because of a change that was made
	in the way SNA Server handles rows and columns during Advanced
	Program-to-Program Communications (APPC) printing.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3 (SP3).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
