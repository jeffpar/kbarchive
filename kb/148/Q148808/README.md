---
layout: page
title: "Q148808: FIX: C2670: Template Function Cannot Convert Parameter"
permalink: kb/148/Q148808/
---

## Q148808: FIX: C2670: Template Function Cannot Convert Parameter

	Article: Q148808
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is generated:
	
	  error C2670: 'AFunction' : the template function cannot convert parameter 1
	  from type 'class Derived<int> *'
	
	in code containing all of the following:
	
	- A template class 'Derived' from another template class 'Base'.
	
	- 'AFunction' taking a pointer to the 'Base' as a parameter.
	
	- A call to the 'AFunction' passing a pointer to 'Derived' before instantiating
	  any object of that type.
	
	See the sample code in this article for an example.
	
	RESOLUTION
	==========
	
	To work around this problem, either explicitly instantiate 'Derived' or create a
	dummy object of type 'Derived' before calling the 'AFunction'.
	
	See the Sample Code for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  template <class T>
	  class Base
	  {
	  public:
	     T data;
	     int i;
	  };
	
	  template <class T>
	  class Derived : public Base<T>
	  {
	  public:
	     int j;
	  };
	
	  template <class T>
	  void AFunction(Base<T>* b)
	  {
	     return;
	  }
	
	  void main()
	  {
	     // Uncomment one of the following two statements to work around the
	     // problem. If the template class definition is in a header file,
	     // you may want to include one of the following two statements at
	     // the end of that file.
	
	     // template Derived<int>;
	     // Derived<int> dummy;
	
	     Derived<int> *j;
	
	     AFunction(j);   // Gives C2670 here
	  }
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
