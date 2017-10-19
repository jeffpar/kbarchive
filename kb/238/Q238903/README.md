---
layout: page
title: "Q238903: COBOL Wizard Specifies Variable as the Return Value"
permalink: /kb/238/Q238903/
---

## Q238903: COBOL Wizard Specifies Variable as the Return Value

	Article: Q238903
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COM Transaction Integrator for CICS and IMS (COMTI) Component Builder is
	used to create a new component library by importing a COBOL program using the
	Import COBOL Wizard. After completion, the variable selected to be the return
	value appears, as an [output] parameter.
	
	CAUSE
	=====
	
	The means of producing this error is fairly complex. At the point where the
	wizard asks you to click Finish the operation, instead follow these steps:
	
	1. Click Back
	
	2. Click Back again.
	
	3. Click Next.
	
	4. Click Finish.
	
	WORKAROUND
	==========
	
	One workaround is to redo the Import COBOL Wizard operation, avoiding the
	sequence specified under the CAUSE section.
	
	A second workaround is to manually correct the component's declarations using
	Component Builder.
	
	1. Right-click the method in the left pane and click Unlock.
	
	2. In the right pane, select and delete the inconsistent parameter.
	
	3. Right-click the method in the left pane and click Properties
	
	4. Specify the correct return value using the Properties dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2 and Microsoft SNA Server version 4.0 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
