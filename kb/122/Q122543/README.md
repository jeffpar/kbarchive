---
layout: page
title: "Q122543: BUG: Incorrect Code When Increment Pointer Based on a Pointer"
permalink: /kb/122/Q122543/
---

## Q122543: BUG: Incorrect Code When Increment Pointer Based on a Pointer

{% raw %}

	Article: Q122543
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbVC500bug
	Last Modified: 17-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect code is generated when an assignment is made in the same statement
	where a pointer based on a pointer is incremented.
	
	For example, executing the following code:
	
	     char buf[100];
	     void *pvbuf=buf;
	     unsigned int _based(pvbuf) *Test;
	
	     *(char _based(pvbuf) *)(((char *)Test)++) = '6'
	
	in a Win32-based application causes an application error; executing the same code
	in a 16-bit Windows-based application causes this error:
	
	  run-time error R6001 -null pointer assignment
	
	CAUSE
	=====
	
	The compiler generates an unnecessary sub command, as shown here:
	
	  mov  bx,WORD PTR _Test
	  sub  bx,WORD PTR _pvbuf    ; Not needed
	  mov  si,WORD PTR _pvbuf
	  mov  BYTE PTR [bx][si],5
	  inc  WORD PTR _Test
	
	RESOLUTION
	==========
	
	Split the statement into multiple lines. For example,
	
	  *(char _based(pvbuf) *)(((char *)Test)) = '5';
	     ((char*)Test)++;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates both the problem and its solution.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #include <conio.h>
	  char buf[100];
	  void *pvbuf=buf;
	  unsigned int _based(pvbuf) *Test;
	
	  void good()
	  {
	     *(char _based(pvbuf) *)(((char *)Test)) = '5';
	     ((char*)Test)++;
	     *(char _based(pvbuf) *)(((char *)Test)) = '5';
	  }
	
	  void bad()
	  {
	     *(char _based(pvbuf) *)(((char *)Test)++) = 6;
	  }
	
	  void main(void)
	  {
	     good();
	     printf( "Should print out: 5 5 \n%c %c\n",buf[0],buf[1] );
	     getch();
	     bad();
	     printf( "Should print out: 5 6 \n%c %c\n",buf[0],buf[1] );
	  }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCodeGen kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,2.1,4.0,4.1,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
