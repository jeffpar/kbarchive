---
layout: page
title: "Q124291: FIX: Access Violation When Using Local Static Const Objects"
permalink: /kb/124/Q124291/
---

## Q124291: FIX: Access Violation When Using Local Static Const Objects

{% raw %}

	Article: Q124291
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instantiating a class object that is defined as a local static const may cause
	runtime access violations. For example, if you run the sample code listed in the
	"More Information" section of this article, it triggers the system error dialog
	box to appear with either the application error or the following text at run
	time:
	
	  Unhandled Exception in xxxx.exe: 0xC0000005: Access Violation
	
	
	RESOLUTION
	==========
	
	To work around this problem, use one of these suggestions:
	
	- Remove the const declaration from the local static class object.
	
	-or-
	
	- Do not instantiate the object as static.
	
	-or-
	
	- Instantiate a global static const object instead of a local one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  class A
	  {
	  public:
	      A(int i){ m_i = i; }
	      int m_i;
	  };
	
	  void main(void)
	  {
	      static const A a1(5);
	  }
	
	Additional query words: 9.00 8.00 1.00 2.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbvc100 kbVC200
	Version           : :1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
