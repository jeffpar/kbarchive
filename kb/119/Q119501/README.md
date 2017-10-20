---
layout: page
title: "Q119501: PRB: Error CXX0017 or CXX0034 for typedef"
permalink: /kb/119/Q119501/
---

## Q119501: PRB: Error CXX0017 or CXX0034 for typedef

{% raw %}

	Article: Q119501
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Declare a structure type and typedef a pointer to the structure type as
	follows:
	
	     struct MYSTRUCT {
	        int x;
	        int y;
	     };
	
	     typedef struct MYSTRUCT* PMYSTRUCT;
	
	MYSTRUCT is a structure type and PMYSTRUCT is a typedef for a pointer to
	MYSTRUCT. Declare and initialize the following variables:
	
	     struct MYSTRUCT var1 = {0, 0};
	     PMYSTRUCT var2 = &var1;
	
	Putting a watch on "(PMYSTRUCT) &var2" produces the following error:
	
	Visual C++ 1.0 and 4.0
	----------------------
	
	  CXX0017: Error: symbol 'PMYSTRUCT' not found
	
	Visual C++ 2.x
	--------------
	
	  CXX0034: Error: types incompatable with operator
	
	However, putting a watch on "(MYSTRUCT *) &var2" is successful.
	
	CAUSE
	=====
	
	The typedef declares a new name for a type, but it does not define a new type.
	The typecast attempted in the debugger requires the name of a defined type.
	
	RESOLUTION
	==========
	
	Use the defined type in the typecast, rather than using the name declared with
	the typedef.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
