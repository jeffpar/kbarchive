---
layout: page
title: "Q141084: DOCERR: How to Create a Blank DateTime Documented Incorrectly"
permalink: /kb/141/Q141084/
---

## Q141084: DOCERR: How to Create a Blank DateTime Documented Incorrectly

	Article: Q141084
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 32 of the "Developers Guide" states "To assign blank DateTime values, use
	braces with a colon." Based on the documentation, the following uses should
	generate blank datetime values, but they do not.
	
	Method One
	----------
	
	  tBlankDate1 = {:}
	  tBlankDate1 = { }  &&blank space between brackets
	
	-or-
	
	  STORE {:} TO tBlankDate1
	  STORE { } TO tBlankDate1
	
	The result is "12/30/1899 12:00:00 AM" -- Not a blank DateTime.
	
	Method Two
	----------
	
	  tBlankDate1 = {}   && no blank spaces between brackets
	  tBlankDate1 = {/}
	
	-or-
	
	  STORE {} TO tBlankDate1
	  STORE {/} TO tBlankDate1
	
	The result is " / / " -- A blank date, but time is not showing.
	
	MORE INFORMATION
	================
	
	To get a blank DateTime value use either of the following:
	
	  tBlankDate1 = {/:}
	  tBlankDate1 = {//:}
	
	-or-
	
	  STORE {/:} TO tBlankDate1
	  STORE {//:} TO tBlankDate1
	
	The result is " / / : : AM"
	
	The incorrect references to assign a blank DateTime value are:
	
	- The Developers Guide refers to using {:} for assigning a blank DateTime.
	
	- The Help file refers to using {},{/},{ } for assigning a blank DateTime.
	
	These references have been corrected in the Visual FoxPro 3.0b Help.
	
	Additional query words: VFoxWin blank date time datetime
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
