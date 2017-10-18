---
layout: page
title: "Q116170: FIX: C2099 Generated Initializing Struct with Macro"
permalink: kb/116/Q116170/
---

## Q116170: FIX: C2099 Generated Initializing Struct with Macro

	Article: Q116170
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,7.0
	Operating System(s): 
	Keyword(s): kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a macro to initialize a structure causes the C/C++ compiler to incorrectly
	generate the following error message:
	
	  error C2099: initializer is not a constant
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to reproduce this problem:
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <stddef.h>
	
	     #define ZIP     struct zip_struct
	     #define ZOT     struct zot_struct
	     #define TABLE   struct table_struct
	
	     ZIP
	     {
	        ZOT
	        {
	           int num;
	        } m_zot;
	     };
	
	     #define MACRO(tok) \ 
	        { (offsetof(ZIP, m_zot.tok) - offsetof(ZIP, m_zot)) / sizeof(int) }
	
	     TABLE
	     {
	        int Offset;
	        int ModNum;
	     };
	
	     TABLE test[] = { { offsetof(ZIP, m_zot.num) - offsetof(ZIP, m_zot)
	                      / sizeof(int) } };
	     TABLE test2[] = { { MACRO(num) } };
	
	     void main(void)
	     {
	     }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
