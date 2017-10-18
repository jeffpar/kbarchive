---
layout: page
title: "Q143352: FIX: C2988 on Conversion Operator Between Two Template Classes"
permalink: kb/143/Q143352/
---

## Q143352: FIX: C2988 on Conversion Operator Between Two Template Classes

	Article: Q143352
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a conversion operator between two template classes is defined outside the
	template class, you may receive this error:
	
	  error C2988: unrecognizable template declaration/definition
	
	RESOLUTION
	==========
	
	Define the conversion operator inside the template class body.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: None
	     */ 
	
	     //#define _WORKAROUND   //uncomment this line to work around
	
	     template<class T>
	     class classA
	     {
	     public:
	
	         classA(T& t) : m_t(t) {}
	
	     protected:
	         T m_t;
	     };
	
	     template<class T>
	     class classB
	     {
	     public:
	
	        classB(const T& t) : m_t(t) {}
	
	     #ifndef _WORKAROUND
	        operator classA<T>();
	
	     #else
	        operator classA<T>()   { return classA<T>(m_t); }
	
	     #endif
	
	     protected:
	         T m_t;
	     };
	
	     #ifndef _WORKAROUND
	
	     // Error C2988 for the following function definition.
	
	     template<class T>
	     classB<T>::operator classA<T>()
	     {
	         return classA<T>(m_t);
	     }
	
	     #endif
	
	     void main()
	     {
	
	         classB<int> b(2);
	
	        // Invoke template<class T> classB<T>::operator classA<T>()
	         classA<int> a = b;
	     }
	
	Additional query words: kbVC400bug inline
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
