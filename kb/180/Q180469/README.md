---
layout: page
title: "Q180469: Print Server Access Violation When Starting First Session"
permalink: kb/180/Q180469/
---

## Q180469: Print Server Access Violation When Starting First Session

	Article: Q180469
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to start a session using SNA Server Print service, an access
	violation may occur when the first print session is started. The following
	symptoms occur when this problem happens:
	
	- An Event 624 will be logged, indicating that the SNA Print service has ended
	  abnormally.
	
	- An entry may be created in the &lt;ntroot&gt;\drwtsn32.log file,
	  indicating an access violation (0xC0000005) in snaprint.exe.
	
	CAUSE
	=====
	
	In a rare timing condition, an uninitialized variable causes the SNA Print
	service to access an invalid memory location when the first print session is
	started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
