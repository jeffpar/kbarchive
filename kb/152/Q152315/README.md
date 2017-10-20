---
layout: page
title: "Q152315: PRB: When to Call AfxDaoTerm() in an Automation Server"
permalink: /kb/152/Q152315/
---

## Q152315: PRB: When to Call AfxDaoTerm() in an Automation Server

{% raw %}

	Article: Q152315
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT: 4.0 4.1 4.2 4.2b 5.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC DLLs and OCXs that use DAO need to call AfxDaoTerm() to terminate DAO before
	their ExitInstance() function is called. MFC, by default, calls AfxDaoTerm()
	from within CWinApp::ExitInstance().
	
	An automation server may expose multiple objects that use DAO. Calling
	AfxDaoTerm() when one of these objects is destructed may have the undesired
	effect of terminating DAO for all other objects that may still be in use.
	
	RESOLUTION
	==========
	
	MFC keeps an internal object lock count of automation objects in the module
	state. The constructor of each object exposed by the automation server calls
	AfxOleLockApp() to increment this count and calls AfxOleUnlockApp() to decrement
	it.
	
	An MFC DLL automation server gets unloaded when the AfxOleCanExitApp() function
	returns TRUE. This function checks the object lock count and returns TRUE if no
	objects are in use. The default implementation of DllCanUnloadNow() in an
	AppWizard-generated automation server looks like this:
	
	     STDAPI DllCanUnloadNow(void)
	     {
	         AFX_MANAGE_STATE(AfxGetStaticModuleState());
	         return AfxDllCanUnloadNow();
	     }
	
	Add the following code to terminate DAO when no automation objects are in use any
	longer:
	
	     STDAPI DllCanUnloadNow(void)
	     {
	         AFX_MANAGE_STATE(AfxGetStaticModuleState());
	
	         if (AfxOleCanExitApp())
	             AfxDaoTerm();
	
	         return AfxDllCanUnloadNow();
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information, please refer to the following articles in the Microsoft
	Knowledge Base:
	
	  Q143084 FIX: Problems with Using the MFC DAO Classes in a .DLL or .OCX
	
	  Q149889 PRB: Assertion or Problems Using DAO in a DLL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS NT: 4.0 4.1 4.2 4.2b 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
