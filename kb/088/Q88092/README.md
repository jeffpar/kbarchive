---
layout: page
title: "Q88092: BUG: Cannot Access Static Data Members in Inline Assembly"
permalink: kb/088/Q88092/
---

## Q88092: BUG: Cannot Access Static Data Members in Inline Assembly

	Article: Q88092
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC100bug kbVC150bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC500bug kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to access static data members in a C++ program with inline assembly,
	the compiler may report the following errors:
	
	  error C2420: 'identifier' : illegal symbol in first operand 1
	
	  error C2415: improper operand type
	
	The inline assembler cannot access static data members within a class member
	function. The sample code below demonstrates the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To access the static data member, assign the address of the data member to a
	temporary variable. The inline assembler can then access the data by loading the
	address from the temporary variable.
	
	Below is code that demonstrates the problem and workaround.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /AS  for 16-bit
	     *                          none for 32-bit
	     */ 
	
	     #include <stdio.h>
	
	     class sample
	     {
	     public:
	
	        static int value;
	        sample();
	
	     };
	
	     int sample::value = 9;
	
	     sample::sample()
	     {
	
	          __asm mov value,3             // C2420 and C2415 here
	          __asm mov sample::value,ax    // C2420, C2414, C2400 on
	                                        // this line
	
	     //  For 16-bit workaround, uncomment next three lines.
	     //     void * valueptr=&value;
	     //     __asm mov bx, valueptr
	     //     __asm mov [bx],3
	
	     //  For 32-bit workaround, uncomment next three lines.
	     //     void * valueptr=&value;
	     //     __asm mov ebx, valueptr
	     //     __asm mov [ebx],3
	     }
	
	     int main( void )
	     {
	        sample aSample;
	        printf( "aSample.value = %d.\n", aSample.value );
	        return 0;
	     }
	
	Additional query words: 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbVC100bug kbVC150bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
