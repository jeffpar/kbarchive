---
layout: page
title: "Q157453: PRB: Errors Encountered When Creating Oracle ODBC Datasource"
permalink: /kb/157/Q157453/
---

## Q157453: PRB: Errors Encountered When Creating Oracle ODBC Datasource

	Article: Q157453
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to create an ODBC datasource using the Visigenic Oracle ODBC driver
	may result in the following error message:
	
	  The dynamic-link library Orant71.dll could not be found in the specified path
	  <current path>.
	
	This is followed by the following message:
	
	  The Oracle(tm) client and networking components were not found. These
	  components are supplied by Oracle corporation and are installed when you
	  install the Oracle client software.
	
	NOTE: As of 12/9/98, Visigenic has been acquired by INPRISE, Inc.
	
	CAUSE
	=====
	
	The file Orant71.dll ships with the Oracle client software (SQL*Net) and is not
	provided with Visual FoxPro or any other Microsoft product. Unlike many other
	ODBC drivers, an Oracle ODBC driver requires additional software in order to
	communicate with an Oracle server.
	
	RESOLUTION
	==========
	
	Install the Oracle client software before creating the ODBC datasource.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Oracle client software (SQL*Net) is manufactured by Oracle Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	REFERENCES
	==========
	
	For information on how to contact INPRISE, Inc., please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
