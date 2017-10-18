---
layout: page
title: "Q275709: Event 108 When You Cancel CPI-C CMALLC Verb"
permalink: kb/275/Q275709/
---

## Q275709: Event 108 When You Cancel CPI-C CMALLC Verb

	Article: Q275709
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server may log an event 108 every time a Common Programming Interface for
	Communications (CPI-C) CMALLC command is cancelled. Event 108 is an SNA Server
	internal logic error message:
	
	  EventID : 108
	  Source : SNA Server
	  Description : (B45) Message Routing Error
	  Explanation : This is an SNA Server internal logic error.
	
	  SUBCODE INFORMATION:
	  X'0B41' Path error during initialization.
	  X'0B42' Path error after initialization.
	  X'0B45' Error in internal addressing.
	  X'0B47'Illegal internal address.
	
	CAUSE
	=====
	
	SNA Server is not correctly cleaning up the resources when the CMALLC command is
	cancelled by a CPI-C application.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: sp1 sp2 sp3
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
