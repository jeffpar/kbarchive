---
layout: page
title: "Q178248: Access Violation in SNAPRINT.EXE When Link Outage Occurs"
permalink: kb/178/Q178248/
---

## Q178248: Access Violation in SNAPRINT.EXE When Link Outage Occurs

	Article: Q178248
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Access Violation will occur in Snaprint.exe in the s3pohpst()function when a
	link outage occurs. A Dr. Watson log will be generated when this access
	violation occurs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP1 and
	3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
