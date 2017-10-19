---
layout: page
title: "Q169909: Tabs Are Not Processed Correctly by Pdfcomp.exe"
permalink: /kb/169/Q169909/
---

## Q169909: Tabs Are Not Processed Correctly by Pdfcomp.exe

	Article: Q169909
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
	
	Pdfcomp.exe is the SNA Server utility that is used to compile PDF files into PDT
	files for use with SNA Server Print Service. If the PDF file contains tabs, the
	entire line is ignored. For instance, the following will cause the entire line
	to be ignored:
	
	     SBP<Tab>              EQU 1B 28 73 31 42   /* start bold printing
	        */ 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
