---
layout: page
title: "Q279260: Asynch ACTIVATE/DEACTIVATE_SESSION May Complete Three Times"
permalink: /kb/279/Q279260/
---

## Q279260: Asynch ACTIVATE/DEACTIVATE_SESSION May Complete Three Times

	Article: Q279260
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbhis2000kbbuglist kbfixlist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Winmgt32.dll file may complete the same asynchronous
	ACTIVATE/DEACTIVATE_SESSION verb three times. This problem occurs if the verb
	completes before the calling thread has exited Winmgt32.dll.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3 (SP3) and Host Integration Server (HIS) 2000.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: winmgmt sna his activate deactive session asynchronous verb appc HIS2000 2000
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbhis2000 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
