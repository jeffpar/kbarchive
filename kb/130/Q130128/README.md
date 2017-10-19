---
layout: page
title: "Q130128: PRB: MOD Function w/ Negative Number May Give Different Answer"
permalink: /kb/130/Q130128/
---

## Q130128: PRB: MOD Function w/ Negative Number May Give Different Answer

	Article: Q130128
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If negative numbers are used with the MOD function, it is possible that the
	answer returned will be different from the answer given by other applications
	that also incorporate a MOD function.
	
	CAUSE
	=====
	
	The correct definition of MOD is as follows:
	
	     x MOD y = z where z + y * int(x/y) = x
	     z = x - y * int(x/y)
	
	Therefore:
	
	     x MOD y = x - y * int(x/y)
	
	In the Microsoft MOD function, we do the same as above except we use the FLOOR()
	function instead of INT() in order to be backward compatible with other products
	that use the FLOOR() function.
	
	
	RESOLUTION
	==========
	
	Below are two functions. The first function (FLOORMOD) implements the MOD with a
	FLOOR() function, and the second function (INTMOD) implements the MOD with an
	INT() function. Sometimes you may want to use the INTMOD function.
	
	     **** MOD with FLOOR() ****
	     FUNCTION FLOORMOD
	        PARAMETER x,y
	        z = x - FLOOR(x/y)*y
	     RETURN z
	     **************************
	
	     **** MOD with INT() ******
	     FUNCTION INTMOD
	        PARAMETER x,y
	        z = x - INT(x/y)*y
	     RETURN z
	     **************************
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
