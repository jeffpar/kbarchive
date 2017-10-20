---
layout: page
title: "Q194608: FIX: Incorrect Code Generated with /Og Optimization"
permalink: /kb/194/Q194608/
---

## Q194608: FIX: Incorrect Code Generated with /Og Optimization

{% raw %}

	Article: Q194608
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC500bug kbVC600bug kbVC600fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A code sequence similar to the following generates incorrect code when compiled
	with global (/Og) optimization:
	
	  ( ( ConstantValue << Variable ) + OptimizableValue );
	
	RESOLUTION
	==========
	
	You can work around this problem by removing global optimization from the
	command line or by disabling global optimization on a per-function basis with
	the optimize pragma.
	
	Another workaround is to simplify the code and use a temporary global variable as
	illustrated in the "More Information" section of this article.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0,
	Service Pack 3 (SP3).
	
	
	MORE INFORMATION
	================
	
	The following code outputs 0 if compiled with /Og and 1 if compiled with /Od.
	
	Sample Code Workaround One
	--------------------------
	
	     #include <iostream>
	     #define  SIZE         (unsigned int)512
	     static unsigned int   new_depth = 1;
	
	     // #pragma optimize("g",off)      // Uncomment for Workaround One.
	     int main()
	     {
	        unsigned int result = ( ( 8 << new_depth ) +  SIZE - 1 ) / SIZE;
	        std::cout << "Result = " << result ;
	        return 0;
	     }
	     // #pragma optimize("g",on)      // Uncomment for Workaround One.
	
	Sample Code Workaround Two
	--------------------------
	
	     #include <iostream>
	     #define  SIZE        (unsigned int)512
	     static unsigned int  new_depth = 1;
	
	     unsigned int result1;
	
	     int main()
	     {
	        result1 = ( 8 << new_depth );
	        unsigned int result2 = ( ( result1 +  SIZE - 1 ) / SIZE );
	
	        std::cout << "Result = " << result2 ;
	        return 0;
	
	     }
	
	REFERENCES
	==========
	
	service pack 3 sp3
	
	Additional query words: compiler
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC500bug kbVC600bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
