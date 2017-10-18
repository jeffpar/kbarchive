---
layout: page
title: "Q155292: FIX: Destructor Not Called When DEBUG_NEW Is Defined"
permalink: kb/155/Q155292/
---

## Q155292: FIX: Destructor Not Called When DEBUG_NEW Is Defined

	Article: Q155292
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCodeGen kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If new is defined as DEBUG_NEW and a call to new is made for a class that takes
	a reference to another class in the member initialization, then the destructor
	is not called for the referenced class for versions 4.0, 4.1, and 4.2.
	
	This is illustrated in the output from the following example:
	
	  ClassA Constructor
	  ClassB Constructor
	  ClassB Destructor
	
	The destructor for ClassA is not called.
	
	NOTE: The Visual C++ 5.0 compiler generates the following error if you try to
	compile the sample code:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\ehexcept.c', line 516)
	
	RESOLUTION
	==========
	
	The best way to work around the problem is to move the new statement to be
	within the body of the constructor. For example,
	
	     ClassC() {
	        mClassB = new ClassB("Goodbye");
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3 and Visual C++ 6.0.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /D_DEBUG
	     */ 
	     #include <afx.h>
	     #include <iostream.h>
	
	     #ifdef _DEBUG
	     #define new DEBUG_NEW
	     #endif
	
	     class ClassA {
	     public:
	         ClassA(const char *) { cout<< "ClassA Constructor" << endl; }
	         ~ClassA()            { cout<< "ClassA Destructor"  << endl; }
	     };
	
	     class ClassB {
	     public:
	         ClassB(const ClassA&){ cout << "ClassB Constructor" << endl;}
	         ~ClassB()            { cout << "ClassB Destructor"  << endl;}
	     };
	
	     class ClassC {
	     public:
	         ClassB *mClassB;
	         ClassC()
	              :mClassB(new ClassB("Goodbye") )    // Error
	         {
	         //    mClassB = new ClassB("Goodbye");   // Workaround
	         }
	         ~ClassC() { delete mClassB; }
	     };
	
	     void main() {
	         ClassC TestClassInstance;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCodeGen kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbVS97sp3fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
