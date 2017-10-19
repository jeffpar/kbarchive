---
layout: page
title: "Q276260: User Record Is Not Updated If Remote LU Alias Is Removed"
permalink: /kb/276/Q276260/
---

## Q276260: User Record Is Not Updated If Remote LU Alias Is Removed

	Article: Q276260
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Remote Advanced Program-to-Program Communications (APPC) Logical Unit
	(LU), which was previously assigned to a particular user, is deleted, the user
	record is not updated.
	
	When you select the user, the Remote APPC LU is still assigned, even if it does
	not exist anymore.
	
	CAUSE
	=====
	
	When a Remote APPC LU is deleted, the security record assigned to this user is
	not updated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	(all Service Packs).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: snacfg Manager user RLU sp1 sp2 sp3
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
