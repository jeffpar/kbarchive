---
layout: page
title: "Q276230: SNA Server Incorrectly Formats the First Line of Page"
permalink: kb/276/Q276230/
---

## Q276230: SNA Server Incorrectly Formats the First Line of Page

	Article: Q276230
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server's host print service may cause spaces to be printed in the wrong
	order if the host print job contains data in the following sequence:
	
	  
	
	  0C400D<printable data>
	
	  Where:
	  X'0C' - Form Feed
	  X'40' - Space
	  X'0D' - Carriage Return
	  <printable data> - Any valid printable data
	
	Instead of printing the data in the correct order, the carriage return is
	executed first, and then the space codes. As a result, the top line is formatted
	incorrectly.
	
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
	
	Additional query words: Winvprt sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
