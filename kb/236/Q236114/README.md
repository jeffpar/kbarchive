---
layout: page
title: "Q236114: FIX: Destructor of Static Object Not Called on Exit"
permalink: /kb/236/Q236114/
---

## Q236114: FIX: Destructor of Static Object Not Called on Exit

{% raw %}

	Article: Q236114
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The destructor for static local variables in static objects may never be called.
	The destructor should be called when the program exits, but it does not get
	called. See the More Information section below for a specific example.
	
	RESOLUTION
	==========
	
	Avoid using this construct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The static local won't be destroyed if it is local to a destructor for which the
	only instance(s) of the destructor's class is static. If there are any local or
	heap allocated instances, the object will be destroyed (assuming delete is
	called for heap allocated instances).
	
	The following code demonstrates the problem:
	
	  #include <iostream>
	
	  struct X {
	  	X() {std::cout << "constructor X" << std::endl;} 
	  	~X() {std::cout << "destructor X" << std::endl;} // destructor of X is never called.
	  };
	
	  struct Y {
	     ~Y() {static X x;}
	  };
	
	  void main() {
	     static Y y;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
