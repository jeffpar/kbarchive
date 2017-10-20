---
layout: page
title: "Q128788: BUG: C2143 When Initializing Static Member in Class Template"
permalink: /kb/128/Q128788/
---

## Q128788: BUG: C2143 When Initializing Static Member in Class Template

{% raw %}

	Article: Q128788
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When initializing a static data member that has a user-defined type in a class
	template, the compiler generates the following error message on the line after
	the last line of code:
	
	  Error C2143: syntax error : missing ';' before 'newline'
	
	RESOLUTION
	==========
	
	To work around the problem, specify a specialized instance for particular data
	types when initializing the static data member -- as in the "Sample Code"
	section in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The following code can be used to reproduce the problem and work around the
	problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c
	  */ 
	
	  typedef struct
	  {
	    int element;
	  } MyType;
	
	  template <class T1>
	  class AA
	  {
	    public:
	      static MyType m_mytype;
	  };
	
	  template <class T1> MyType AA<T1>::m_mytype = {0};
	
	  // Uncomment the following line to work around the problem.
	  // MyType AA<double>::m_mytype = {0};
	
	  AA<double> mydouble;
	
	  MyType mytype = mydouble.m_mytype;
	
	Additional query words: 2.00 2.10 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC210 kbVC32bitSearch
	Version           : :2.0,2.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
