---
layout: page
title: "Q135516: DOC: DBSETPROP Example Contains Extra Zero"
permalink: kb/135/Q135516/
---

## Q135516: DOC: DBSETPROP Example Contains Extra Zero

	Article: Q135516
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 216 in the Developer's Guide contains a code example to create a maxordamt
	field with a default value of 1000. However, the DBSETPROP command uses the
	value of 10,000 instead of 1000.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	To create a maxordamt field with a default value of 1000, use the following code
	instead of the example code on Page 216 in the Developer's Guide:
	
	     OPEN DATABASE testdata
	     USE VIEW customer_view
	     ?DBSETPROP ('Customer_view.maxordamt', 'Field1', 'DefaultValue', 1000)
	
	Additional query words: 3.00 docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
