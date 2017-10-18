---
layout: page
title: "Q190532: Import COBOL Wizard Cannot Select LL, ZZ, TRANCODE (IMS)"
permalink: kb/190/Q190532/
---

## Q190532: Import COBOL Wizard Cannot Select LL, ZZ, TRANCODE (IMS)

	Article: Q190532
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using the Component Builder's Import COBOL Wizard, the user is asked to
	select the IMS-related variables for the LL, ZZ, and TRANCODE fields for
	exclusion from the parameter list. However, the Select control button is not
	enabled.
	
	WORKAROUND
	==========
	
	To work around this problem, skip the steps of the Import COBOL Wizard for
	excluding the LL, ZZ, and TRANCODE fields. Perform all the other steps. After
	the wizard is finished, while still in the Component Builder, go to the
	parameter list created for each IMS method and manually remove the parameters
	specified for these IMS-related variables, the LL, ZZ, and TRANCODE fields.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 included with SNA Server version 4.0
	Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
