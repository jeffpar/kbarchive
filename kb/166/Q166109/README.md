---
layout: page
title: "Q166109: FIX: Template Friend Function Causes Compiler Error C2248"
permalink: /kb/166/Q166109/
---

## Q166109: FIX: Template Friend Function Causes Compiler Error C2248

	Article: Q166109
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates a compiler error C2248 as follows:
	
	  Error C2248: 'member' : cannot access member declared in class 'class'
	
	under the following circumstances:
	
	- If a class declares a template function as a friend function, and
	
	- If the template function definition appears after the class definition.
	
	RESOLUTION
	==========
	
	Do not declare a template function as a friend of a class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	     /*
	     Compile option: None
	     */ 
	
	     class X;
	
	     template <class T> void AFunction(X &x, T &t);
	
	     class X
	     {
	     private:
	
	        int m_n;
	
	     public:
	
	        template <class T> friend void AFunction(X &x, T &t) ;
	
	     };
	
	     template <class T> void AFunction(X &x, T &t)
	     {
	
	        x.m_n = t; // C2248 here.
	
	     }
	
	     int main()
	     {
	        X x;
	        int n;
	        AFunction(x, n);
	
	             return 0 ;
	     }
	
	NOTE: Defining the template function before the class definition eliminates the
	compiler error C2248. But the compiler does not generate any code when you call
	the template function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
