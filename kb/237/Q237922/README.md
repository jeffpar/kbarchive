---
layout: page
title: "Q237922: BUG: User Defined Type Causes &quot;Class Not Registered&quot; Error Msg"
permalink: kb/237/Q237922/
---

## Q237922: BUG: User Defined Type Causes &quot;Class Not Registered&quot; Error Msg

	Article: Q237922
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbAppSetup kbCtrl kbDeployment kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A User control has a Public User Defined Type (UDT). The User control has a
	Public function that has the UDT in the function declaration as either an
	argument or the return type. This User control, Control A, is then referenced in
	another User control, Control B. Control B is used in a standard EXE and
	distributed to another computer. If a new Visual Basic project on the second
	computer references Control B, when Control B is instantiated on a form, the
	following error occurs:
	
	  Class not registered. Looking for object with CLSID: {...}
	
	CAUSE
	=====
	
	The CLISID of the OCA file for Control A is being used to reference the UDT.
	This is incorrect. The OCA file should only be used at design time.
	
	RESOLUTION
	==========
	
	Define all UDTs in a separate ActiveX DLL and reference this DLL in both User
	controls, Control A and Control B, and the Standard EXE project. When the
	Standard EXE project is distributed, the ActiveX DLL is distributed as well.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic ActiveX Control project. UserControl1 is created by
	  default.
	
	2. Add the following code to the General Declarations section of UserControl1:
	
	  Public Type UdtType
	      strHello As String
	  End Type
	
	  Public Function udtFunction() As UdtType
	      udtFunction.strHello = "Hello World"
	  End Function
	
	3. On the Project menu, select Project1 properties, and change the Project name
	  to "ControlA" (without the quotation marks).
	
	4. From the File menu, select Make ControlA.ocx to compile the control.
	
	5. From the Project menu, select ControlA properties, select the Component tab,
	  and set the Binary Compatibility to "ControlA.OCX" (without the quotation
	  marks).
	
	6. From the File menu, select Add Project, and create a new Visual Basic ActiveX
	  Control project. UserControl1 is created by default.
	
	7. Make sure that the ControlA design window is closed, and then site an
	  instance of ControlA on UserControl1.
	
	8. Add a Command button and paste the following code into the code window of
	  UserControl1:
	
	  Private Sub Command1_Click()
	    Dim myUdtA As UdtType
	    myUdtA.strHello = "Bye"
	    myUdtA = UserControl11.udtFunction
	    MsgBox myUdtA.strHello
	  End Sub
	
	9. On the Project menu, select Project2 properties, and change the Project name
	  to "ControlB" (without the quotation marks).
	
	10. From the File menu, select Make ControlB.ocx to compile the control.
	
	11. From the Project menu, select ControlB properties, select the Component tab,
	  and then set the Binary Compatibility to ControlB.ocx.
	
	12. From the File menu, select Add Project, and start a new Visual Basic
	  Standard EXE project. Form1 is created by default.
	
	13. Make sure the UserControl design windows are closed and site an instance of
	  ControlB on Form1.
	
	14. From the File menu, select Make Project3.exe, and then compile the
	  executable.
	
	15. Run the Package and Deployment Wizard (PDW). Be sure to include both
	  ControlA.ocx and ControlB.ocx. Install the application Package on another
	  machine.
	
	16. Start a new Visual Basic Standard EXE project on the new machine. Form1 is
	  created by default.
	
	17. On the Project menu, select Components, select ControlB, and then click OK.
	
	18. Site an instance of ControlB on Form1 and note that the error mentioned in
	  the "Symptoms" section occurs.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q224185 BUG: User Defined Type in Public Function of a User Control Fails to
	  Run
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbAppSetup kbCtrl kbDeployment kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
