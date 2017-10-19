---
layout: page
title: "Q275908: COMTI: Need to Define a Decimal Data Type w/ More Than 18 Digits"
permalink: /kb/275/Q275908/
---

## Q275908: COMTI: Need to Define a Decimal Data Type w/ More Than 18 Digits

	Article: Q275908
	Product(s): Microsoft SNA Server
	Version(s): 1.0,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COM Transaction Integrator (COMTI) Component Builder lets the user describe
	parameters to methods. If you add a parameter of type Decimal, the Component
	Builder limits the "COBOL Data Type" value of the Decimal parameter to a maximum
	of 18 digits. However, if a host application is written in a programming
	language other than COBOL, a decimal parameter that is passed to Customer
	Information Control System (CICS) may require more than 18 digits.
	
	If you right-click the parameter in Component Builder to bring up the Parameter
	Properties dialog box, and then click the COBOL Definition tab, you see two spin
	boxes that allow you to specify the number of digits to the left and right of
	the parameter's decimal point. The sum of the left and right values default to a
	maximum of 18. If you try to add numbers with a sum greater than 18, you receive
	a "DTCOB390" error message.
	
	CAUSE
	=====
	
	Component Builder limits all Decimal datatypes to a maximum of 18 digits to
	comply with COBOL specifications.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	When you are converting data to and from Windows Automation datatypes, COMTI
	Component Builder uses the idiom of COBOL to represent the equivalent mainframe
	datatypes. COBOL datatypes COMP, COMP-3, and DISPLAY are limited to 18 digits.
	This is in accordance with COBOL specifications. However the mainframe hardware
	is capable of storing up to 29 digits in a BCD number. Some mainframe languages
	exploit this capability to let applications use packed decimals up to 29 digits
	long.
	
	When you are using COMTI with a host application that is written in COBOL, a
	decimal parameter should never be more than 18 digits long. However, if the host
	application is written in a language that supports longer packed decimal types,
	the hotfix allows the longer length to be defined. A decimal datatype cannot
	exceed 29 digits; this would exceed the size of packed decimal that s370
	architecture can handle.
	
	
	Additional query words: Convertprim Dtcob390 Ibmcobol
	
	======================================================================
	Keywords          : kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :1.0,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
