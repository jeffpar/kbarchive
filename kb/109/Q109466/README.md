---
layout: page
title: "Q109466: PC Gen: PODIAG.EXE Creates INI Directory on 2.1 &amp; 3.0 POs"
permalink: /kb/109/Q109466/
---

## Q109466: PC Gen: PODIAG.EXE Creates INI Directory on 2.1 &amp; 3.0 POs

	Article: Q109466
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks Postoffice Diagnostic Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) version 3.2
	creates an INI subdirectory in a Microsoft Mail version 2.1 or 3.0 postoffice
	database. PODIAG will create the INI subdirectory, if it does not exist, because
	it stores the PODIAG.INI file in the M:\MAILDATA\INI subdirectory. This is by
	design.
	
	MORE INFORMATION
	================
	
	The INI subdirectory was an additional feature added in version 3.2 postoffices
	and did not exist in the version 2.1 and 3.0 databases.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPCNPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
