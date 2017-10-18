---
layout: page
title: "Q205402: FIX: ClassView Doesn't Show Derived Classes in Embedded Namespac"
permalink: kb/205/Q205402/
---

## Q205402: FIX: ClassView Doesn't Show Derived Classes in Embedded Namespac

	Article: Q205402
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbClassView kbide kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ClassView pane doesn't display a class that is in an embedded namespace if
	it inherits from another class that is defined in the outer namespace.
	
	RESOLUTION
	==========
	
	Use a typedef statement to create an alias for the class name in the outer
	namespace, and then derive from it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This bug was corrected in Microsoft
	Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Add the following code to a C++ source or header file:
	
	  namespace A
	  {
	     class ClassA
	     {
	     public:
	        ClassA() {}
	     };
	
	     // Create an alias for the outer class.
	     typedef A::ClassA A_ClassA;
	
	     namespace B
	     {
	        // This class is not displayed in ClassView.
	        class ClassB1 : public A::ClassA
	        {
	        public:
	           ClassB1() {}
	        };
	
	        // This class is displayed in ClassView.
	        class ClassB2 : public A_ClassA
	        {
	        public:
	           ClassB2() {}
	        };
	     } // namespace B
	  } // namespace A
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClassView kbide kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
