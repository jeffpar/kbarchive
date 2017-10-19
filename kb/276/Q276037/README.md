---
layout: page
title: "Q276037: SNA Server Access Violation After Logging Event 3"
permalink: /kb/276/Q276037/
---

## Q276037: SNA Server Access Violation After Logging Event 3

	Article: Q276037
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In SNA Server, an Access Violation (AV) occurs after logging Event 3. If this
	problem occurs, the SNA Server service terminates unexpectedly. The following
	events may be logged in the application event log at the time of the failure:
	
	  Event ID: 3
	  Source: SNA Server
	  Description: (1106) Node Configuration Error
	
	  NOTE: Subcode X'1106' indicates that the configuration file (Com.cfg) is
	  corrupted.
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file [path]\snadump.log for snaserver.exe
	
	If Drwtsn32.exe is configured as the default debugger on the SNA Server system,
	the Drwtsn32.log will be updated with the Access Violation information for
	Snaservr.exe.
	
	In the reported instance of this problem, the SNA Server was also logging the
	following event prior to the Access Violation:
	
	  Event ID: 22
	  Source: SNA Server
	  Description: APPC session activation failure: BIND negotiated parameters
	  unacceptable
	
	CAUSE
	=====
	
	Under certain circumstances, the SNA Server service (node) can delete an
	Advanced Program-to-Program Communications (APPC) mode record and its associated
	mode data record from its internal configuration structures even when the mode
	data record is still being used by another mode record. This causes the
	configuration to become corrupt, which will lead to the problem described here.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	Service Packs), 4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: Drwtsn32
	
	======================================================================
	Keywords          : kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
