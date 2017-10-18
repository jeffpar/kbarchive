---
layout: page
title: "Q243534: BUG: Optim. Gives Wrong Result for Inline Func Returning double"
permalink: kb/243/Q243534/
---

## Q243534: BUG: Optim. Gives Wrong Result for Inline Func Returning double

	Article: Q243534
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbCPPonly kbVC600bug
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a method of one class calls, as an input argument, an inline function that
	creates an object of another class and returns a double, the compiler may
	generate incorrect results.
	
	CAUSE
	=====
	
	This occurs when compiled with the /Ob1 (Only _inline) or /Ob2 (Any Suitable)
	optimizations turned on.
	
	RESOLUTION
	==========
	
	There are two possible ways to work around this problem:
	
	- Compile the project with the /Ob1 (Only _inline) or /Ob2 (Any Suitable)
	  optimizations turned off.
	
	- Store the results of the function that is used as an input parameter in a
	  temporary variable. Pass the temporary variable as the argument to the method
	  of the class that returns a double.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem and the second workaround:
	
	  // test.cpp
	  // cl /GX /O2 /Ob1 test.cpp
	  #include <iostream.h>
	
	  class secClass
	  {
	  public:
	  	secClass(const char *) {};
	  	~secClass() {};
	  private:
	  };
	
	  class firstClass
	  {
	  public:
	  	firstClass() {}
	  	void setNum(double num) { cout << "The number is " << num << endl; };
	  };
	
	  double getNum(secClass str)
	  {
	  	return 7.0;
	  }
	
	  int main(int argc, char* argv[])
	  {
	  	firstClass f;
	          cout << "Incorrect Results" << endl;
	  	f.setNum(getNum("Test"));
	  	//Second workaround.
	          cout << "Correct Results" << endl;
	          double d = getNum("Test");
	  	f.setNum(d);
	          return 0;
	  }
	
	The output of the above program is as follows:
	
	  Incorrect Results
	  The number is 1.84959e-307
	  Correct Results
	  The number is 7
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbCPPonly kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
