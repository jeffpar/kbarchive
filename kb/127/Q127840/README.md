---
layout: page
title: "Q127840: Info Provided by the Version() Function in Visual FoxPro"
permalink: /kb/127/Q127840/
---

## Q127840: Info Provided by the Version() Function in Visual FoxPro

	Article: Q127840
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Version() function in Visual FoxPro has a few new features that provide more
	product information than did previous versions of FoxPro. Depending on the
	positive non-zero integer you pass to the Version() function, you will receive
	different and sometimes more detailed information.
	
	Parameter    What is returned
	----------------------------------------------
	1            Returns version and serial number
	2            Returns version type:
	              0 = Runtime version
	              1 = Standard version
	              2 = Professional version
	3            Returns the country of origin
	             00 = American/English
	             33 = French
	             34 = Spanish
	             49 = German and so on...
	
	NOTE: If you pass a numeric parameter other than 1, 2, or 3, the function returns
	an 'Invalid function argument value, type, or count' error message.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
