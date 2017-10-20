---
layout: page
title: "Q149965: FIX: C2668 in Overloaded Function When enum Is Promoted to int"
permalink: /kb/149/Q149965/
---

## Q149965: FIX: C2668 in Overloaded Function When enum Is Promoted to int

{% raw %}

	Article: Q149965
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.52,2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a function is overloaded to take an int parameter in one instance and an
	unsigned int in another, the following error results if a call to the function
	is made with an enumerated type:
	
	  C2668 error: 'func' : ambiguous call to overloaded function (new behavior;
	  please see help)
	
	RESOLUTION
	==========
	
	- Use a cast when calling the function, such as func((unsigned)y).
	
	-or-
	
	- Overload the function to take the enumerated type, such as:
	
	     func(enum A);
	     func(enum E);
	
	STATUS
	======
	
	Microsoft has confirmed this to be bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     // Compile option needed: none
	
	     enum A{eA = 0, eB};
	     enum E{e = -1};
	
	     void func(int a);
	     void func(unsigned int a);
	
	     void main(){
	                A y = eA;
	                E e1 = e;
	                int m = 2;
	
	                func(m);        // calls func(int)
	                func(y);        // C2668 error
	                func(e1);       // C2668 error
	              }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.52,2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
