---
layout: page
title: "Q249970: Print Server May Send CR and LF in Wrong Order"
permalink: kb/249/Q249970/
---

## Q249970: Print Server May Send CR and LF in Wrong Order

	Article: Q249970
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a host print job sends a line of print data with a Carriage Return (CR) and
	Line Feed (LF), print server may swap these control characters such that the
	printer receives the LF followed by the CR.
	
	Under normal circumstances, this does not cause any problems with the actual
	print output. However, if the print job is sent to an application (instead of a
	printer) that parses the data, problems could occur if the application expects
	to receive the CR and LF in a specific order.
	
	CAUSE
	=====
	
	The SNA Server print service swaps the order of a CR and LF if the print data
	caused the specified Maximum Print Position (MPP) to be reached before the CR
	and LF commands are received.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
