---
layout: page
title: "Q233774: Access Violation Using Component Builder's Import COBOL Wizard"
permalink: /kb/233/Q233774/
---

## Q233774: Access Violation Using Component Builder's Import COBOL Wizard

	Article: Q233774
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You receive the following access violations when you use the Import COBOL wizard
	of the COM Transaction Integrator for CICS and IMS (COMTI) Component Builder
	(CB).
	
	  The instruction at "0x6c117061" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	  -and-
	
	  'Unhandled exception in ComponentBuilder.exe (DTCOB390.DLL): 0xC0000005:
	  Access Violation.
	
	CAUSE
	=====
	
	The COBOL program used for processing with the wizard is incomplete. It contains
	statements belonging to the program's WORKING-STORAGE SECTION followed by a
	LINKAGE SECTION statement, an 01 DFHCOMMAREA statement, and finally, a PROCEDURE
	DIVISION statement and PROCEDURE DIVISION contents. However, the WORKING-STORAGE
	SECTION contents are not preceded by a WORKING-STORAGE SECTION statement.
	
	WORKAROUND
	==========
	
	Use the entire COBOL program source with the wizard or use a text editor to
	remove all the COBOL statements contained in the source that are not required
	for defining the COMTI component library. Start the CB, and use the modified
	COBOL source with the wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
