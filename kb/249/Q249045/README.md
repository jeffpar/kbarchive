---
layout: page
title: "Q249045: BUG: C2964 On Pointer-To-Member As Template Argument"
permalink: /kb/249/Q249045/
---

## Q249045: BUG: C2964 On Pointer-To-Member As Template Argument

{% raw %}

	Article: Q249045
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbCompiler kbCPPonly kbLangCPP kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates an error such as the following when a pointer-to-member
	is used as a class template parameter.
	
	  error C2964: invalid expression as template parameter
	
	CAUSE
	=====
	
	This C++ language feature has not yet been implemented in Visual C++.
	
	RESOLUTION
	==========
	
	To not use the pointer-to-member as a template argument, pass it as a parameter
	to the class constructor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Use the following sample code to reproduce the behavior:
	
	  #ifdef BUG
	
	  struct MyClass {
	     char a,b;
	     MyClass() : a('a'), b('b') {};
	  };
	
	  template<char MyClass::*member_ptr> 
	  class AnotherClass {
	  private:
	     MyClass m_var;
	  public:
	     char value() { return m_var.*member_ptr; }
	  };
	
	  int main()
	  {
	     AnotherClass<&MyClass::a> var1;
	     AnotherClass<&MyClass::b> var2;	//<<<< Causes compiler error.
	     return 0;
	  } 
	
	  #else
	
	  // WORKAROUND
	  struct MyClass {
	     char a,b;
	     MyClass() : a('a'), b('b') {};
	  };
	
	  template<typename MbrType, typename ClassType> 
	  class AnotherClass {
	  private:
	     MyClass m_var;
	     MbrType ClassType::*member_ptr;
	  public:
	     AnotherClass(MbrType ClassType::*mem_ptr) : member_ptr(mem_ptr) {}
	     char value() { return m_var.*member_ptr; }
	  };
	
	  int main()
	  {
	     AnotherClass<char,MyClass> var1(&MyClass::a);
	     AnotherClass<char,MyClass> var2(&MyClass::b);
	     return 0;
	  } 
	
	  #endif
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtemplate kbCompiler kbCPPonly kbLangCPP kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
