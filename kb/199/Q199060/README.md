---
layout: page
title: "Q199060: PRB: ATL Service Run from the IDE Doesn't Log Events to Console"
permalink: /kb/199/Q199060/
---

## Q199060: PRB: ATL Service Run from the IDE Doesn't Log Events to Console

{% raw %}

	Article: Q199060
	Product(s): Microsoft C Compiler
	Version(s): 2.0,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbService kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ATL COM AppWizard to generate an NT service may not produce code that
	behaves as expected. When the AppWizard-generated service is started as a local
	server, the message strings passed to CServiceModule::LogEvent() are not
	displayed to the console. When started as a service, the messages are logged
	into the applications' event log.
	
	CAUSE
	=====
	
	In the generated code CServiceModule::LogEvent() calls _putts() in to write the
	message to stdout, but stdout is not setup by default.
	
	RESOLUTION
	==========
	
	To remedy this behavior, the developer should do one of the following:
	
	- Edit CServiceModule::Start() to initialize stdout as desired (that is,
	  redirect it either to a console or to a file). The code to do this is in the
	  More Information section below.
	- Replace _putts() with ATLTRACE().
	- Redirecting the output of the application to a file, in a console window. For
	  example:
	
	  "MyApp.exe > output.txt" (without the quotation marks)
	
	- In CServiceModule::LogEvent(), remove the "if" statement and _putts()
	  statement, so that the output always goes to the application log file.
	
	MORE INFORMATION
	================
	
	To correct this problem, the developer should edit CServiceModule::Start() as
	follows:
	
	  inline void CServiceModule::Start()
	     {
	         SERVICE_TABLE_ENTRY st[] =
	        {
	             { m_szServiceName, _ServiceMain },
	             { NULL, NULL }
	         };
	         if (m_bService && !::StartServiceCtrlDispatcher(st))
	         {
	             m_bService = FALSE;
	         }
	         if (m_bService == FALSE)
	         {
	             // Allocate a new console.
	             AllocConsole();
	             // Redirect stdout to the console.
	             freopen("CONOUT$", "wta+", stdout);
	             Run();
	             // Free the console.
	             FreeConsole();
	         }
	     }
	
	If the logs should be sent to a file, just redirect stdout to that file, without
	allocating/freeing the console.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project with ATL COM AppWizard. In step 1, specify Server Type
	  as Service(EXE).
	
	2. Build the project.
	
	3. Execute the project either from the command line or from the IDE.
	
	  Notice that the message "Service started" does not appear anywhere.
	
	4. Make the changes outlined in the first resoultion.
	
	5. Build and run.
	
	  You'll notice a new console displaying the message "Service started."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbService kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
