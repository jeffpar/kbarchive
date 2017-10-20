---
layout: page
title: "Q103585: How API Function Array Arguments Are Passed"
permalink: /kb/103/Q103585/
---

## Q103585: How API Function Array Arguments Are Passed

{% raw %}

	Article: Q103585
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0; :2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro Library Construction Kit for MS-DOS, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Individual array elements are always passed to application programming interface
	(API) functions by value. When SET("UDFPARMS") == "VALUE" and no element is
	specified, the array name by itself refers to just the first element of the
	array (unless the array name is prefixed with "@", in which case the array is
	passed by reference).
	
	Additional query words: VFoxWin FoxDos FoxWin API array arguments LCK
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxProLibCK250DOS kbVFP300
	Version           : MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0; :2.0,2.5
	
	=============================================================================
	

{% endraw %}
