---
layout: page
title: "Q130370: FIX: C2676 on Overloaded Operators of Templated Classes"
permalink: kb/130/Q130370/
---

## Q130370: FIX: C2676 on Overloaded Operators of Templated Classes

	Article: Q130370
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++ 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a templated class is not instantiated, but its member operators are
	referenced, the following error is generated:
	
	  error C2676: [binary/unary] '<op>' : 'class [ClassName]<temp
	  type>' does not define this operator or a conversion to a type acceptable
	  to the predefined operator.
	
	NOTE: The line number referenced by the error message refers to the point where
	the operator is referenced (called), not the operator's definition.
	
	RESOLUTION
	==========
	
	The template class must be instantiated for the particular data type being
	referenced (< class T> below). This instantiation can be accomplished in
	one of two ways:
	
	- Instantiate the class prior to referencing any of its operator functions. Any
	  of the following three statements will instantiate the class and prevent the
	  problem:
	
	        TmpltClass<type> X;        // declare a global instance of the class
	        extern TmpltClass<type> X; // X must be a global defined elsewhere
	        template TmpltClass<type>; // explicit instantiation
	
	  NOTE: Explicit instantiation works only if the template class and all of its
	  member functions are fully defined.
	
	-or-
	
	- For each overloaded operator referenced, replace the first reference to that
	  operator with the function form of the operator. For example, replace "X + Y"
	  with "X.operator+(Y)" (NOTE: Only the first reference needs to be replaced
	  with the function form.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	In the sample code below, the "*" operator has been chosen to reproduce the
	problem, but the problem occurs with both binary and unary (prefix or postfix)
	operators. In all cases, the workarounds are the same. The return type of the
	operator function has no bearing on the problem.
	
	NOTE: If the operator is the function call operator (), the error is C2604
	instead of C2676, but the workarounds are the same.
	
	Sample Code
	-----------
	
	  /* Compile Options Needed: None
	  */ 
	
	  template< class T > class TmpltClass
	  {
	       T X;
	     public:
	       T& operator*(int Arg1) {return X;}
	  };
	
	  // Workaround 1: uncomment any one of the following three lines:
	  // TmpltClass<int> X;
	  // extern TmpltClass<int> X;
	  // template TmpltClass<int>;
	
	  void test(TmpltClass<int>& theArg)
	  {
	  // Workaround 2: uncomment the next line:
	  //   theArg.operator*(0);
	     theArg * 0;  //do not comment out this line
	  }
	
	Additional query words: 2.00 2.10 2.20 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
