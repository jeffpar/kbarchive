---
layout: page
title: "Q156061: HOWTO: Use the FoxPro SQLPrepare() Function"
permalink: /kb/156/Q156061/
---

## Q156061: HOWTO: Use the FoxPro SQLPrepare() Function

	Article: Q156061
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses what is required in order to use the FoxPro SQLPrepare()
	function.
	
	MORE INFORMATION
	================
	
	In order to use the FoxPro SQLPrepare() function, the ODBC driver must support
	the ODBC API SQLPrepare() function. In theory, this should include all ODBC
	drivers because SQLPrepare() is a requirement for ODBC API Core conformance.
	However, depending on the ODBC driver and the capabilities of the server,
	SQLPrepare() may not do anything. For example, no preparation of the statement
	takes place, but it is saved to be executed on SQLExecute().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
