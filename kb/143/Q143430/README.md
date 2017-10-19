---
layout: page
title: "Q143430: FIX: Pointer to Member Function Is Not Shown as Reference"
permalink: /kb/143/Q143430/
---

## Q143430: FIX: Pointer to Member Function Is Not Shown as Reference

	Article: Q143430
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While browsing for a member function of a C++ class, the browser 'References'
	list may not show the source line in which the address of the function is taken.
	See the sample code for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates that the browser correctly shows all the
	references to a member variable, but it doesn't show the references to a member
	function where the address of the member function is taken.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /FR
	     */ 
	
	     class CTest
	     {
	     public:
	        // Member function
	        void MemFunc();
	        // Member variable
	        int m_i;
	     };
	
	     void CTest::MemFunc()
	     {
	     }
	
	     // When you browse (Tools/Browse Menu) for the symbol 'MemFunc',
	     // the 'References' list shows all the lines where 'MemFunc' is
	     // referenced EXCEPT for the following source line.
	
	     // Pointer to member function
	     void (CTest::*pmfn)() = &CTest::MemFunc;
	
	     // When you browse for the symbol 'm_i', the 'References' list
	     // shows all the lines INCLUDING the following source line.
	
	     // Pointer to member variable
	     int CTest::*pmint = &CTest::m_i;
	
	     void main()
	     {
	        CTest testObj;
	        testObj.MemFunc();
	        int j = testObj.m_i;
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
