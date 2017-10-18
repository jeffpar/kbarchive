---
layout: page
title: "Q180869: Unable to Start Print Sessions Until Print Service Restarted"
permalink: kb/180/Q180869/
---

## Q180869: Unable to Start Print Sessions Until Print Service Restarted

	Article: Q180869
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Print sessions defined in the SNA Server Print Service may go to an Inactive or
	Pending state requiring the print server be restarted to reactivate the
	sessions. This may occur with both LU1 and LU3 printing. The SNA Server Print
	Server may send a badly formatted Open PLU Response to the SNA Server service
	that the SNA Server will reject.
	
	CAUSE
	=====
	
	An uninitialized field in the SNA Server Print Service could cause the sending
	of a badly formatted OPEN PLU RSP to the SNA Server service, which logs an error
	and rejects it. This causes the print session to fail to activate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
