---
layout: page
title: "Q182835: Decimal Type Doesn't Allow Scale for COBOL DISPLAY Types"
permalink: /kb/182/Q182835/
---

## Q182835: Decimal Type Doesn't Allow Scale for COBOL DISPLAY Types

	Article: Q182835
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Automation Type of a parameter for a component library open in
	Component Builder (CB) is declared as Decimal, the Data Description list on the
	COBOL Definition tab of the parameter's Properties only accepts integer values
	for the two USAGE DISPLAY types: PIC S9(n) and PIC 9(n). Other COBOL types, do
	allow digits to the right of the decimal point.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
