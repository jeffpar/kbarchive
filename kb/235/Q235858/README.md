---
layout: page
title: "Q235858: A CPI-C Application May Hang When Internal Tracing Is Enabled"
permalink: kb/235/Q235858/
---

## Q235858: A CPI-C Application May Hang When Internal Tracing Is Enabled

	Article: Q235858
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If client internal tracing is enabled using the SNA Server trace facility, a
	CPI-C application may stop responding (hang). This only happens if asynchronous
	verb completion is used in the application.
	
	CAUSE
	=====
	
	A CPI-C verb is traced after the asynchronous completion of the verb is
	signaled. In this situation, the application has legitimately freed the data
	buffer, which is still traced.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words: cpic
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
