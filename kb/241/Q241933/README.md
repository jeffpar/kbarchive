---
layout: page
title: "Q241933: PRB: Unsupported Automation Type Compile Error"
permalink: /kb/241/Q241933/
---

## Q241933: PRB: Unsupported Automation Type Compile Error

	Article: Q241933
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL kbDLL kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ATL ActiveX DLL server in Microsoft Visual Basic, if one of the
	server's methods uses parameters with type UINT, then calling this method
	generates the compile error message:
	
	  Function or interface marked as restricted, or the function uses an
	  Automation type not supported in Visual Basic.
	
	CAUSE
	=====
	
	As indicated in the error message, the server is using an Automation type not
	supported in Visual Basic. Check the MSDN document "Type not supported in Visual
	Basic" for more information.
	
	RESOLUTION
	==========
	
	If you are at the design or early development stage for your server, you are
	encouraged to change the interface prototypes so that only types supported by
	Visual Basic are used.
	
	If you already released your product or you are using third-party servers, you
	can work around the problem most of the time with late binding in your Visual
	Basic code. The reason why late binding works is that Visual Basic does not
	check the type at the compile time for late binding objects and Visual Basic
	uses IDispatch->Invoke at run time for late binding objects.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can follow the steps below to reproduce the behavior.
	
	Steps to Create an ATL Server
	-----------------------------
	
	1. Open Visual C++ 6.0.
	
	2. Under the File menu, click New and choose ATL COM AppWizard from the project
	  type list. Type "ATLUINT" (without the quotation marks) in the Project Name
	  text box. Click OK and then click Finish. Click OK to close the New Project
	  Information dialog box.
	
	3. In Class View, right-click ATLUINT classes and choose New ATL Object from the
	  pop-up menu. Click Next and then type "ATLObj" (without the quotation marks)
	  in the Short Name text box. Click OK and a new ATL object is created.
	
	4. In Class View, right-click on IATLObj and choose Add Method from the pop-up
	  menu. Type "Hello " (without the quotation marks) in the Method Name text box
	  and type "[in] UINT n" (without the quotation marks) in the Parameters text
	  box.
	
	5. Build the project and the DLL is automatically registered.
	
	Steps to Create the Visual Basic Client
	---------------------------------------
	
	1. Create a new Visual Basic standard EXE project. Form1 is created by default.
	
	2. Under Project, select References and select ATLUINT 1.0 type library from the
	  list. Click OK.
	
	3. Put the following code to the code window of Form1:
	
	  Private Sub Form_Click()
	      Dim obj As ATLUINTLib.ATLObj
	      Set obj = New ATLUINTLib.ATLObj
	      obj.Hello 5
	  End Sub
	
	4. Press the CTRL+F5 key combination to run with full Compile. Note that you see
	  the error message:
	
	  Function or interface marked as restricted, or the function uses an
	  Automation type not supported in Visual Basic.
	
	5. Change the line:
	
	      Dim obj As ATLUINTLib.ATLObj
	
	to be:
	
	      Dim obj As Object
	
	6. Press the CTRL+F5 key combination to run with full Compile. Now you do not
	  see the error message.
	
	NOTE: Although you can work around the compile-time error message with late
	binding, you still need to make sure that the information passed in can be
	interpreted by the server correctly; otherwise, you might get a run-time error
	or get incorrect results.
	
	NOTE: You only need to use late binding when you try to access the methods that
	have parameter types unsupported by Visual Basic.
	
	REFERENCES
	==========
	
	MSDN topic "Type not supported in Visual Basic"
	
	For additional information on an alternative to using late binding, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q189133 HOWTO: Make C DLL More Accessible to VB with a Type Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbATL kbDLL kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
