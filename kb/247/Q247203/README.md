---
layout: page
title: "Q247203: BUG: Try/Catch Block Fails when Global Optimizations Enabled"
permalink: /kb/247/Q247203/
---

## Q247203: BUG: Try/Catch Block Fails when Global Optimizations Enabled

{% raw %}

	Article: Q247203
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to build an application that uses C++ exception handling, with
	global optimizations enabled, the catch handler within the try/catch block may
	not catch any of the exceptions that are thrown by the instructions in the try
	block. See the "More Information" section below for details.
	
	CAUSE
	=====
	
	The optimizer optimizes the try/catch block incorrectly.
	
	RESOLUTION
	==========
	
	Here are the two ways to work around this problem:
	
	1. Disable global optimizations on a function-by-function basis using the
	  optimize pragma with the "g" option. /Og- disables global optimization on a
	  file-by-file basis.
	
	2. Use the asynchronous exception handling model by specifying the /EHa compiler
	  option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	- Compile Options : cl /GX /GR /Og test.cpp
	
	  //test.cpp
	  #include <iostream>
	  using namespace std;
	
	  class CObject
	  {
	  	virtual function() {}; 	//necessary to make the class polymorphic
	  };
	
	  class B : public CObject
	  {
	  public:
	  	CObject* m_pComp;
	  	void Test() const;
	  };
	
	  void B::Test() const
	  {
	  	B* pComp;
	  	try
	  	{
	  		pComp=dynamic_cast<B*>(m_pComp);
	  	}
	  	catch(exception& exc) 	//The exception is caught only if Global Optimizations are disabled.
	  	{
	  		cout << "In Catch Block\n";
	  		cout << "Exception Caught\n" <<endl;
	  	}
	  }
	
	  void main()
	  {
	  	B object; 	//m_pComp is intentionally not initialized so that the exception occurs.
	  	object.Test();
	  }
	
	  Expected Output:
	  In Catch Block
	  Exception Caught
	
	When the above code is compiled using /Og, then the control never enters the
	catch block and results in an access violation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
