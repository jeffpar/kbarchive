---
layout: page
title: "Q137343: INFO: VB Automation of Visual C++ Server Using OBJ1.OBJ2.prop Sy"
permalink: /kb/137/Q137343/
---

## Q137343: INFO: VB Automation of Visual C++ Server Using OBJ1.OBJ2.prop Sy

{% raw %}

	Article: Q137343
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbole kbAutomation kbCOMt kbMFC kbVBp kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is often necessary to access properties within nested objects exposed by OLE
	Automation. The Visual Basic syntax is:
	
	     OBJ1.OBJ2.Property
	
	This article demonstrates the creation of a simple OLE Automation server with
	Visual C++, accessible from Visual Basic, that exposes such an object.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to create a Visual C++ OLE Automation server
	that allows Visual Basic to use the OBJ1.OBJ2.Property syntax.
	
	Steps to Create the Visual C++ OLE Automation Server
	----------------------------------------------------
	
	1. Create an AppWizard-generated project called AutoServ with OLE Automation
	  enabled.
	
	2. Once the project has been generated, start ClassWizard.
	
	3. Click the OLE Automation tab.
	
	4. Click the Add Class button, enter the following values, and then click Create
	  Class:
	
	  Class Name:    nested
	  Class Type:    CCmdTarget
	  Check:         OLE Automation
	
	5. Click the ClassWizard's OLE Automation tab. Set the Class Name to nested,
	  click the Add Property button, enter the following values, and then click
	  OK:
	
	  External Name: Value
	  Type:          long
	
	6. Change the Class Name in ClassWizard to CAutoServDoc. If you are prompted to
	  save changes, click Yes. Then click the Add Method button, enter the
	  following values, and click OK:
	
	  External Name: Nested
	  Return Type:   LPDISPATCH
	
	7. Click OK to accept the additions created by ClassWizard.
	
	8. Open the project's AutoServDoc.h file, and add the following line to the
	  beginning of the file:
	
	     #include "nested.h"
	
	9. To the same file, add a public member variable m_nested of type nested. A
	  pointer mechanism could have been used to maintain the nested class; however,
	  for this example, the chosen method will automatically create and destroy the
	  nested object within the Documents constructor and destructor respectively.
	
	10. Open the project's nested.h file, and modify the class so that the
	  constructor and destructor are public methods.
	
	11. Open the projects AutoServDoc.cpp file, and modify the Nested Method as
	  follows:
	
	      LPDISPATCH CAutoServDoc::Nested()
	      {
	         //TODO: Add your dispatch handler code here
	         return m_nested.GetIDispatch(TRUE);
	      }
	
	12. Build the project, and then run AutoServ.exe to register the server.
	
	Steps to Test the Server in Visual Basic
	----------------------------------------
	
	1. Start a new project in Visual Basic that will be used to test the OLE
	  Automation server.
	
	2. On the View menu, click Code.
	
	3. In the Object combo box, select (general).
	
	4. Enter the following code:
	
	     Dim Server As object
	
	5. Select Form in the Object combo box. Modify the Sub procedure as follows:
	
	     Sub Form_Load ()
	        Set Server = CreateObject("autoserv.document")
	        Server.Nested.Value = 10
	        x = Server.Nested.Value
	     End Sub
	
	6. Add x and Server.Nested.Value to the Visual Basic watch window, so that you
	  can observe the changes while stepping into the Visual Basic program.
	
	Additional query words: 1.50 1.51 1.52 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20 4.00 4.10 vc vb client controller
	
	======================================================================
	Keywords          : kbcode kbole kbAutomation kbCOMt kbMFC kbVBp kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
