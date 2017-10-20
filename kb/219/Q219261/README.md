---
layout: page
title: "Q219261: PRB: VB References Dialog Doesn't List an MFC DLL Automation Svr"
permalink: /kb/219/Q219261/
---

## Q219261: PRB: VB References Dialog Doesn't List an MFC DLL Automation Svr

{% raw %}

	Article: Q219261
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you first build an MFC DLL automation server, the Microsoft Visual Basic
	References dialog box fails to display it until you browse and select the server
	manually.
	
	CAUSE
	=====
	
	Visual Basic looks for the type library of the automation server to be
	registered. In the case of an MFC DLL automation server, Visual Basic does not
	register it by default. Once you browse and select the server DLL, Visual Basic
	registers the type library and thereafter it will be listed by the References
	dialog box.
	
	RESOLUTION
	==========
	
	Add code to the server to register the Type library along with the server
	registration. Use the following steps to add the Type library registration
	code.
	
	1. In your Microsoft Visual C++ project, go to the FileView and right-click on
	  the ODL file and select Settings. In the text box that says UUID File, type
	  in the file name. For example, if the ODL file is Test.odl, name the file
	  Test_i.c. Also, in the Output header file name box, enter the corresponding
	  header file name, for example, Test_i.h.
	
	2. Click OK and compile the ODL file. This generates the Test_i.c and Test_i.h
	  files in the current project directory.
	
	3. Go to the function DllRegisterServer. If the project name is Test, this will
	  be in Test.cpp file.
	
	4. Add the following code to the function:
	
	  // by exporting DllRegisterServer, you can use regsvr.exe
	  STDAPI DllRegisterServer(void)
	  {
	  	AFX_MANAGE_STATE(AfxGetStaticModuleState());
	  	
	  	COleObjectFactory::UpdateRegistryAll();
	  	
	           // Add this line to register the typelib  
	  	AfxOleRegisterTypeLib(AfxGetInstanceHandle(), LIBID_Test);
	  	
	  	return S_OK;
	  }
	
	5. Add the following two #includes to the top of Test.cpp file. LIBID_Test is
	  defined in the Test_i.c file.
	
	  #include "Test_i.h"
	  #include "Test_i.c"
	
	  Also you would need to do a
	
	  #include <afxctl.h>
	
	  to your Stdafx.h file. This is where "AfxOleRegisterTypeLib" is declared.
	
	6. Compile and run regsvr32 on the server. This registers the typelib
	  information also and the Visual Basic reference box shows it without any
	  effort.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Microsoft Visual C++, MFC Appwizard (DLL), generate a simple DLL.
	
	2. In Step 1, choose Regular DLL using Shared MFC DLL support and also
	  Automation support. Accept all the other default values.
	
	3. Build this DLL. This process does not register the server as it does in the
	  case of an ActiveX control.
	
	4. Register the server by calling Regsvr32.exe "Full path to the server". As an
	  alternate choice, you can go to the Tools menu and select Register Control
	  when the project is open. This registers the server.
	
	5. Open Microsoft Visual Basic and create a Standard EXE project.
	
	6. Go to the Project menu and select References.
	
	7. You would not see the server you just created listed there. If you use the
	  browse button and select the DLL of your server, it adds that entry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
