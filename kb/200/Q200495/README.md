---
layout: page
title: "Q200495: FIX: Cannot Create bad_typeid Object with /MD"
permalink: kb/200/Q200495/
---

## Q200495: FIX: Cannot Create bad_typeid Object with /MD

	Article: Q200495
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600fixkbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to create an object of type bad_typeid in an application built with
	the DLL version of the C run-time library (/MD ), you get the following link
	errors:
	
	  error LNK2001: unresolved external symbol "__declspec(dllimport) public:
	  virtual __thiscall std::bad_typeid::~bad_typeid(void)"
	  (__imp_??1bad_typeid@std@@UAE@XZ)
	
	  error LNK2001: unresolved external symbol "__declspec(dllimport) public:
	  __thiscall std::bad_typeid::bad_typeid(char const *)"
	  (__imp_??0bad_typeid@std@@QAE@PBD@Z)
	
	RESOLUTION
	==========
	
	Link with any of the the static versions of the C run-time library (/MT or /ML).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the problem:
	
	      //Sample.cpp
	      //Compile options :  /MD
	      #include <typeinfo>
	      using namespace std;
	      int main ()
	      {
	          bad_typeid bid;
	          return 0;
	      }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
