---
layout: page
title: "Q103595: Obtaining Subscript Info for Array Passed by Reference"
permalink: kb/103/Q103595/
---

## Q103595: Obtaining Subscript Info for Array Passed by Reference

	Article: Q103595
	Product(s): Microsoft FoxPro
	Version(s): 2.5x,2.6x,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	- Microsoft FoxPro Library Construction Kit for MS-DOS, versions 2.5x, 2.6x 
	- Microsoft FoxPro Library Construction Kit for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The l_subs member of the Locator structure for arrays passed by reference is not
	set appropriately when the function is invoked. To obtain subscript information
	for an array, call the _ALEN() function using the l_NTI member of the Locator
	structure.
	
	MORE INFORMATION
	================
	
	When using ALEN() with the mode AL_SUBSCRIPT2, a return of 0 means that the
	array is one dimensional. Otherwise, you receive the second dimension of the
	array.
	
	AL_SUBSCRIPT1 returns the first dimension of the array.
	
	AL_ELEMENTS returns the total number of elements in the array.
	
	Additional query words: VFoxWin 3.00 3.00b FoxWin FoxDos 2.50 2.50a 2.50b 2.60 2.60a API arguments l_subs LCK
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxProLibCK250xDOS kbFoxProLibCK260xDOS kbVFP300 kbVFP300b
	Version           : :2.5x,2.6x,3.0,3.0b
	
	=============================================================================
	
