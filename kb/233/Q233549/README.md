---
layout: page
title: "Q233549: Inaccurate Sample APPL Statement in Mainframe APPC/LU6.2 Wizard"
permalink: /kb/233/Q233549/
---

## Q233549: Inaccurate Sample APPL Statement in Mainframe APPC/LU6.2 Wizard

	Article: Q233549
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Mainframe APPC/LU6.2 Wizard, a worksheet for independent LU6.2
	for CICS (2 of 2) can be produced that contains, among other things, an example
	of a Virtual Telecommunications Access Method (VTAM) 'APPL' statement for a
	Customer Information Control System (CICS) region on the host. The statement,
	shown below, contains a number of inaccuracies.
	
	  
	
	  VTAM APPL Parameters for CICS:
	
			VBUILD  TYPE=APPL		
	  -->	REMTLU	APPL	AUTH=(ACQ, VPACE, PASS),
				EAS=20
				SONSCIP=YES,
				PARSESS=YES,		
				VPACING=0
	               	MODETAB=MSMODE,   
	          		DLOGMODE=INDMODE,
	
	- The DLOGMODE parameter is not spelled correctly. Change the spelling to
	  "DLOGMOD" or remove the statement. Also remove the appended comma because
	  this is the last statement in the sequence.
	
	  NOTE: DLOGMOD is not required for COMTI.
	
	- No comma is necessary on the last line. If the DLOGMODE line is removed, also
	  remove the comma from the MODETAB line.
	
	- Add commas to the EAS=20 line and the VPACING=0 line.
	
	- There should be no spaces between arguments in the line AUTH=(ACQ, VPACE,
	  PASS).
	
	RESOLUTION
	==========
	
	The following is a suggested statement that is accurate.
	
	  
	
			VBUILD  TYPE=APPL		
	  -->	REMTLU	APPL	AUTH=(ACQ,VPACE,PASS),
				EAS=20,
				SONSCIP=YES,
				PARSESS=YES,		
				VPACING=0,
				MODETAB=MSMODE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, SP2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
