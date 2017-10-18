---
layout: page
title: "Q149966: BUG: istream::operator&gt;&gt;(long&amp;) Does Not Clear errno"
permalink: kb/149/Q149966/
---

## Q149966: BUG: istream::operator&gt;&gt;(long&amp;) Does Not Clear errno

	Article: Q149966
	Product(s): Microsoft C Compiler
	Version(s): 1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC152 kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kb
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an error occurs when extracting long values from the stream, the error cannot
	be cleared and other streams also report errors.
	
	CAUSE
	=====
	
	When the istream::operator>>(long& n) encounters an error, it sets
	ios::failbit, but does not clear errno. This causes the stream to continue to
	fail even after ios::clear is called. It also causes other streams to fail.
	
	RESOLUTION
	==========
	
	To work around the bug, set errno to zero in addition to completing normal
	stream error checking.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /*
	  The following sample code demonstrates only the bug and workaround, not
	  normal error checking.
	
	  Compile options needed: none
	  */ 
	
	  #include    <iostream.h>
	  #include    <strstrea.h>
	  #include    <stdio.h>
	  #include    <stdlib.h>
	  #include    <string.h>
	  #define     MAX_STRING_LEN      100
	  //#define     CLEAR_ERRNO    // uncomment to work around bug
	
	  void main()
	  {
	      char    dc1a, dc1b, dc2a, dc2b;
	      long    input1a=0, input1b=0;
	      long    input2a=0, input2b=0;
	      char    szTest1[MAX_STRING_LEN];
	      char    szTest2[MAX_STRING_LEN];
	
	      strcpy(szTest1,"a2147483648z50"); // 
	      strcpy(szTest2,"a500z50");
	
	      istrstream    StrStream1(szTest1); //String stream 1
	      istrstream    StrStream2(szTest2); //String stream 2
	
	      //    The following command will fail since value input to
	      //    input1a=2147483648 is
	      //    bigger that maximum value long can hold.
	
	      StrStream1 >> dc1a >> input1a >> dc1b >> input1b;
	  #ifdef    CLEAR_ERRNO
	      errno = 0;
	  #endif
	      StrStream2 >> dc2a >> input2a >> dc2b >> input2b;
	
	      cout << "\n    dc1a: " << dc1a
	           << "\n input1a: " << input1a
	           << "\n    dc1b: " << dc1b
	           << "\n input1b: " << input1b << endl;
	
	      cout << "\n    dc2a: " << dc2a
	           << "\n input2a: " << input2a
	           << "\n    dc2b: " << dc2b
	           << "\n input2b: " << input2b << endl;
	
	      cout << "\n\nPress any key to continue..." << endl;
	      dc1a = getchar();
	  }
	
	  /*
	  The output is:
	      dc1a: a
	   input1a: 2147483647
	      dc1b:
	   input1b: 0
	
	      dc2a: a
	   input2a: 500
	      dc2b:
	   input2b: 0
	
	  If CLEAR_ERRNO is set, the output is as expected:
	      dc1a: a
	   input1a: 2147483647
	      dc1b:
	   input1b: 0
	
	      dc2a: a
	   input2a: 500
	      dc2b: z
	   input2b: 50
	  */ 
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC152 kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
