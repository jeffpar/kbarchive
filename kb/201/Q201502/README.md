---
layout: page
title: "Q201502: PRB: Duplicate Control Boxes in MDIForm When Using Status Bar"
permalink: kb/201/Q201502/
---

## Q201502: PRB: Duplicate Control Boxes in MDIForm When Using Status Bar

	Article: Q201502
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbMDI kbStatBar kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working with a Visual Basic project that contains a MDIform, and
	there are status bars on both the MDIForm and its child form, in order to
	display only one status bar when the active child form is maximized, the visible
	property of the status bar on the MDIForm is set to False. When a child form is
	open and maximized and another child form is opened, two sets of control boxes
	display.
	
	CAUSE
	=====
	
	This problem is caused by the incorrect calculation of the frame size. When the
	active child form is maximized, the MDIForm's status bar is not visible.
	However, when another form is opened and displayed, the status bar on the
	MDIForm is displayed and then hidden again, which causes the incorrect
	calculation of the frame size.
	
	RESOLUTION
	==========
	
	Prevent the Visible property of the status bar on the MDIForm from being changed
	to be True when at least one child form is maximized.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Add MDI Formand then click the Open button to
	  add a multiple document interface (MDI) Form to the project.
	
	3. From the Project menu, choose Components, and select "Microsoft Windows
	  Common controls X.X" from the components list and then click OK.
	
	4. Change Form1's MDIChild property to True.
	
	5. Add a StatusBar control to both Form1 and to MDIForm1.
	
	6. Double click "MDIForm1" from the project window to make it the current form.
	
	7. From the Tools menu, choose Menu Editor. Create a menu item specifying "Open"
	  in the Caption text box and "mnuOpen" in the Name text box. Click OK.
	
	8. From the Project menu, choose Project1 Properties and change the Startup
	  Object to MDIForm1.
	
	9. Add the following code to the General Declarations section of MDIForm1:
	
	        Option Explicit
	
	        Private Sub mnuOpen_Click()
	           Dim frm As Form
	           Set frm = New Form1
	           frm.Display Me
	        End Sub
	
	        Public Property Let ShowStatusbar(bShowStatusbar As Boolean)
	           On Error Resume Next
	           If bShowStatusbar = True Then
	              Me.StatusBar1.Visible = True
	           Else
	              Me.StatusBar1.Visible = False
	           End If
	        End Property
	
	10. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private m_ParentForm As MDIForm
	
	        Public Sub Display(ParentForm As MDIForm)
	           Set m_ParentForm = ParentForm
	           Me.Show
	        End Sub
	
	        Private Sub Form_Resize()
	           If m_ParentForm Is Nothing Then
	              Exit Sub
	           End If
	           If Me.WindowState = 2 Then
	              m_ParentForm.ShowStatusbar = False
	           Else
	              m_ParentForm.ShowStatusbar = True
	           End If
	        End Sub
	
	11. Run the application. Click the "Open" menu item. Maximize the child form.
	  Click the "Open" menu item again and you will notice the duplicated control
	  boxes at the upper right side.
	
	Steps to Work Around the Behavior
	---------------------------------
	
	1. Replace the code in the General Declarations section of MDIForm1 with the
	  following:
	
	        Option Explicit
	
	        Private Sub mnuOpen_Click()
	           Dim frm As Form
	           Set frm = New Form1
	           frm.Display Me
	        End Sub
	
	        Public Property Let ShowStatusbar(bShowStatusbar As Boolean)
	           On Error Resume Next
	           Dim i As Integer
	           Dim bOneMaximized As Boolean
	
	           If bShowStatusbar = True Then
	              If Forms.Count > 0 Then
	                 For i = 0 To Forms.Count - 1
	                    If Forms(i).WindowState = 2 Then
	                       bOneMaximized = True
	                       Exit For
	                    End If
	                 Next i
	              End If
	           End If
	
	           ' Only set it to be true when there is no maximized child form.
	           If bShowStatusbar = True And bOneMaximized = False Then
	              Me.StatusBar1.Visible = True
	           Else
	              Me.StatusBar1.Visible = False
	           End If
	        End Property
	
	2. Run the application and repeat step 11. The application will now behave
	  properly.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbMDI kbStatBar kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
