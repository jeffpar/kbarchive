---
layout: page
title: "Q196037: AFTP Server Displays Incorrect Date for Files after 1999"
permalink: kb/196/Q196037/
---

## Q196037: AFTP Server Displays Incorrect Date for Files after 1999

	Article: Q196037
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	AFTP Server displays incorrect date for files after 1999. When executing a
	directory command in AFTP, the date information for any files created in the
	year 2000 or later is displayed incorrectly. For example, a file created on
	01/01/2000 would be displayed with the date 01/01/100.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 3.0
	and SNA Server version 4.0. SNA Server version 4.0 has been corrected in Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
