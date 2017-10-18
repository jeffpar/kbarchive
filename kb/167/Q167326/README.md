---
layout: page
title: "Q167326: FIX: Intrinsic Version of strcmp May Return Incorrect Result"
permalink: kb/167/Q167326/
---

## Q167326: FIX: Intrinsic Version of strcmp May Return Incorrect Result

	Article: Q167326
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Explicitly referencing the Null character in the second argument of strcmp
	causes the intrinsic version of strcmp to incorrectly report the two arguments
	are not equal. Please see the sample code below.
	
	RESOLUTION
	==========
	
	Use one of the following two workarounds:
	
	- Do not explicitly reference the Null character.
	
	- Do not use the intrinsic version of strcmp.
	
	Please see the "MORE INFORMATION" section and sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	You can enable intrinsic functions either by using of the /Oi compiler switch or
	#pragma intrinsic. To disable intrinsic functions, remove the /Oi compiler
	switch, add /Oi-, or use #pragma function to force a function call on a function
	by function basis. Please see the sample code below for use of the #pragma
	function.
	
	Sample Code
	-----------
	
	     /* Build Options: /Oi */ 
	     #include <stdio.h>
	     #include <string.h>
	     // uncomment the following line for workaround #2
	     //#pragma function(strcmp)
	
	     int main(void)
	     {
	        char somestr [15]  = "Some String";
	
	        somestr[1] = 0;
	
	     // change the following to strcmp(somestr,"S") for workaround #1
	        if (strcmp(somestr,"S\0") == 0)
	           printf("match: correct\n");
	        else
	           printf("no match: incorrect\n");
	        return 0;
	     }
	
	Note that a more common use of an embedded Null character may be to compare a
	string to "\0" to see if it is an empty string. For the first workaround above,
	compare it to "" instead.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
