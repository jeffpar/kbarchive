---
layout: page
title: "Q98989: FIX: Constructor C4705 Warning from Aggregate Class Member"
permalink: /kb/098/Q98989/
---

## Q98989: FIX: Constructor C4705 Warning from Aggregate Class Member

{% raw %}

	Article: Q98989
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.20
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft C/C++ compiles an application, it generates the following message
	for each class constructor:
	
	  warning C4705: statement has no effect
	
	CAUSE
	=====
	
	The source code has an embedded aggregate member (class, struct, or union) in a
	class definition and the compiler command line includes the /W4 and /f- compiler
	options. Note that the /f- option is not supported in the Microsoft Visual C++
	32-bit compiler.
	
	RESOLUTION
	==========
	
	The C4705 warning is incorrect and can be safely ignored. If the embedded
	aggregate is a class, define a default constructor. This will supress the
	warning.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was fixed in Microsoft Visual C++, version 4.0.
	
	MORE INFORMATION
	================
	
	The C4705 warning usually indicates a statement does not affect program
	execution. Each of the following statements causes this particular warning:
	
	     num - 1270;
	     count != 15;
	     42;
	
	The code example below demonstrates a structure data member that generates the
	C4705 warning for each class constructor. The warning also occurs if the example
	used a class or a union instead of a structure.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /W4 /f- (Remove /f- for 32-bit compiler)
	  */ 
	
	  #include <iostream.h>
	
	  struct MyStruct_tag { int i; };
	
	  class CMyClass {
	     private:
	        MyStruct_tag MyStruct;
	     public:
	        inline CMyClass() { MyStruct.i = 0; };
	        inline CMyClass(int init) { MyStruct.i = init; };
	        void Print(const char *);
	  };
	
	  void CMyClass::Print(const char* string)
	  {
	     cout << string << MyStruct.i << endl;
	  }
	
	  void main(void)
	  {
	     CMyClass Object1;
	     CMyClass Object2(1024);
	
	     Object1.Print("Object1.MyStruct.i = ");
	     Object2.Print("Object2.MyStruct.i = ");
	  }
	
	Additional query words: 7.00 8.00 8.00c 9.00 9.10 1.00 1.50 1.51 2.00 2.10 2.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
