---
layout: page
title: "Q192744: HOWTO: Implement &quot;What's This?&quot; Help in ActiveX Control"
permalink: /kb/192/Q192744/
---

## Q192744: HOWTO: Implement &quot;What's This?&quot; Help in ActiveX Control

	Article: Q192744
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates two methods of implementing "What's This?" Help on an
	ActiveX Control created in Visual Basic. Adding this feature to your control
	allows your users to quickly access the appropriate Help topics for your
	control.
	
	MORE INFORMATION
	================
	
	An ActiveX control can have its own helpfile and help information for the
	contained controls. As per encapsulation rules of COM, it is recommended to have
	separate help system for a UserControl. However, in some cases, it is
	appropriate to inherit the help from the client form in which the ActiveX
	control is sited. This article describes both of these methods.
	
	Method 1: Using Separate Help System for the UserControl
	--------------------------------------------------------
	
	If the UserControl has its own helpfile, then this method is well suited.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new ActiveX Control project. UserControl1 is created by default.
	
	2. Place three controls onto the UserControl.
	
	3. Select Project1 Properties from the Project menu. On the General tab, specify
	  the help file in the Help File Name field.
	
	4. For each control on UserControl1, change the WhatsThisHelpId to a valid value
	  for your help file. Close all open windows.
	
	5. Select Add Project from the Project menu to add a new Standard EXE project.
	  Project2 is created by default.
	
	6. Place UserControl1 onto Form1. Change the BorderStyle property of Form1 to
	  Fixed Single. Set the WhatsThisButton property to True.
	
	7. Run the project. Click on the "?" button in the title bar, and then click on
	  any control in the UserControl. The appropriate help is shown.
	
	  NOTE: When you click on the "?" button and then click on the UserControl in
	  the area not covered by contained controls, no help is shown. This is because
	  the UserControl does not have a WhatsThisHelpId in design-mode. However,
	  WhatsThisHelpId property is available when it is sited, and the client form
	  can assign a value to it. If you want to assign a WhatThisHelpId at
	  design-time itself, cover the UserControl with a Frame or PictureBox and
	  assign the WhatsThisHelpId to that control.
	
	8. Stop the project. Go to Project Properties of Project2 and specify a helpfile
	  for it.
	
	9. Set the WhatsThisHelpId of UserControl1 to a valid value. Add necessary
	  controls and set their WhatsThisHelpId.
	
	10. Run the project. Click on "?," and then click on the UserControl in the area
	  not covered by contained controls. Note that the correct Help is shown. Note
	  that the help information shown comes from Project2's helpfile and not from
	  UserControl1's helpfile. If this behavior is not desired, apply the "Note"
	  from step 7.
	
	Method 2: Inheriting Help from the Client Application
	-----------------------------------------------------
	
	In some cases, such as when the UserControl is simple, it may not have its own
	help file. In this case it is desirable to inherit the help system provided by
	the client application.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new ActiveX Control project. UserControl1 is created by default.
	
	2. Place three controls onto the UserControl.
	
	3. Select Add Project from the Project menu to add a new Standard EXE project.
	  Project2 is created by default.
	
	4. Place UserControl1 onto Form1. Change the BorderStyle property of Form1 to
	  Fixed Single. Set the WhatsThisButton property to True.
	
	5. Select Project2 Properties from the Project menu. On the General tab, specify
	  the help file in the Help File Name field.
	
	6. Set the WhatsThisHelpId of UserControl11 to a valid value. Add necessary
	  controls to Form1 and set their WhatsThisHelpId.
	
	7. Run Project2. Click on "?" and click on UserControl11 in the area not covered
	  by contained controls. The specified help topic is displayed. If any
	  contained control is clicked, no help topic will be displayed. To achieve
	  this effect implement the following steps:
	
	  a. In the General Declarations section of UserControl1, add the following
	     code:
	
	           Public Property Get HelpFile() As String
	             HelpFile = App.HelpFile
	           End Property
	
	           Public Property Let HelpFile(ByVal vNewValue As String)
	             If Dir(vNewValue) = "" Then
	                 Err.Raise 53  ' File not found
	             Else
	                 App.HelpFile = vNewValue
	             End If
	           End Property
	
	           Public Sub InheritHelp(Optional nWhatsThisHelpId As Integer)
	
	             Dim cTemp As Control
	             If nWhatsThisHelpId = 0 Then
	                 nWhatsThisHelpId = UserControl.Extender.WhatsThisHelpID
	             End If
	
	             For Each cTemp In Controls
	                 On Error Resume Next  ' Ignore errors in next statement
	                 cTemp.WhatsThisHelpID = nWhatsThisHelpId  ' some controls
	                                  ' may not have WhatsThisHelpid property
	                 On Error GoTo 0  ' Turn off error handling
	             Next
	
	           End Sub
	     
	
	  b. In the client Form's General Declaration section, add the following code:
	
	           Private Sub Form_Load()
	             UserControl11.HelpFile = App.HelpFile
	             UserControl11.InheritHelp  ' Pass WhatsThisHelpId if different
	                   ' help Id is desired for contained controls
	                   ' By default, the HelpId of usercontrol will be inherited
	           End Sub
	     
	
	8. Run the project. Click on "?" and click anywhere on the UserControl. Note
	  that the specified Help Topic is displayed.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142249 : HOWTO: Implement "What's This?" Help in Visual Basic
	
	  Q180733 : HOWTO: Add Context-Sensitive Help to Your ActiveX Control
	
	  Q173638 : BUG: "What's This?" Button Disappears from MDI Child Forms
	
	Additional query words: kbDSupport kbDSD WhatsThisHelp kbVBp kbVBp400 kbVBp500 kbVBp600 kbCtrl kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
