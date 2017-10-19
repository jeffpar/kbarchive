---
layout: page
title: "Q181100: Print Server Incorrectly Handles DBCS Codes in SCS Datastream"
permalink: /kb/181/Q181100/
---

## Q181100: Print Server Incorrectly Handles DBCS Codes in SCS Datastream

	Article: Q181100
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SCS data streams that contain DBCS (Double Byte Character Set) codes may print
	incorrectly.
	
	CAUSE
	=====
	
	When the last byte in a segment is a DBCS high byte and the first byte in the
	next segment is a DBCS Low byte, the Print Server translates the pair of DBCS
	bytes into two SBCS bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0SP1,
	3.0SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
