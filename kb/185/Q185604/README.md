---
layout: page
title: "Q185604: Windows 3.x Client Returns One Local APPC LU Using Display Verb"
permalink: kb/185/Q185604/
---

## Q185604: Windows 3.x Client Returns One Local APPC LU Using Display Verb

	Article: Q185604
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an SNA Server subdomain that contains multiple SNA Server computers, a 16-bit
	APPC application that uses the DISPLAY function to retrieve the list of APPC LUs
	may not get a complete list of all the available APPC LUs in the subdomain. The
	APPC application shows only the available APPC LUs from one of the SNA Server
	computers in the subdomain. If there is only one SNA Server in the subdomain,
	the DISPLAY function appears to function correctly.
	
	Although this was reported when using the 16-bit ODBC Driver for DB/2 included
	with SNA Server, other 16-bit APPC applications that use the DISPLAY function to
	retrieve the list of available APPC LUs may also experience the problem.
	
	CAUSE
	=====
	
	The APPC application must issue the DISPLAY function once for every SNA Server
	computer in the subdomain to retrieve all of the available APPC's LUs. The
	problem occurs because the 16-bit DMOD always sends the DISPLAY function request
	to the same SNA Server computer. This occurs because the 16-bit DMOD ignores the
	SNA Server name that the application specified in the DISPLAY function.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. We are researching this problem in versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3 and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
