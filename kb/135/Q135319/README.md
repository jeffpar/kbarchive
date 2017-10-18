---
layout: page
title: "Q135319: DOC: Optimizable Expression Missing Left Parenthesis"
permalink: kb/135/Q135319/
---

## Q135319: DOC: Optimizable Expression Missing Left Parenthesis

	Article: Q135319
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
	
	The first example of a Rushmore Optimizable expression following the Combining
	Complex Expressions table on Page 395 in the Developer's Guide is missing a
	beginning left parenthesis.
	
	The expression currently is:
	
	     FIRSTNAME = 'FRED' AND HIREDATE < {12/30/89}) ;
	         OR (LASTNAME = '' AND HIREDATE > {12/30/88})
	
	The expression should be:
	
	     (FIRSTNAME = 'FRED' AND HIREDATE < {12/30/89}) ;
	         OR (LASTNAME = '' AND HIREDATE >{12/30/88})
	
	Additional query words: 3.00 docerr VFoxWin
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
