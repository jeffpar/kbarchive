---
layout: page
title: "Q143071: FIX: CPropertySheet::DoModal() or Create() Causes an Exception"
permalink: /kb/143/Q143071/
---

## Q143071: FIX: CPropertySheet::DoModal() or Create() Causes an Exception

	Article: Q143071
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows 95, calling CPropertySheet::DoModal() or CPropertySheet::Create()
	may cause an exception. The output window displays a message saying
	"First-chance exception in <program.exe> (COMCTL32.DLL): 0xC0000005:
	Access Violation."
	
	There is a second related problem. If the call to DoModal() or Create() is inside
	a try/catch(...) block, you will get an error saying "This program has performed
	an illegal operation..." If you click the Details button, it will say
	"<PROGRAM> caused a stack fault in module MSVCR40D.DLL at..."
	
	CAUSE
	=====
	
	Before a property page is created, it changes the style of the dialog resource
	to the required style. Because resources are generally read-only, this causes an
	exception.
	
	The stack fault problem is caused by a bug in the C++ exception handling routine.
	When the exception occurs and it is trapped by a try/catch(...) block, it is not
	forwarded on to the operating system. This leads to unpredictable results.
	
	RESOLUTION
	==========
	
	The first-chance exception can be ignored because it is safely handled by the
	operating system.
	
	A workaround for the stack fault problem is to use C++ exception handling with
	specific exception types or use structured exception handling where the access
	violation exception is passed through to the operating system.
	
	Sample Code to Demonstrate Workaround to Stack Fault Problem
	------------------------------------------------------------
	
	     /* Compile options needed:  default
	     */ 
	
	     /***** this code will cause unpredictable results *****/ 
	     try
	     {
	         sheet.DoModal();
	     }
	     catch(...)
	     {
	     }
	
	     /***** this code is OK *****/ 
	     try
	     {
	         if (0 == sheet.DoModal())
	             throw "DoModal() failed!";
	     }
	     catch(char * str)
	     {
	         TRACE ("Exception thrown: %s\n", str);
	     }
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 5.0 and with Comctl32.dll
	included with Internet Explorer 3.2 and later.
	
	REFERENCES
	==========
	
	This is also documented in the Vcread.wri readme file.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
