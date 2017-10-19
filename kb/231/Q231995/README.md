---
layout: page
title: "Q231995: FIX: Error C2664 and C2582 While Using CArray Class"
permalink: /kb/231/Q231995/
---

## Q231995: FIX: Error C2664 and C2582 While Using CArray Class

	Article: Q231995
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCPPonly kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user-defined class contains a CArray and the same user-defined class is
	nested in another class, you may get the following errors if no copy constructor
	and assignment operator are provided for the class:
	
	  main.cpp(52): error C2664: 'Add' : cannot convert parameter 1 from 'class B'
	  to 'class B' No copy constructor available for class 'B'
	
	After adding a copy constructor, you get the following error message:
	
	  afxtempl.h(443): error C2582:'B' : 'operator =' function is unavailable
	  afxtempl.h(1566):while compiling class-template member function 'void
	  __thiscall CArray<class B,class B>::SetAtGrow(int,class B)'
	
	CAUSE
	=====
	
	If the class that contains a CArray is nested in another class, then its objects
	must be copied.
	
	The compiler does not construct an implicit copy constructor and copy assignment
	operator because the class in question has CArray as a member, which does not
	have a copy constructor and copy assignment operator, and CArray inherits from
	CObject, which has a protected copy construtor and a copy assignment operator.
	The compiler tries to generate the implicit ones, but that generates a call to
	CObject's version of them. Because they are protected, the above errors are
	generated.
	
	RESOLUTION
	==========
	
	You need to provide a copy constructor and an assignment operator for the class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following example shows the correct use of the CArray class:
	
	  // No compiler option needed.
	  #include <afxtempl.h>
	
	  struct A
	  {
	   int i;
	   int j;
	  };
	
	  class B
	  {
	
	  	public:
	  		B();
	  		~B();
	
	   // Need to define copy ctor and assignment operator.
	
	  	B(const B& b){
	  	// Your copy ctor body goes here.		
	  	}
	   
	  	/* const B& */ void operator= (const B& b) { 
	  	// Your assignment operator body goes here.
	  	}
	
	  	protected:
	  		CArray<A, A> arrayA;
	  };
	
	  B::B(){}
	  B::~B(){}
	
	  class C
	  {
	
	  	public:
	  		C();
	  		~C();
	  		void addElement();
	
	  	protected:
	  		CArray<B, B> arrayB;
	  };
	
	  C::C(){}
	  C::~C(){}
	  void C::addElement()
	  {
	  	B temp;
	  	arrayB.Add(temp);
	  }
	
	  void main()
	  {
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCPPonly kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
