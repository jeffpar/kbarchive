---
layout: page
title: "Q168010: FIX: /Od May Generate Destructor for Unconstructed Temp Object"
permalink: kb/168/Q168010/
---

## Q168010: FIX: /Od May Generate Destructor for Unconstructed Temp Object

	Article: Q168010
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVS97sp1fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The destructor for a class may be called for an unconstructed temporary when
	used with the conditional operator.
	
	RESOLUTION
	==========
	
	Use an if-else construct in lieu of the conditional operator. In most cases, the
	logical not operator can be applied to the first operand while reversing the
	second and third operands.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Assuming a class C and a type T, the following conditions must be true of the
	ternary expression for this bug to occur:
	
	- The second operand is of type C.
	
	- The third operand is of type T.
	
	- Class C has an operator T() and a constructor, C(T).
	
	The following sample demonstrates the problem.
	
	Sample Code
	-----------
	
	     typedef int T;
	     class C
	     {
	         T _i;
	     public:
	         C(const C& c);
	         C(T);
	         ~C();
	         operator T();
	     };
	     void f(T i)
	     {
	         C c1(5);
	         C c2 = i==0 ? c1 : i;
	              //i ? i : c1; // possible workaround
	     }
	
	NOTE: MFC's CString class exhibits this behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
