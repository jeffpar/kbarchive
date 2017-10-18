---
layout: page
title: "Q158552: PRB: CPropertySheet::DoModal() or Create() Causes an Exception"
permalink: kb/158/Q158552/
---

## Q158552: PRB: CPropertySheet::DoModal() or Create() Causes an Exception

	Article: Q158552
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
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
	
	Calling CPropertySheet::DoModal() or CPropertySheet::Create() in Windows 95 may
	cause an exception. The Output window displays a message that says the
	following:
	
	  First-chance exception in <program.exe> (Comctl32.dll): 0xC0000005:
	  Access Violation.
	
	Newer versions (version 4.70) of the Comctl32.dll do not have this problem.
	
	CAUSE
	=====
	
	The CommCtl32.dll tries to modify the resources for the pages. Since the
	resources are normally in read-only sections this throws an Exception that can
	be caught in the application. However, if the application does not catch this
	exception then the OS will handle this exception correctly.
	
	RESOLUTION
	==========
	
	The first-chance exception can be ignored because it is safely handled by the
	operating system.
	
	One way to prevent the exception from being thrown is to make the resources
	read/write. You can do this by adding a linker setting of "/SECTION:.rsrc,rw."
	
	A second way to prevent the exception being thrown is to change the font of the
	pages so they are not "MS Sans Serif". MFC checks the dialog template font for
	the page. If it is not "MS Sans Serif" then it makes a copy of the resource in
	read/write memory, modifies the font and passes this to the C mCtl32.dll. So
	when the dll writes to the template for the page it is writing to read/write
	memory and hence exception is not thrown.
	
	Another way to prevent the exception from affecting your application is not to
	have the call for creating the property sheet in a try/catch(...) block. Instead
	catch particular exceptions in the catch block.
	
	If the property sheet is part of an OLE Automation Server that can be invoked
	through a method of the server then you have to make the resources read/write,
	using either of the first two methods described above, since OLE catches the
	exception.
	
	NOTE: Making the resources Read/Write can cause the resources to be written to a
	page file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: default
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
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126630 Resource Sections are Read-only
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
