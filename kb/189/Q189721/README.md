---
layout: page
title: "Q189721: BUG: ZOOM WINDOW MIN Does Not Minimize User-Defined Window"
permalink: kb/189/Q189721/
---

## Q189721: BUG: ZOOM WINDOW MIN Does Not Minimize User-Defined Window

	Article: Q189721
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-defined window cannot be minimized after it has been defined unless it is
	active.
	
	RESOLUTION
	==========
	
	The resolution is to assign the "name" property to the window and set the
	windowstate property of the window to "1" prior to activating the window. The
	code for the resolution is below. Remove the ampersands (&&) to view the
	correct behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The Help file states the following in the ZOOM WINDOW command:
	
	  A user-defined window can be minimized after it is defined. It doesn't have
	  to be activated before you change its size.
	
	In the example below, the window does not minimize unless the commented code is
	added.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following sample code:
	
	     DEFINE WINDOW WinTest FROM 0,0 TO 40,40 TITLE "Test" ;
	        CLOSE FLOAT SYSTEM ZOOM && NAME xCorrected
	     ZOOM WINDOW WinTest MIN
	     && xCorrected.WINDOWSTATE=1
	     ACTIVATE WINDOW WinTest
	     *-- End of code
	
	REFERENCES
	==========
	
	Visual FoxPro help; search on: "ZOOM WINDOW" (without the quotation marks)
	
	Additional query words: kbVFp300bug kbVFp500bug kbVFp600bug kbXBase kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
