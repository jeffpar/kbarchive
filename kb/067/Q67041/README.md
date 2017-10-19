---
layout: page
title: "Q67041: BUG: Structure Tags Visible Outside of Function Prototype Scope"
permalink: /kb/067/Q67041/
---

## Q67041: BUG: Structure Tags Visible Outside of Function Prototype Scope

	Article: Q67041
	Product(s): Microsoft C Compiler
	Version(s): 6.0 6.0a 6.0ax 7.0 1.0 1.5 2.0 4
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit compilers listed above incorrectly generate the follow error
	message:
	
	  error C2025: 'tag1': enum/struct/union type redefinition
	
	In Visual C++32-bit Edition, the following error is incorrectly generated:
	
	  error C2011: 'tag1' : 'union' type redefinition
	
	CAUSE
	=====
	
	The scope of an identifier in C is determined by the placement of its
	declaration. According to the ANSI specification, if an identifier's declarator
	or type specification appears within a list of parameter declarations in a
	function prototype, the identifier is said to have "function prototype scope."
	This scope terminates at the end of the function prototype. In the C and QuickC
	compilers, this scope is not correctly terminated for structure and union tags,
	and a C2025 error may be incorrectly generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates this problem. The identifier "tag1" is a
	struct/union tag that does appear twice, but because the second instance appears
	in the prototype for func1(), it should have scope that is local to the
	prototype only. The same is true for "num".
	
	Section 3.1.2.1 of the ANSI specification states the following:
	
	  If an outer declaration of a lexically identical identifier exists in the
	  same name space, it is hidden until the current scope terminates, after which
	  it again becomes visible.
	
	Thus, both of these identifiers should not be visible outside of the prototype
	itself. Yet, the compiler correctly allows the name "num" to be reused, while
	incorrectly generating the following error for "tag1":
	
	  error C2025: 'tag1' : enum/struct/union type redefinition
	
	-or-
	
	  error C2011: 'tag1' : 'union' type redefinition
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Za
	     */ 
	
	     void main(void)
	     {
	         int num;
	         union tag1 { int   i;
	                      float f; };
	         {
	             void func1( float num, struct tag1 *ptr );
	         }
	     }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 6.0 6.0a 6.0ax 7.0 1.0 1.5 2.0 4
	Issue type        : kbbug
	
	=============================================================================
	
