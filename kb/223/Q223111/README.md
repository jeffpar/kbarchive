---
layout: page
title: "Q223111: FIX: Type Mismatch Error When Compiling UserControl"
permalink: kb/223/Q223111/
---

## Q223111: FIX: Type Mismatch Error When Compiling UserControl

	Article: Q223111
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCompiler kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX DLL that references an ActiveX Usercontrol that has been compiled
	more than nine times will generate the following run-time error:
	
	  Run-time Error '13': Type Mismatch
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Save and compile UserControl1 as Project1.OCX.
	
	3. On the Project menu, click Project1 Properties. Click the Component tab and
	  confirm that Version Compatibility is set to Project Compatibility.
	
	4. On the File menu, click Add Project. Select ActiveX DLL in the Add Project
	  dialog and click OK. (This will create a project group).
	
	5. On the Project menu, click Components. Check the Project1 VBP you just
	  created and click OK.
	
	6. Add the following code to the General Declarations section of Class1:
	
	  Option Explicit
	
	  ' local object reference to the ActiveX Usercontrol
	  Private WithEvents ctlUserControl As Project1.UserControl1
	
	  Public Sub InitControl(ctlControl As Object)
	
	      ' create a local reference to the Usercontrol that
	      ' is passed in through this method. This is where
	      ' the run-time error will be generated.
	      Set ctlUserControl = ctlControl
	      
	      ' display a dialog that the reference was set properly
	      MsgBox "ActiveX Usercontrol Reference Was Set", vbOKOnly, "ActiveX DLL Message"
	      
	  End Sub
	
	7. Save and compile the Project Group.
	
	8. Create a new Standard EXE Project. Form1 is created by default.
	
	9. On the Project menu, click Components. Check the Project1 ocx you just
	  created and click OK.
	
	10. Site a copy of UserControl1 onto the default form (Form1).
	
	11. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  ' local object reference to the ActiveX DLL object
	  Private cTestServer As Object
	
	  Private Sub Form_Load()
	
	      ' create an instance of the ActiveX DLL Object
	      Set cTestServer = CreateObject("Project2.Class1")
	      
	      ' call a method of the object, passing in the usercontrol
	      cTestServer.InitControl UserControl11
	      
	  End Sub
	
	12. Press the F5 key to run the project. The project will load and run without
	  error.
	
	13. Save and compile the Standard EXE.
	
	14. Open the Project Group that contains the ActiveX DLL and ActiveX
	  Usercontrol.
	
	15. Compile the Project Group ten (10) times.
	
	16. Open the Standard EXE project.
	
	17. Press the F5 key to run the project. The run-time error will be generated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCompiler kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
