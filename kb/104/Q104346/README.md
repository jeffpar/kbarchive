---
layout: page
title: "Q104346: Limitations of Accessing General Fields from RQBE"
permalink: kb/104/Q104346/
---

## Q104346: Limitations of Accessing General Fields from RQBE

	Article: Q104346
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Accessing and using general fields with RQBE has a few limitations. Although
	general fields are available through the RQBE interface and for selection
	output, general fields cannot be used to set join conditions. The interface will
	allow it, but when the query is executed, the following error message appears:
	
	  Illegal operation for a general field
	
	If an ORDER BY or GROUP BY clause is issued on a general field, it follows the
	same rules as above, but it gives one of the following error messages when
	executed:
	
	  SQL invalid ORDER BY
	
	  -or-
	
	  SQL invalid GROUP BY
	
	Additional query words: VFoxWin FoxWin 2.50 errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
