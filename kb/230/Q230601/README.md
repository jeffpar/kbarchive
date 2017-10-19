---
layout: page
title: "Q230601: CB Incorrectly Maps COBOL Data Types for Unsigned Display"
permalink: /kb/230/Q230601/
---

## Q230601: CB Incorrectly Maps COBOL Data Types for Unsigned Display

	Article: Q230601
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Method parameters defined using automation types of Integer, Long, Single,
	Double, Currency, or Decimal are incorrectly mapped to COBOL data type of type
	PIC 9(n) LEADING SEPARATE DISPLAY (or PIC 9(n)V9(n)LEADING SEPARATE DISPLAY) in
	Component Builder (CB) when you build new COM Transaction Integrator (COMTI)
	components.
	
	The first indication this problem exists may be a run time error. The first
	indication of the possibility of this problem is a run time error. The following
	error message is posted to the Windows NT application event log:
	
	  Event ID: 102
	  Source: COMTI
	  Type: Error
	  Category: General
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	
	  Component: <COMTI Component Name>
	  Method: <COMTI Method name>
	
	  Exception description:
	  (1562) Parameter <PARAMETER NAME> in method <METHODNAME> contained
	  an invalid zoned decimal value. Check the mainframe server program. If it is
	  correct, verify that the correct COM Transaction Integrator-created component
	  library is deployed.
	
	  EXPLANATION
	  An Automation exception representing an error condition was returned to a COM
	  Transaction Integrator client. The description shown above contains more
	  information about the exception that was reported.
	
	Because this error message may accurately indicate a problem of the application
	code, a further step is necessary to demonstrate a COMTI problem exists instead.
	Export COBOL from the COMTI component library. You can see the variables in
	question defined with the "LEADING SEPARATE DISPLAY" attribute.
	
	CAUSE
	=====
	
	COMTI is not handling the conversion properly for unsigned DISPLAY.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0SP2. This problem was first corrected in SNA Server version 4.0 Service Pack
	3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400SP2 kbComSearch
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
