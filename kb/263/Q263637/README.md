---
layout: page
title: "Q263637: BUG: Class Access Specifier Ignored When Creating Temp Objects"
permalink: /kb/263/Q263637/
---

## Q263637: BUG: Class Access Specifier Ignored When Creating Temp Objects

	Article: Q263637
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler incorrectly uses private or protected constructors when temporary
	class objects are created.
	
	NOTE: The compiler generates a C4248 warning if compiled with the /W3 or /W4
	compiler switch.
	
	Please refer to the sample code in the "More Information" section for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: /GX
	  class A
	  {
	  protected:
	      A(int i) : m_i(i) {}
	  private:
	      int m_i;
	  };
	
	  int main()
	  {
	   //A a(8); // Error C2248 here, as expected.
	   A(8);	// No error here. 
	          // Produces warning C4248 with compiler switch /W3 or /W4.    
	
	      try
	      {
	          throw A(8); // No error here also. 
	                 // Produces warning C4248 with compiler switch /W3 or /W4.
	      }
	      catch (A& a)
	      {
	      }
	
	      return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
