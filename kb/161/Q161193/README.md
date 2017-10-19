---
layout: page
title: "Q161193: LU6.2 Session May End Abnormally over Twinax Link"
permalink: /kb/161/Q161193/
---

## Q161193: LU6.2 Session May End Abnormally over Twinax Link

	Article: Q161193
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	APPC transaction programs (TP) running against an AS/400 over a twinax
	connection may fail. When this occurs, the AS/400 unbinds the session reporting
	a sequence number error, UNBIND x'FE' with a sense code of 2001. SNA Server will
	log the following errors when this occurs:
	
	  Event 38: APPC session deactivated abnormally, qualifier = 0003
	  Event 20: Negative Response Received on Connection <value> (SENSE =
	  2001)
	
	CAUSE
	=====
	
	The AS/400 twinax link interface does not reliably support LU6.2 sessions that
	use send or receive pacing greater than one.
	
	RESOLUTION
	==========
	
	To solve this problem, the send and receive pacing window values in the APPC
	mode entry (QPCSUPP or QSERVER) should be set to 1.
	
	NOTE: If twinax connection outages are occurring (causing Event 23 errors for the
	twinax connection), please see the following article in the Microsoft Knowledge
	Base for an unrelated problem:
	
	  Q160980 Event ID 23, Qualifier 11 While Using Andrew or IBM Twinax Link
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words: prodsna andrew ibm
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	
