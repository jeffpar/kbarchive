---
layout: page
title: "Q281424: FIX: Bad Code Is Generated with /Og Enabled"
permalink: /kb/281/Q281424/
---

## Q281424: FIX: Bad Code Is Generated with /Og Enabled

	Article: Q281424
	Product(s): Microsoft C Compiler
	Version(s): 6.0sp4
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600fix kbDSupport
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0sp4 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0sp4 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0sp4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the global optimizations (/Og) compiler option enabled, the Visual C++ 6.0
	Service Pack 4 (SP4) compiler may generate incorrect code for return values to
	functions. See the "More Information" section for a detailed reproducible
	sample.
	
	CAUSE
	=====
	
	This is a regression bug that occurred in Visual Studio Service Pack 4.
	
	RESOLUTION
	==========
	
	To work around this bug, do one of the following:
	
	- Replace the following line in the sample code
	
	  Test (MyClass::Testfunc(), y, z);
	
	  with the following:
	
	  MyClass x = MyClass::Testfunc();
	  Test (x , y, z); 
	
	  -or-
	
	- In the sample code, use #pragma optimize("g", off) before the main function
	  to disable the optimizations only in main.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual Studio 6.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  // Test.cpp<BR/>
	  // Command line : cl test.cpp /Og
	
	  #include <iostream.h>
	
	  class MyClass
	  {
	  public:
	     unsigned long mID;
	     MyClass(unsigned long id);
	     MyClass(const MyClass & other);
	     MyClass & operator = (const MyClass & other) ;
	     unsigned long getID()
	     {
	  	   return mID;
	     }
	     static MyClass Testfunc()
	     {
	  	   return 0;
	     };
	  };
	
	  MyClass::MyClass (unsigned long id /* = 0 */)
	  {
	     mID = id;
	  }
	
	  MyClass::MyClass(const MyClass & other) : mID(other.mID) 
	  {
	     cout << "In Copy Constructor" << endl;
	  }
	
	  MyClass & MyClass::operator = (const MyClass & other) 
	  {
	      cout << "In Operator =" << endl;
	      mID = other.mID;
	      return *this;
	  }
	
	  void Test (MyClass x, int y, int z)
	  {
	     cout << "In Function Test" << endl;
	     cout << x.getID() << ' ' << y << ' ' << z << endl;
	  }
	
	  int main ()
	  {
	     int y = 1;
	     int z = 2;
	     Test (MyClass::Testfunc(), y, z);
	     // expected output is 0 1 2
	     return 0;
	  }
	
	The following is the expected output:
	
	In Function Test
	0 1 2
	
	Actual Output:
	
	In Function Test
	1245052 0 2
	
	Additional query words: kbbug kbfix
	
	======================================================================
	Keywords          : kbCompiler kbVC600fix kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVC600SP4
	Version           : :6.0sp4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
