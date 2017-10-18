---
layout: page
title: "Q165803: FIX: Error C2783 - Cannot Deduce Non-Type Template Parameter"
permalink: kb/165/Q165803/
---

## Q165803: FIX: Error C2783 - Cannot Deduce Non-Type Template Parameter

	Article: Q165803
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600fix kbVS600sp2kbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual Studio 6.0, SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sample code in the MORE INFORMATION section causes the compiler error
	C2783:
	
	  'declaration' : could not deduce template argument for 'identifier'
	
	RESOLUTION
	==========
	
	The workaround is to avoid argument deduction by specifying the
	template-parameter-list when calling the function template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and the workaround:
	
	SAMPLE
	------
	
	        /* Compile options needed: none
	        */ 
	
	        template <int I>
	        struct C
	        {
	            int a[I] ;
	        };
	
	        template <int I>
	        int F(C<I> a)
	        {
	            return I ;
	        }
	
	        int main ()
	        {
	            int i;
	            C<4>  CObj ;
	
	            i  = F(CObj);
	
	            // Workaround: Comment the line above.
	            // Uncomment the following line
	            // i = F<4>(CObj);
	
	            return 0 ;
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500bug kbVC600fix kbVS600sp2 kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
