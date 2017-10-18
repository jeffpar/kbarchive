---
layout: page
title: "Q172471: Request Definite Response Doesn't Signal When Job Sent"
permalink: kb/172/Q172471/
---

## Q172471: Request Definite Response Doesn't Signal When Job Sent

	Article: Q172471
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Monitor Job, Request Definite Response option is selected in a printer
	session's property page, the definite response message is sent to the host when
	the print job has handed it to the Windows NT spooler. This is not the expected
	behavior. Instead, the definite response message should be sent when Windows NT
	has been notified by the physical printer that the job has completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
