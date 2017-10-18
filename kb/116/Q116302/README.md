---
layout: page
title: "Q116302: BUG: LINK Generates Incorrect Unresolved External for Pointer"
permalink: kb/116/Q116302/
---

## Q116302: BUG: LINK Generates Incorrect Unresolved External for Pointer

	Article: Q116302
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling and linking the sample code shown below causes the linker to generate
	two L2029 error messages. If the code is compiled as C++ source, the linker
	shows an incorrect parameter list when generating the unresolved external error
	message for the Test function.
	
	If the sample code is compiled as a C++ file, the linker generates the following
	error message with the incorrect parameter list:
	
	  error L2029: 'void __near __cdecl Test(unsigned int,char __far*,
	  int __far*,char __far*)'
	
	The error message with the correct parameter list would be:
	
	  error L2029: 'void __near __cdecl Test(unsigned int,char __far*,
	  int __far*,int __far*)'
	
	CAUSE
	=====
	
	When an L2029 error message is generated for a C++ symbol, the linker
	"undecorates" the symbol name, using the type information encoded as part of the
	decorated name. It is during this "undecoration" that the incorrect parameter
	list is generated based on the function's signature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with LINK for MS-DOS, versions 5.3,
	5.31.009, 5.5, and 5.6. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Sample Code
	-----------
	
	  /*
	     Compile options needed: /Tp (must be compiled as C++ source)
	
	     NOTE: The sample code below is designed to generate two L2029
	     errors.
	  */ 
	
	     #include <windows.h>
	
	     extern void Test(UINT,LPSTR,LPINT,LPINT);
	     extern void Test2(LPINT,LPINT,LPSTR,UINT);
	
	     void main()
	     {
	         char ray[10];
	         int num;
	         UINT uint=(unsigned)1.0;
	         LPINT iptr;
	         LPSTR cptr;
	
	         iptr=&num;
	         cptr=&ray[0];
	         Test(uint,cptr,iptr,iptr);   // L2029 with incorrect parameter
	         Test2(iptr,iptr,cptr,uint);  // L2029 with correct parameters
	     }
	
	
	Additional query words: mangled decorated .CPP 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:5.3,5.31.009,5.5,5.6
	
	=============================================================================
	
