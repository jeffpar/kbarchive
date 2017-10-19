---
layout: page
title: "Q171933: SNA Server 3.0 Appears to Ignore APPC Mode Priority Setting"
permalink: /kb/171/Q171933/
---

## Q171933: SNA Server 3.0 Appears to Ignore APPC Mode Priority Setting

	Article: Q171933
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run APPC applications which use APPC modes, the applications still seem
	to be handled with the same priority regardless of whether the High Priority
	check box is selected.
	
	CAUSE
	=====
	
	The SNA Server 3.0 Manager program saves the APPC mode parameter incorrectly,
	which causes the High Priority parameter to be ignored by SNA Server.
	
	
	RESOLUTION
	==========
	
	There is no workaround for this problem. A hotfix to SNA Server 3.0 (post SP1)
	is available to correct this problem. The updated module is Snacfg.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
