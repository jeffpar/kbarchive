---
layout: page
title: "Q239858: Sample PU Statement in Worksheet Produced by Mainframe APPC/LU6."
permalink: /kb/239/Q239858/
---

## Q239858: Sample PU Statement in Worksheet Produced by Mainframe APPC/LU6.

	Article: Q239858
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample mainframe physical unit (PU) definition contained in worksheet 1 of 2
	produced by the Mainframe APPC/LU6.2 Wizard includes the following parameter:
	
	  CONNTYPE=APPN
	
	with the following comment:
	
	  needed for parallel sessions
	
	Most of the time, it is not necessary to code this line. Moreover, coding it can
	cause additional problems. The recommendation is to NOT code this line unless it
	is specifically required after consultation with the mainframe communication
	system (VTAM) programmer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI400SP2 kbSNAServ400SP2
	Version           : WINDOWS:1.0,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
