---
layout: page
title: "Q150576: FIX: C2682 Using dynamic_cast to Cast to a Const Pointer Type"
permalink: /kb/150/Q150576/
---

## Q150576: FIX: C2682 Using dynamic_cast to Cast to a Const Pointer Type

	Article: Q150576
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When casting a const pointer of derived class to a const pointer of base class,
	the compiler generates the following error message:
	
	  
	
	  C2682: cannot use dynamic_cast to convert from "'const class 'name1'*
	
	         to 'const class 'name2'*'"
	
	where name1 and name2 refer to the names of your derived class and base class
	respectively.
	
	RESOLUTION
	==========
	
	Cast the derived class const pointer to a derived class non-const pointer. Then
	use the derived class non-const pointer in the dynamic_cast expression. See the
	MORE INFORMATION section of this article for sample code and a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and generates the compiler
	error C2682. The workaround is shown in the comments in the sample code below.
	
	Sample Code
	-----------
	
	        #define WORKAROUND  /* Uncomment this line to workaround */ 
	        class A
	        {
	          virtual void f() { } ;
	        } ;
	
	        class B : public A
	        {
	        } ;
	
	        void g(const B* pb)
	        {
	        #ifndef WORKAROUND
	           const A* pa = dynamic_cast<const A*>(pb) ;
	        #else
	           B* tmpBp = const_cast<B*>(pb) ;
	           const A* pa = dynamic_cast<const A*>(tmpBp) ;
	        #endif
	        }
	
	        void main()
	        {
	           B bObj ;
	           const B* pb = &bObj ;
	           g(pb) ;
	        }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
