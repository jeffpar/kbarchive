---
layout: page
title: "Q152073: PRB: Wrapper Class for Automation Object May Be Incomplete"
permalink: /kb/152/Q152073/
---

## Q152073: PRB: Wrapper Class for Automation Object May Be Incomplete

	Article: Q152073
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbAutomation kbCOMt kbMFC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An automation object may support a statement and function with the same name
	even though the statement and function will most likely have different
	behaviors. Class Wizard will not recognize both the statement and function.
	However, when generating a new class from the object's type library, the Class
	Wizard will generate a function and prototype for a single function. This
	generated function will not give you the ability to call both the function and
	the statement.
	
	CAUSE
	=====
	
	The similarly-named function and statement will share a single entry in the .odl
	file for the object and a single entry in the type library. The Class Wizard
	does the best job it can and generates a single function and prototype based on
	this entry.
	
	RESOLUTION
	==========
	
	Given adequate documentation for the statement and function, it is possible to
	modify the wrapper class by hand so that the statement or function may be
	called. If the parameter list for the statement and function vary, which may be
	the case if optional parameters are used, the wrapper function can be
	overridden. Otherwise, the wrapper for the statement and function will need
	different names.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An example of this problem is WordBasic's Bold. The Bold statement turns the
	bold character formatting on and off just as selecting the Bold Toolbar button
	in Word does. The Bold() function returns a short indicating whether all, some,
	or none of the characters in a selection are formatted as bold. Visual Basic
	will call the function if a return value is assigned to the Bold() call.
	Otherwise, it will call the Bold statement.
	
	The .odl statement for Bold is as follows:
	
	     [id(0x00008048), helpstring("Makes the selection bold (toggle)"),
	     helpcontext(0x00001d48)] short Bold([in, optional] VARIANT On);
	
	The Class Wizard will generate the following function and prototype using this
	information:
	
	     short Bold(const VARIANT& On);
	
	     short WordBasic::Bold(const VARIANT& On)
	     {
	         short result;
	         static BYTE parms[] =
	             VTS_VARIANT;
	         InvokeHelper(0x8048, DISPATCH_METHOD, VT_I2, (void*)&result, parms,
	             &On);
	         return result;
	     }
	
	Using this function will result in the WordBasic Bold() function being called. In
	order to call the statement, you could define BoldStatement() and BoldFunction()
	functions. In this case, however, because there is no reason to pass a parameter
	to the Bold() function, the parameter lists vary and it is possible to overload
	the wrapper functions as follows:
	
	     void Bold(const VARIANT& On);
	     short Bold();
	
	     void WordBasic::Bold(const VARIANT& On)
	     {
	         static BYTE parms[] =
	             VTS_VARIANT;
	         InvokeHelper(0x8048, DISPATCH_METHOD, VT_EMPTY, NULL, parms,
	             &On);
	     }
	
	     short WordBasic::Bold()
	     {
	         short result;
	         static BYTE parms[] =
	             VTS_VARIANT;
	         InvokeHelper(0x8048, DISPATCH_METHOD, VT_I2, (void*)&result, NULL);
	         return result;
	     }
	
	REFERENCES
	==========
	
	Microsoft Office Developer's Kit - PART 2 Word Basic Reference, Statements and
	Functions.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 automation variant
	
	======================================================================
	Keywords          : kbole kbAutomation kbCOMt kbMFC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
