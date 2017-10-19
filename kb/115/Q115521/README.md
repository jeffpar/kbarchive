---
layout: page
title: "Q115521: FIX: Private Copy Constructor Called Without Proper Access"
permalink: /kb/115/Q115521/
---

## Q115521: FIX: Private Copy Constructor Called Without Proper Access

	Article: Q115521
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,7.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After declaring the only copy constructor in a class with an access of
	"private", the constructor is called when access should not be allowed. For
	example, when an instance of the class is passed as a parameter to a function,
	the copy constructor is used to initialize the parameter; this should be allowed
	only if the function has "private" access.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	        #include <iostream.h>
	
	        class aClass
	        {
	        private:
	            int i;
	            aClass(const aClass& x) { cout << "private copy constructor" <<
	        endl; };
	
	        public:
	            aClass(int j) : i(j) {};
	        };
	
	        int func(aClass x) { return 0; };
	
	        int main(void)
	        {
	            int n;
	            aClass a(1);
	
	            n = func(a);  //Copy constructor gets called anyway.
	
	            return 0;
	        }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbtool kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
