---
layout: page
title: "Q184089: FIX: C2555 with Virtual Function Returning Template Object"
permalink: /kb/184/Q184089/
---

## Q184089: FIX: C2555 with Virtual Function Returning Template Object

	Article: Q184089
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A virtual function returning a templated class object and a derived class
	defining the virtual function, causes the following compiler error:
	
	  error C2555: 'MyDerived::TestFunc' : overriding virtual function differs from
	  'MyBase::TestFunc' only by return type or calling convention
	
	RESOLUTION
	==========
	
	Define the base class function to be nonvirtual.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  template <class T>
	     class TestClass
	     {
	        public:
	           T val;
	           TestClass(T num){val=num;}
	
	     };
	
	     class MyBase
	     {
	       public:
	         int value;
	         virtual TestClass<float> TestFunc(void) ;
	         /* Make this function nonvirtual to fix C2555 error. */ 
	         /* A pure virtual function also has the same problem. */ 
	     };
	     template <class T>
	     class MyDerived : public MyBase
	     {
	       public:
	         virtual TestClass<float> TestFunc(void)
	         {
	           return TestClass<float>(3.14f);
	         }
	     };
	     MyDerived<int> x;
	     void main(void)
	     {
	       x.TestFunc();
	     }
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mark
	Hagen, Microsoft Corporation.
	
	
	Additional query words: CL C2555 CPP CXX
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC500Search
	Version           : :4.0,4.0a,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
