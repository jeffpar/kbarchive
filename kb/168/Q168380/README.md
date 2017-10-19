---
layout: page
title: "Q168380: BUG: Incorrect Evaluation of Static Member Functions in Debugge"
permalink: /kb/168/Q168380/
---

## Q168380: BUG: Incorrect Evaluation of Static Member Functions in Debugge

	Article: Q168380
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbide kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbvfp600bug
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Function evaluation of static member functions cannot be done in the Watch or
	the QuickWatch window of the debugger. You a wrong value, or get the following
	error message:
	
	  Error:cannot display value
	
	CAUSE
	=====
	
	The expression evaluator in the debugger does not properly distinguish between
	static and non-static methods. The first case listed above appears to be an
	evaluation of a method without a "this" pointer, hence, we get an "Error:cannot
	display value" message. The second case occurs because the debugger is not
	properly distinguishing between static and non-static member functions. The
	"this" pointer is pushed onto the stack to evaluate the static member function,
	which is incorrect.
	
	RESOLUTION
	==========
	
	There is no workaround. Do not attempt to evaluate static member functions from
	within the debugger, either in the watch or quick watch window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following sample code and build it with debug information:
	
	      class A
	      {
	        public:
	        static int bar (int i) {return i;}
	      };
	
	      void main ()
	      {
	        A  f;
	        int j = A::bar(200);
	        int i = f.bar(100);
	      }
	
	Start the debugger by stepping into (F11 key) function "main." In the Watch or
	QuickWatch window, type A::bar(200) and you will get the error message described
	in the SYMPTOMS section. Typing f.bar(100) produces a wrong value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbDebug kbide kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbvfp600bug 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
