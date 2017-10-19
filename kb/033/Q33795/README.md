---
layout: page
title: "Q33795: INFO: Consecutive Calls to ctime() Overwrite Previous Values"
permalink: /kb/033/Q33795/
---

## Q33795: INFO: Consecutive Calls to ctime() Overwrite Previous Values

	Article: Q33795
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Subsequent calls to the ctime() function overwrite the results of a previous
	call. The code example below demonstrates this behavior by printing the same
	time for the start time and finish time in its first printf() call. However, the
	start and finish times should be different. To correct this situation, do not
	call ctime twice in one call to printf. Then the finish time is later than the
	start time, as expected.
	
	This is expected behavior. The ctime() function uses one static buffer to store
	its results. Therefore, when the second ctime() call is made in the printf
	function, ctime() overwrites the value returned by the first ctime() call.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: None
	   */ 
	
	  #include <stdio.h>
	  #include <time.h>
	
	  time_t start, finish=0;
	
	  void main(void)
	  {
	
	    //loop until 3 seconds pass
	    for (time(&start); finish-start < 3; time(&finish))
	    ;
	
	    /* If the following statement is used, the start and finish
	       display times do not differ, both parameters get a copy of
	       the same buffer which is overwritten twice before entering
	       printf: */ 
	
	    printf("Start time was %s and ending time was %s", ctime(&start),
	       ctime(&finish));
	
	    /* If the following statements are used instead, the start and
	       finish times are different, as expected: */ 
	
	       printf("Start time was %s", ctime(&start));
	       printf("and ending time was %s\n", ctime(&finish));
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
