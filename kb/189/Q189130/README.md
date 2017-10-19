---
layout: page
title: "Q189130: BUG: VERSION(1) Function Returns Different Format in VFP 6"
permalink: /kb/189/Q189130/
---

## Q189130: BUG: VERSION(1) Function Returns Different Format in VFP 6

	Article: Q189130
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0 for Windows, the VERSION(1) function reports the format of
	the FoxPro version number in a different format than earlier versions of the
	product. The VERSION() function using the value of 1 as the optional argument (
	VERSION(1) ), provides information on the Visual FoxPro version, date, time, and
	serial number. The VERSION() function, with no argument returns the version
	number only without the date, time, or serial number.
	
	RESOLUTION
	==========
	
	The new format could pose problems in cases where legacy code parses the value
	returned from the VERSION(1) function. If code needs to run on different
	versions of Visual FoxPro, check the version number and parse the string
	accordingly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro versions 3.0x and 5.0x, the version number of the product
	appears in the following format:
	
	  99.99.99.9999
	
	In Visual FoxPro 6.0, the version number appears in the following format:
	
	  99.99.9999.99
	
	The remainder of the string, which provides date, time, and product ID
	information, remains the same.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In Visual FoxPro 3.0x or 5.0x for Windows and Visual FoxPro 6.0 for Windows type
	the following command:
	
	     ?VERSION(1)
	
	-or-
	
	     ?VERSION()
	
	Note the difference in the format of the Visual FoxPro version number between
	versions 3.0x and 5.0x and Visual FoxPro 6.0.
	
	Additional query words: kbXbase kbVFp600bug kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
