---
layout: page
title: "Q235657: Form Feed at End of LU3 Print Job Causes Blank Pages"
permalink: kb/235/Q235657/
---

## Q235657: Form Feed at End of LU3 Print Job Causes Blank Pages

	Article: Q235657
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A blank page is ejected by the printer following some LU3 print jobs.
	
	CAUSE
	=====
	
	In a print job ending with 0C 0D 19, or 0C 19, the form feed character (0x0C) is
	processed by SNA Print Server because it is not the last character in the data
	stream.
	
	NOTE:
	
	  0C = form feed (FF)
	  0D = carriage return (CR)
	  19 = end of medium/end of message (EM)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	You can work around this situation by using a PDT file, as described in the
	following Microsoft Knowledge Base article:
	
	  Q172799 Extra Form Feed Printed With LU3 Print Job
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2. This problem was first
	corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	SNA Print Server is designed to ignore a form feed character if it is the last
	character in a print job. The fix allows SNA Print Service to suppress a form
	feed character until additional printable data is received.
	
	Additional query words: snaprintservice; formfeed
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
