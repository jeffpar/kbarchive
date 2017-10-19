---
layout: page
title: "Q247494: BUG: Transform() Results Formatted Incorrectly"
permalink: /kb/247/Q247494/
---

## Q247494: BUG: Transform() Results Formatted Incorrectly

	Article: Q247494
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might see that the results of the TRANSFORM() function appear off by
	approximately .0000000000001. This behavior may occur when COMPATIBLE is OFF.
	However, when COMPATIBLE is ON, the expected behavior is observed.
	
	RESOLUTION
	==========
	
	Workaround
	----------
	
	Here are three ways to work around this behavior:
	
	- Use this code:
	
	  SET COMPATIBLE ON
	
	  -or-
	
	- Use this code:
	
	  ALLTRIM(STR(<nExpr>, <nLength>, <nDecimalPlaces>))
	
	  -or-
	
	- Use this code:
	
	  SET DECIMALS TO <nDecimalPlaces>
	  SET FIXED ON
	
	NOTE: Setting the nDecimalPlaces to >= 15 for any work around results in an
	overflow error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The TRANSFORM function was modified to allow the developer to issue
	Transform(<nExpr>) without a format or picture clause. The result is
	similar to ALLTRIM(STR(<nExpr>, <nLength>,
	<nDecimalPlaces>)).
	
	How to Reproduce the Behavior
	-----------------------------
	
	Enter the following code in a program and run the program:
	
	  CLEAR
	  cCompatible = SET("COMPATIBLE")
	  SET COMPATIBLE OFF
	  ? "Precision automatically jumps to 15 decimal places "
	  ? "with overflows displayed at 1.6"
	
	  FOR i = 1 TO 3 STEP .1
	  	? TRANSFORM(i)
	  ENDFOR
	  SET COMPATIBLE &cCompatible
	
	The values should begin to miscalculate around the number 1.6.
	
	Additional query words: TRANSFORM, ALLTRIM, STR, BUG,PRECISION,OVERFLOW
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
