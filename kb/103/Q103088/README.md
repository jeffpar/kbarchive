---
layout: page
title: "Q103088: How to Determine If All Elements in an Array Are Empty"
permalink: kb/103/Q103088/
---

## Q103088: How to Determine If All Elements in an Array Are Empty

	Article: Q103088
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine if an entire array is empty, you can use the function shown below.
	
	NOTE: There isn't a FoxPro function written for this purpose. The EMPTY()
	function comes close, but it will not return a correct answer if an array
	element that is not the first element in the array is populated with data.
	
	MORE INFORMATION
	================
	
	The following function will return a logical false if any element in the entire
	array is populated with anything other than .F.:
	
	     FUNCTION aempty
	     PARAMETERS aname
	     FOR pass = 1 to ALEN(aname) STEP 1
	     retval = EMPTY(aname(pass))
	     IF retval
	        LOOP
	     ELSE
	         RETURN retval
	     ENDIF
	     ENDFOR
	
	This function takes a single parameter <arrayname>. The syntax to call this
	function is as follows:
	
	     SET UDFPARMS TO REFERENCE
	     DIMENSION x(10)
	     x(5) = "junk"
	     ? aempty(x)
	
	NOTE: The elements in any array will initially be false (.F.) by default.
	Therefore, any element with a logical value of .F. is considered empty.
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
