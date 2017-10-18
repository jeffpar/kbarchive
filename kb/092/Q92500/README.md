---
layout: page
title: "Q92500: PRB: exit() Function Does Not Clean Up Nonstatic Objects"
permalink: kb/092/Q92500/
---

## Q92500: PRB: exit() Function Does Not Clean Up Nonstatic Objects

	Article: Q92500
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC5
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application calls the exit(), _exit(), _cexit(), or _c_exit() functions,
	the destructors for any temporary or automatic objects that exist at the time of
	the call are not called. The text below provides a sample program to demonstrate
	this behavior.
	
	MORE INFORMATION
	================
	
	An automatic object is an object that is defined in a function where the object
	is not declared to be "static." A temporary object is an object created by the
	compiler.
	
	To destruct an automatic object before calling exit(), explicitly call the
	destructor for the object, as follows:
	
	  myObject.myClass::~myClass();
	
	Sample Code
	-----------
	
	  /* Compile options needed:  for 16-bit - /f /Od /Zi
	  *                           for 32-bit - none
	  */ 
	
	  #include <iostream.h>
	  #include <process.h>
	
	  class myClass
	  {
	     int nVal;
	
	  public:
	     myClass();
	     void View() {cout << nVal << "\n";};
	     ~myClass();
	  };
	
	  myClass::myClass()
	  {
	     nVal = 99;
	  }
	
	  myClass::~myClass()
	  {
	     cout << "Destructor has been called\n";
	  }
	
	  void main(void)
	  {
	     myClass myObject;
	
	     myObject.View();
	
	  // Remove the comment from the next line to call the destructor
	  // myObject.myClass::~myClass();
	
	     exit(0);
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
