---
layout: page
title: "Q168008: FIX: C2166 Incorrect Type Deduction for Template Parameter"
permalink: /kb/168/Q168008/
---

## Q168008: FIX: C2166 Incorrect Type Deduction for Template Parameter

{% raw %}

	Article: Q168008
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler deduces incorrect type for a template parameter T, associated with
	a template function that takes a const reference of type T, causing the compiler
	error C2166 as follows:
	
	  l-value specifies const object
	
	RESOLUTION
	==========
	
	Do not use a literal when calling the template function. Instead, declare a
	variable, and pass the variable as an argument to the template function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and a workaround.
	
	Sample Code
	-----------
	
	     /*
	     * Compiler Options: None
	     */ 
	
	     #define BUG
	     //Workaround: comment the line above
	     //Uncomment the following line
	     //#define WORKAROUND
	
	     template<class T> void Test(const T& x)
	     {
	        T y = x;
	        if(y < 0)
	           y = -y;
	     }
	
	     int main()
	     {
	     #ifdef BUG
	        Test(3) ;
	     #endif
	
	     #ifdef WORKAROUND
	        int n = 3 ;
	        Test(n) ;
	     #endif
	
	        return 0 ;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
