---
layout: page
title: "Q190519: BUG: UserControl Causes VB IDE to Crash on Shutdown"
permalink: kb/190/Q190519/
---

## Q190519: BUG: UserControl Causes VB IDE to Crash on Shutdown

	Article: Q190519
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A UserControl is added to a Visual Basic project. When you try to exit the IDE,
	Visual Basic causes an Invalid Page Fault (IPF) and terminates. This is preceded
	by the error message:
	
	  The memory could not be "written".
	
	CAUSE
	=====
	
	The problem is that the UserControl has two module level variables, one that
	holds onto a reference to the UserControl itself (Set m_oMe = Me) and another
	that holds a reference to control's parent (Set m_oParent = Extender.Parent).
	This causes a circular reference count on the control and the container. When
	you try to exit the IDE, Visual Basic destroys the design-time form container
	and attempts to release the UserControl instance. Because the control has a
	reference to itself and the form, Visual Basic cannot properly destroy the
	objects; consequently an Invalid Page Fault occurs.
	
	RESOLUTION
	==========
	
	Avoid setting module level variables that reference both a control and its
	container. Setting the variables to Nothing in the UserControl_Terminate event
	will not avoid the error because the Terminate event will never fire if the
	control has a circular reference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Copy the following code to the Code window of UserControl1:
	
	        Option Explicit
	        Private m_oMe As Object
	        Private m_oParent As Object
	
	        Private Sub UserControl_InitProperties()
	           Set m_oMe = Me
	           Set m_oParent = UserControl.Extender.Container
	           Let UserControl.BackColor = &HFF0000
	        End Sub
	
	        Private Sub UserControl_Terminate()
	           Set m_oMe = Nothing
	           Set m_oParent = Nothing
	        End Sub
	
	3. [Optional] Save and compile Project1.
	
	4. Close UserControl1's design window.
	
	5. Choose Add Project from the File menu and add a Standard EXE project to the
	  project group. Form1 is created by default.
	
	6. Add the UserControl you created to Form1.
	
	7. Now exit the Visual Basic IDE, by pressing ALT+Q or the close button on the
	  title bar. When prompted to save changes, select "No". The IDE will crash on
	  exit.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189156 : BUG: Crash When Closing Application That Uses ActiveX DLL
	
	  Q184332 : BUG: UserControl in VB4 or VC++ 5.0 Container Causes IPF on Exit
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbCtrlCreate kbIDE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
