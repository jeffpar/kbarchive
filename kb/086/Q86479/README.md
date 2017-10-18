---
layout: page
title: "Q86479: INFO: Initializing in a Loop Within a Case Statement"
permalink: kb/086/Q86479/
---

## Q86479: INFO: Initializing in a Loop Within a Case Statement

	Article: Q86479
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbLangCPP kbVC100 kbVC150 kbVC200 kbVC400 kbVC500
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the products listed above, the following errors can occur when you define a
	variable in a loop that is within a case statement. The following error occurs
	when "default" is the next case:
	
	  C2361 Initialization of 'x' is skipped by 'default' label
	
	When default is not next, the following error appears:
	
	  C2360 Initialization of 'x' is skipped by 'case' label
	
	A similar error also occurs when a goto is before the loop:
	
	  C2362 Initialization of 'x' is skipped by 'goto label name'
	
	MORE INFORMATION
	================
	
	In the two samples below, it can be seen that the variable is initialized when
	it is declared. The errors are generated because the scope of the variable, when
	it is defined and initialized, is in the same scope as the case label or the
	goto label. Thus, there is a chance that the initialization will not occur.
	There are ways to ensure that the initialization is performed:
	
	- Enclose the for loop in "{}" (curly braces). This will cause the for loop to
	  be in a different scope than the case and goto labels.
	
	  -or-
	
	- Define the loop variable right before entering the loop. This works only for
	  simple types, not for user-defined types.
	
	  -or-
	
	- Define the variable without initializing it. Any assignments made to that
	  variable after its definition are considered assignments, not
	  initializations.
	
	Sample Code 1
	-------------
	
	  #include <stdio.h>
	
	  /* Compile Options needed: none.
	  */ 
	
	  void main( void )
	  {
	    int var;
	
	    switch( var )
	    {
	      case 1 : for (int i = 0; i < 3; ++i)
	               {
	                  printf("In loop");
	               }
	               break;
	
	      case 2 : printf("Case 2");            // C2360
	               break;
	
	      default : printf("Default");          // C2361
	                break;
	    }
	  }
	
	Sample Code 2
	-------------
	
	  #include <stdio.h>
	
	  /* Compile options needed: none.
	  */ 
	
	  void main (void)
	  {
	     goto label;
	
	     int var = 0;
	
	     label:;                                // C2362
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbLangCPP kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
