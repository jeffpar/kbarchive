---
layout: page
title: "Q154112: FIX: ClassView Cannot Find Template Member Function Definition"
permalink: /kb/154/Q154112/
---

## Q154112: FIX: ClassView Cannot Find Template Member Function Definition

{% raw %}

	Article: Q154112
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbV
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassView pops up the message "Cannot find the definition for this function" for
	some member functions of a template class. This happens for those member
	functions that return a template class, or a reference or pointer to a template
	class. The function must also be defined outside of the class. The sample code
	in the More Information section below demonstrates this problem.
	
	In Visual C++, version 6.0, ClassView cannot find any template member function or
	variable defined outside of the class. The error message reads:
	
	  Cannot find the definition (implementation) of this function.
	
	RESOLUTION
	==========
	
	The only workaround is to define the function inline by moving its body inside
	the class declaration. Note that defining the function outside the class
	declaration with the inline keyword will not solve the problem. Also note that
	projects with this problem will still build and run correctly; only the
	convenience of finding a function's definition via the ClassView is lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	This bug reappeared in Microsoft Visual C++, version 6.0.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code will reproduce the problem. To reproduce, right click
	on "mult_by_scalar" while in the class view and select Go To Definition.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179012 ClassView Lacks "Go to Declaration" for Static Data Members
	
	Sample Code
	-----------
	
	     /* Compile options needed:none
	     */ 
	
	     template<class T>
	     class SimpleArray {
	
	     public:
	
	         SimpleArray();
	         ~SimpleArray();
	
	         SimpleArray<T>& mult_by_scalar(T);// Cannot find the definition
	
	         int Numelem();
	
	     private:
	         int num_elts;
	         T* ptr_to_data;
	
	     };
	
	     template <class T>
	     SimpleArray<T>::SimpleArray() {
	         num_elts=0;
	         ptr_to_data = 0;
	     }
	
	     template <class T>
	     SimpleArray<T>::~SimpleArray() {
	         delete [] ptr_to_data;
	     }
	
	     template <class T>
	     SimpleArray<T>& SimpleArray<T>::mult_by_scalar(T rm) {
	
	          return *this;
	     }
	
	     template <class T>
	     int SimpleArray<T>::Numelem(){
	
	         return  num_elts;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbui kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC600 kbVC32bitSearch
	Version           : :4.0,4.1,4.2,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
