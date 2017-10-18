---
layout: page
title: "Q233852: Import COBOL Wizard Inappropriately Flags COBOL Syntax Error"
permalink: kb/233/Q233852/
---

## Q233852: Import COBOL Wizard Inappropriately Flags COBOL Syntax Error

	Article: Q233852
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
	
	The following error message is displayed by the Import COBOL Wizard feature of
	COM Transaction Integrator for CICS and IMS:
	
	  Invalid COBOL syntax was found at the beginning of the file. This file may
	  not contain any COBOL.
	
	CAUSE
	=====
	
	In this case, the COBOL source code contains a COBOL 'DATA DIVISION.' statement
	that is preceeded by a row of asterisks with the first asterisk being in column
	7, as shown below:
	
	     *****************************************************************
	
	The line of asterisks beginning in column 7 is a legal COBOL statement. (Whenever
	an asterisk is placed in column 7, the COBOL compiler treats the line as a
	comment.)
	
	WORKAROUND
	==========
	
	Edit the COBOL source code to remove the line of asterisks. Then rerun the
	Import COBOL Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
