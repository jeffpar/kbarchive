---
layout: page
title: "Q171627: Incorrect Data Printed When PDF File Used with AS/400 Printing"
permalink: kb/171/Q171627/
---

## Q171627: Incorrect Data Printed When PDF File Used with AS/400 Printing

	Article: Q171627
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, the SNA Server print server may print incorrect
	data for an AS/400 print job.
	
	CAUSE
	=====
	
	When the SNA Server Virtual print engine is called from the 5250 Print provider
	DLL with a zero-length string, it writes to the printer the contents of a random
	piece of memory, of random length, instead of skipping the write command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The above mentioned behavior only appears when certain combinations of SCS codes
	are received in a row, for example, two Form Feed controls, two Line Feed
	controls, or a Form Feed and a Line Feed control and a PDF File is being used.
	
	
	Additional query words: printservice appc
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
