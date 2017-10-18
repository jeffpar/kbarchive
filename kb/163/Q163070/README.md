---
layout: page
title: "Q163070: Print Server Stops Printing from an AS400"
permalink: kb/163/Q163070/
---

## Q163070: Print Server Stops Printing from an AS400

	Article: Q163070
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Printing from an AS400 does not print through the SNA Print Server Service after
	the first print job prints. The Print Servers session shows as active even
	though there are no print jobs spooled.
	
	WORKAROUND
	==========
	
	For a successful printer output using the SNA Print Server, you must cycle the
	Print Server session off and on again after each print job prints.
	
	This has been reproduced by sending print jobs from OfficeVision/400 (OV/400).
	
	CAUSE
	=====
	
	The Print Server service was not sending a correct response to a Clear request
	from the AS/400 during print jobs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, version
	3.0. This problem was corrected in the latest SNA Server for Windows NT 3.0 U.S.
	Service Packs. For information on obtaining the Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
