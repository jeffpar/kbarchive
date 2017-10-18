---
layout: page
title: "Q198422: PRB: Unable to Display MFC Automation Objects in Watch Window"
permalink: kb/198/Q198422/
---

## Q198422: PRB: Unable to Display MFC Automation Objects in Watch Window

	Article: Q198422
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbMFC kbVBp kbVBp500 kbVBp600 kbVC kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you access an automation server with a dual interface created in Visual C++
	using the Microsoft Foundation Classes (MFC) from a Visual Basic application,
	you cannot display the properties of the automation objects in the Local or
	Watch window when you debug your Visual Basic program.
	
	CAUSE
	=====
	
	The default return value of IDispatch::GetTypeInfo implemented by MFC automation
	servers is E_NOTIMPL.
	
	RESOLUTION
	==========
	
	To resolve the problem, add code in the MFC project to provide access to type
	information from the MFC automation server.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a MFC automation server with dual interface:
	
	1. The Microsoft Developer Network CD that ships with Visual C++ contains the
	  sample ACDUAL. Copy it to a directory on your hard drive.
	
	2. Open the ACDUAL sample in Visual C++.
	
	3. Build the project and run it. The automation server will be registered
	  automatically.
	
	Create a Visual Basic client program:
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose References and add a reference to ACDual.
	
	3. Add a command button to Form1. Command1 is created by default.
	
	4. Paste the following code into the General Declarations section of Form1:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Dim obj As ACDual.Document
	           Dim strtext
	
	           Set obj = CreateObject("ACDual.Document")
	           obj.ShowWindow
	           strtext = obj.Text
	        End Sub
	
	5. Set up a breakpoint on the line "strtext = obj.Text".
	
	6. Run the program. When Form1 displays, click the Command1 button. The program
	  stops on the line "strtext = obj.Text".
	
	7. From the View menu, choose Locals Window to display the Locals window. Click
	  the "+" sign that appears to the left of the "obj" expression.
	
	  If you are using Visual Basic 5.0, you receive the following error message:
	
	  This functionality is not yet implemented.
	
	  If you are using Visual Basic 6.0, the "obj" variable expands, but none of the
	  properties of "Document" are listed.
	
	NOTE: The same behavior occurs when using the Watch Window.
	
	Step to Resolve the Problem
	---------------------------
	
	1. Open the MFC project ACDUAL in Visual C++.
	
	2. Open the AClikDoc.h file.
	
	  Add the following line to the class definition after the line
	  "DECLARE_DYNCREATE(CAutoClickDoc)":
	
	        DECLARE_OLETYPELIB(CAutoClickDoc)
	
	  Add the following line after the "DECLARE_INTERFACE_MAP()" statement in the
	  class CAutoClickDoc definition:
	
	        virtual BOOL GetDispatchIID(IID* pIID);
	
	3. Open the AClikDoc.cpp file.
	
	  Near the top of the file add the following code after the
	  "IMPLEMENT_DYNCREATE(CAutoClickDoc, CDocument)" statement:
	
	        //Replace the following with the GUID for your own typelib.
	        const GUID CDECL BASED_CODE _tlid =
	                  { 0x4B115284, 0x32F0, 0x11cf, { 0xAC, 0x85, 0x44, 0x45,
	        0x53, 0x54, 0x0, 0x0} };
	        const WORD _wVerMajor = 1;
	        const WORD _wVerMinor = 0;
	
	        IMPLEMENT_OLETYPELIB(CAutoClickDoc, _tlid, _wVerMajor, _wVerMinor)
	
	  Add the following line after the "//{ {AFX_DISPATCH_MAP(CAutoClickDoc)"
	  statement:
	
	        DISP_PROPERTY(CAutoClickDoc, "text", m_str, VT_BSTR)
	
	  Add the following line after the "EnableAutomation();" statement in
	  CAutoClickDoc::CAutoClickDoc():
	
	        EnableTypeLib();
	
	  Near the end of the file, add the following code before the
	  "IMPLEMENT_DUAL_ERRORINFO(CAutoClickDoc, IID_IDualAClick)" statement:
	
	        BOOL CAutoClickDoc::GetDispatchIID(IID* pIID)
	        {
	           *pIID = IID_IDualAClick;
	
	           return TRUE;
	        }
	
	4. Rebuild the project and exit Visual C++.
	
	5. Open the Visual Basic client program you created earlier, set the same
	  breakpoint and run the program. When the program stops on the line "strtext =
	  obj.Text", go to the Locals window, and click the "+" sign that appears to
	  the left of the obj symbol in the expression column. The "obj" variable
	  expands and displays all of the properties and their values for "Document"
	  object.
	
	Additional Information
	----------------------
	
	If you develop your own MFC automation server with a dual interface, you need to
	include the following in your project:
	
	- For each property of your automation server, you must implement two sets of
	  functions. One is for the dual interface implementation and the other is for
	  the dispinterface implementation. For example, in the "x" property of the
	  class CAutoClickDoc in then ACDUAL sample code, there are put_x and get_x
	  functions for the dual interface implementation as well as GetX and SetX
	  functions for the dispinterface implementation.
	
	-and-
	
	- Use AfxOleRegisterTypeLib() to register your type library in your code.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbAutomation kbMFC kbVBp kbVBp500 kbVBp600 kbVC kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
