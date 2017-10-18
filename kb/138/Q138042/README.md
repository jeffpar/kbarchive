---
layout: page
title: "Q138042: PRB: MOD() with One Negative Number Returns Incorrect Result"
permalink: kb/138/Q138042/
---

## Q138042: PRB: MOD() with One Negative Number Returns Incorrect Result

	Article: Q138042
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the MOD() function with one negative number and the expected result
	is the numerator, FoxPro returns the wrong value. For example, MOD(9,-10)
	returns -1. The correct result should be 9.
	
	CAUSE
	=====
	
	This occurs because the MOD() function was designed to maintain compatibility
	with the dBASE MOD() function, which also returns this result.
	
	NOTE: dBASE is manufactured by Borland International Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	RESOLUTION
	==========
	
	Create a function similar to the following and use this function instead of
	MOD().
	
	     FUNCTION INTMOD
	     PARAMETER x,y         && where x is the numerator, y is the denominator
	     z = x - INT(x/y)*y
	     RETURN z              && where z is the expected result
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: VFoxWin FoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	
	=============================================================================
	
