---
layout: page
title: "Q319797: BUG: An Access Violation Occurs When You Use the /Og Switch for"
permalink: kb/319/Q319797/
---

## Q319797: BUG: An Access Violation Occurs When You Use the /Og Switch for

	Article: Q319797
	Product(s): Microsoft C Compiler
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual C++, version 3.0, on platform(s):
	   - x86 
	- Microsoft Windows CE Platform Builder, versions 3.0, 4.0, on platform(s):
	   - x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application makes a call and uses a parameter that is the result of a
	static member function, or uses a parameter that is a result of a non-member
	function that is returning an object, the application may generate an access
	violation.
	
	CAUSE
	=====
	
	Global optimization may push an incorrect pointer for the object parameter in
	the call. Subsequent use of this object pointer in the callee may result in
	corrupted memory.
	
	RESOLUTION
	==========
	
	Turn off global optimization for the module or function that encounters these
	problems.
	
	To turn off global optimization, use one of the following methods:
	
	- Use the /Og- switch.
	
	- Do not include /Og or switches that use it, such as /Ox.
	
	- Use the IDE compiler optimization project settings.
	
	- Use #pragma optimize.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  struct ClassA
	  {
	  	virtual ~ClassA()
	  	{
	  	}
	
	  	static ClassA CreateObject() 
	  	{ 
	  		return ClassA(); 
	  	}
	  };
	
	  void fn2( ClassA a , int* pi )
	  {
	  	*pi = -1;
	  }
	
	  void main()
	  {
	  	int i;
	
	  	fn2( ClassA::CreateObject(), &i);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbWinCEETKSearch kbWinCESearch
	Version           : :3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
