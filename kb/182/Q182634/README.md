---
layout: page
title: "Q182634: JCL Present in COBOL Import File Causes Error"
permalink: /kb/182/Q182634/
---

## Q182634: JCL Present in COBOL Import File Causes Error

	Article: Q182634
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
	
	When using the Component Builder Import COBOL Wizard, the following message is
	displayed:
	
	  Invalid COBOL was found at the beginning of the file. This file may not
	  contain any COBOL.
	
	CAUSE
	=====
	
	Job Control Language (JCL) statements are present in the file that is used by
	the Import COBOL Wizard.
	
	WORKAROUND
	==========
	
	To work around the problem, use a text editor to remove the JCL statements from
	the file that is to be used for the Import COBOL Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
