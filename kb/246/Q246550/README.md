---
layout: page
title: "Q246550: BUG: Local Static Variables Not Reinitialized after an Exception"
permalink: kb/246/Q246550/
---

## Q246550: BUG: Local Static Variables Not Reinitialized after an Exception

	Article: Q246550
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCPPonly kbVC600bug kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the constructor for a local static variable throws an exception, the
	constructor is not called the next time there is a call to the function in which
	the variable is declared.
	
	CAUSE
	=====
	
	The Visual C++ Compiler has not correctly implemented the behavior dictated by
	the ANSI C++ specification. The ANSI specification, section 6.7 states in part:
	
	  "The zero-initialization [construction] of all local objects with static
	  storage duration is performed before any other initialization takes place.
	  ... such an object is initialized the first time control passes through its
	  declaration; such an object is considered initialized upon the completion of
	  its initialization [upon completion of its constructor] . If the
	  initializations exits by throwing an exception, the initialization is not
	  complete, so it will be tried again [constructor called again] the next time
	  control enters the declaration. ..."
	
	RESOLUTION
	==========
	
	There are several potential ways to workaround the behavior, including removing
	the static keyword from the variable declaration, having the class constructor
	catch and handle the exception, not using exceptions, using a separate
	initialization function to emulate proper behavior, and so forth. The actual
	approach you choose will be greatly dependent upon your individual project. See
	the "More Information" section for an example of the separate initialization
	approach.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code sample illustrates the problem. Define the "workaround to see
	the separate initialization function approach.
	
	  // compile options:  /GX 
	  #include <iostream>
	
	  class MyClass
	  {
	  public:
	       MyClass() { throw(int()); }
	       MyClass(const MyClass& cClass) {}
	       MyClass& operator=(const MyClass &co) {return *this;}
	       virtual ~MyClass() {}
	  };
	
	  #ifdef WORKAROUND
	  class MyClassWrapper : public MyClass
	  {
	  public:
	  // Here, m_InitFlag is set to false in the initialize list
	  // (Before MyClass() is called), and then set to true
	  // in the body of the constructor (after MyClass() is called)
	       MyClassWrapper() : m_InitFlag(false) {m_InitFlag = true;}
	       void init()
	       {
	            if(!m_InitFlag)
	            {
	                 MyClass tmp;
	                 *((MyClass *)this) = tmp;
	                 m_InitFlag = true;
	            }
	       }
	  private:
	  	bool m_InitFlag;
	  };
	  #endif //WORKAROUND
	
	  #ifdef WORKAROUND
	  typedef MyClassWrapper StaticClass;
	  #else
	  typedef MyClass StaticClass;
	  #endif //WORKAROUND
	
	  void MyFunction()
	  { 
	  	static StaticClass MyObject;
	  #ifdef WORKAROUND
	  	MyObject.init();
	  #endif //WORKAROUND
	  }
	
	  int main()
	  {
	       using std::cout;
	
	       for(int i = 0; i < 2; i++)
	       {
	            try
	            {
	                 MyFunction();
	                 cout << "No Exceptions Thrown / All Exceptions Handled\n";
	            }
	            catch(int)
	            {
	                 cout << "An int Exception Was Thrown and Not Handled\n";
	            }
	       }
	
	       return 0;
	  }
	  // end program
	
	Output:
	
	An int Exception Was Thrown and Not Handled
	No Exceptions Thrown / All Exceptions Handled
	
	Output if WORKAROUND defined:
	
	An int Exception Was Thrown and Not Handled
	An int Exception Was Thrown and Not Handled
	
	Additional query words: Exception Constructor ANSI
	
	======================================================================
	Keywords          : kbCPPonly kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
