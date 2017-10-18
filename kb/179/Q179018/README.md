---
layout: page
title: "Q179018: OPEN SSCP RSP ERROR Returns Err1:000F and Err2:0003"
permalink: kb/179/Q179018/
---

## Q179018: OPEN SSCP RSP ERROR Returns Err1:000F and Err2:0003

	Article: Q179018
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An FMI application may fail with unusual error codes (e.g. Err1:000F and
	Err2:0003) when it receives an OPEN SSCP RSP ERROR response from SNA Server.
	
	CAUSE
	=====
	
	There is a problem in the resource location code inside the DMOD. The SNA Server
	DMOD receives OPEN requests from the application and sends the requests to each
	SNA Server service respectively. For this to occur, the DMOD has to intercept
	OPEN responses from the SNA Server services. The DMOD performs an invalid test
	to determine whether or not an OPEN message is a response. The test does not
	allow for OPEN PLU CONF OK and CONF ERR messages.
	
	The DMOD treats the OPEN PLU CONF OK and CONF ERR messages as if they were OPEN
	error responses. This causes the DMOD to look into its queue of pending open
	requests from the application, and by chance, it finds a match. In turn, the
	DMOD returns the OPEN SSCP RSPERR with unusual error codes like Err1:000F and
	Err2:0003.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 SP1,
	2.11 SP2, 3.0, 3.0 SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
