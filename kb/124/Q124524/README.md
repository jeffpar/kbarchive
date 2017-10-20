---
layout: page
title: "Q124524: FIX: Using String Constant as Default Argument Doesn't Work"
permalink: /kb/124/Q124524/
---

## Q124524: FIX: Using String Constant as Default Argument Doesn't Work

{% raw %}

	Article: Q124524
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbHWx86kbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, version 2.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a string constant to initialize a character pointer as a default parameter
	argument in a class member function does not work as expected. Instead of
	assigning the address of the string constant to the pointer, the compiler uses a
	different existing string constant.
	
	CAUSE
	=====
	
	This is a problem with character constants within a class definition, no matter
	how they are used. The compiler always uses the last string constant in the
	class definition.
	
	RESOLUTION
	==========
	
	To work around the problem, create a static character pointer that is set to the
	desired string constant and use that static variable to initialize the character
	pointer parameter of the constructor. Typically, string constants are defined
	globally in a header file so that they can be easily modified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	You can use the following sample to reproduce this problem. The output of the
	sample code will be:
	
	  Value of 'String' 1234567890 = 123456
	
	In this case, the compiler used the first six characters of the "1234567890"
	string instead of using the "abcde" string.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	
	  class A
	  {
	  public:
	     void Func(char* String = "abcde")
	     {
	        cout << "Value of 'String' " << "1234567890 = " << String << endl;
	     }
	  };
	
	  void main()
	  {
	     A a;
	     a.Func();
	  }
	
	Additional query words: 2.00 9.00 buglist2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbHWx86 kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
