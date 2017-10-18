---
layout: page
title: "Q258207: BUG: Err Msg in Locals and Watch Window in Visual Basic 6.0"
permalink: kb/258/Q258207/
---

## Q258207: BUG: Err Msg in Locals and Watch Window in Visual Basic 6.0

	Article: Q258207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbDebug kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multiuse class in an ActiveX DLL implements a public non-creatable class that
	has two properties. The class is instantiated in a Standard EXE, and values are
	assigned to the properties of the object just created. When the value of the
	form level object variable is examined in the locals window or a watch is set on
	it, Visual Basic 6.0 displays the following error message:
	
	  <Object does not support this property or method>
	
	In Visual Basic 5.0, the values assigned to the properties are visible.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the File menu, choose Add Project to add a new Visual Basic ActiveX DLL
	  project, creating a Project Group. Class1 is created by default.
	
	3. Set the Instancing property of Class1 to 2-PublicNotCreatable.
	
	4. Add the following code to the General Declarations section of Class1:
	
	  Option Explicit
	
	  Public Property Get X() As Long
	
	  End Property
	
	  Public Property Let X(ByVal X As Long)
	
	  End Property
	
	  Public Property Get Y() As Long
	
	  End Property
	
	  Public Property Let Y(ByVal Y As Long)
	
	  End Property
	
	5. On the Project menu, choose Add Class Module to add another class module to
	  the project. Class2 is created by default. The Instancing property of Class2
	  is set to the default: 5-MultiUse.
	
	6. Add the following code to the General Declarations section of Class2:
	
	  Implements Class1
	  Private m_X As Long
	  Private m_Y As Long
	
	  Private Property Get Class1_X() As Long
	     Class1_X = m_X
	  End Property
	
	  Private Property Let Class1_X(ByVal X As Long)
	     m_X = X
	  End Property
	
	  Private Property Get Class1_Y() As Long
	    Class1_Y = m_Y
	  End Property
	
	  Private Property Let Class1_Y(ByVal Y As Long)
	     m_Y = Y
	  End Property
	
	7. Return to Project1 and add a CommandButton control to Form1.
	
	8. On the Project menu, choose References to open the References dialog box.
	  Check the reference to Project2 and click OK.
	
	9. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Dim point As Class1
	     
	     Set point = New Class2
	     
	     point.X = 10
	     point.y = 20
	     Debug.Print point.X, point.y
	  End Sub
	
	10. Set a break point on the Debug.Print statement, run the project, and click
	  Command1.
	
	11. If the Locals window is not displayed, open the View menu and select the
	  Locals window.
	
	12. In the Locals window, click the plus sign (+) next to "point" to expand the
	  tree view. Note that the following error message appears in the column where
	  the values of x and y should be:
	
	  <Object does not support this property or method>
	
	  In Visual Basic 5.0, the values of x and y are set to 10 and 20,
	  respectively.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbDebug kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
