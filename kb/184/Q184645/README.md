---
layout: page
title: "Q184645: HOWTO: Create Lightweight Controls with Visual Basic 6.0"
permalink: /kb/184/Q184645/
---

## Q184645: HOWTO: Create Lightweight Controls with Visual Basic 6.0

	Article: Q184645
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a lightweight control in Visual Basic
	version 6.0, briefly covers the advantages and limitations of lightweight
	controls, and contains instructions on how to create a sample project that
	demonstrates how lightweight controls use less system resources.
	
	MORE INFORMATION
	================
	
	Lightweight, or windowless controls, are controls that are similar to regular
	controls except that lightweight controls do not have window handles. Because of
	they lack window handles, lightweight controls require less system resources,
	making them ideal for Internet applications, distributed applications, or any
	application where limited system resources may be an issue. Further, lightweight
	controls can be any shape and have true transparency properties.
	
	When you create a lightweight control, the container can hold only other
	lightweight controls. If you try to place a regular control in a lightweight
	user control, you will receive the following error:
	
	  Can't have windowed child controls on a windowless control.
	
	Regular controls always appear on top of lightweight controls because lightweight
	controls use the resources of the parent form. The ZOrder of a regular control
	changes only with respect to other regular controls.
	
	Because lightweight controls do not have a Hwnd property, you cannot use these
	controls with Windows API functions that require an HWnd parameter. The HWnd
	property of the container is used instead, which may result in unpredictable
	results.
	
	To make a control into a lightweight control, set the Windowless property of the
	control to True.
	
	Visual Basic ships with intrinsic lightweight controls and other lightweight
	controls in the ActiveX component file MSWLess.ocx. For a list of these
	intrinsic controls and instructions on how to use the controls in the ActiveX
	component file MSWLess.ocx, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184687 INFO: Lightweight Controls in Visual Basic 6.0
	
	The next section tells you how to create a sample project that contains a
	lightweight control. The sample project demonstrates that a lightweight control
	uses less resources than a regular control.
	
	Creating the Sample Project
	---------------------------
	
	This section shows you how to create the sample project. The project measures the
	amount of time to load and unload a lightweight control as compared to a regular
	control. To create this project, you need to create a Standard EXE project, a
	lightweight control, and a regular control.
	
	To Create the Standard EXE Program
	----------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the following controls to the Form1 form and set the following properties
	  to the appropriate controls:
	
	     Control           Default Name     Property               Setting
	     ---------------------------------------------------------------------
	     Command Button    Command1         Name                    cmdWndLess
	                                        Height                         375
	                                        Left                           120
	                                        Top                            840
	                                        Width                         2535
	
	     Command Button    Command2         Name                        cmdWnd
	                                        Height                         375
	                                        Left                          3000
	                                        Top                            840
	                                        Width                         2535
	
	     TextBox           Text1            Name              txtNumofControls
	                                        Height                         285
	                                        Left                          1680
	                                        Top                            120
	                                        Width                          375
	
	     Label             Label1           Name                lblWndLessLoad
	                                        AutoSize                      True
	                                        Height                         195
	                                        Left                           120
	                                        Top                           1320
	
	     Label             Label2           Name              lblWndLessUnload
	                                        AutoSize                      True
	                                        Height                         195
	                                        Left                           120
	                                        Top                           1680
	
	     Label             Label3           Name                    lblWndLoad
	                                        AutoSize                      True
	                                        Height                         195
	                                        Left                          3000
	                                        Top                           1320
	
	     Label             Label4           Name                  lblWndUnload
	                                        AutoSize                      True
	                                        Height                         195
	                                        Left                          3000
	                                        Top                           1680
	                                        Width                          480
	
	     Label             Label5           Name                 lblStartTicks
	                                        Alignment            Right Justify
	                                        AutoSize                      True
	                                        Caption               Start Ticker
	                                        Height                         195
	                                        Left                          4680
	                                        Top                            480
	                                        Width                          810
	
	     Label             Label6           Name                   lblEndTicks
	                                        Alignment            Right Justify
	                                        AutoSize                      True
	                                        Caption                 End Ticks:
	                                        Height                         195
	                                        Left                          4680
	                                        Top                            120
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	        Private Declare Function GetTickCount Lib "kernel32" () As Long
	        Dim bLoadWnd As Boolean
	        Dim bLoadWndLess As Boolean
	        Dim lTickStart As Long
	        Dim lTickEnd As Long
	        Dim lResult As Long
	        Dim colCtrlWnd As Collection
	        Dim colCtrlWndLess As Collection
	
	        Private Sub cmdWnd_Click()
	        'This event loads and unloads regular controls.
	           Dim tmpCtrlWnd As Control
	           Dim lCounter As Long
	
	           If bLoadWnd = True Then
	              'Load Regular controls.
	              lblWndLoad.Caption = "Loading Regular Controls"
	              lTickStart = GetTickCount
	              lblStartTicks.Caption = "Start: " & CStr(lTickStart) & " ms"
	
	              For lCounter = 1 To Val(txtNumofControls.Text)
	                 Set tmpCtrlWnd = Controls.Add("TestControls.ctrlWnd", _
	                                               "ctrlWnd" & lCounter)
	                 colCtrlWnd.Add tmpCtrlWnd
	                 Set tmpCtrlWnd = Nothing
	                 DoEvents
	              Next
	
	              lTickEnd = GetTickCount
	              lblEndTicks.Caption = "End: " & CStr(lTickEnd) & " ms"
	              lblWndLoad.Caption = "Load Time: " & _
	                                   CStr(lTickEnd - lTickStart) & " ms"
	              bLoadWnd = False
	              cmdWnd.Caption = "Unload Regular Controls"
	
	           Else
	              'Unload regular controls.
	              lblWndUnload.Caption = "Unloading Regular Controls"
	              lTickStart = GetTickCount
	              lblStartTicks.Caption = "Start: " & CStr(lTickStart) & " ms"
	              '  UnLoad controls.
	              For lCounter = colCtrlWnd.Count To 1 Step -1
	                 Controls.Remove colCtrlWnd.Item(lCounter).Name
	                 colCtrlWnd.Remove (lCounter)
	              Next
	              lTickEnd = GetTickCount
	              lblEndTicks.Caption = "End: " & CStr(lTickEnd) & " ms"
	              lblWndUnload.Caption = "Unload Time: " & _
	                                      CStr(lTickEnd - lTickStart) & " ms"
	              bLoadWnd = True
	              cmdWnd.Caption = "Load Regular Controls"
	
	           End If
	
	        End Sub
	
	        Private Sub cmdWndless_Click()
	        'This command button loads and unloads the lightweight controls.
	
	           Dim tmpCtrlWndLess As Control
	           Dim lCounter As Long
	           If bLoadWndLess = True Then
	              lblWndLessLoad.Caption = "Loading Lightweight Controls"
	              lTickStart = GetTickCount
	              lblStartTicks.Caption = "Start: " & CStr(lTickStart) & " ms"
	
	              '  Load controls.
	              For lCounter = 1 To Val(txtNumofControls.Text)
	                 Set tmpCtrlWndLess = _
	                                  Controls.Add("TestControls.ctrlWndLess", _
	                                  "ctrlWndLess" & lCounter)
	                 colCtrlWndLess.Add tmpCtrlWndLess
	                 Set tmpCtrlWndLess = Nothing
	                 DoEvents
	              Next
	
	              lTickEnd = GetTickCount
	              lblEndTicks.Caption = "End: " & CStr(lTickEnd) & " ms"
	              lblWndLessLoad.Caption = "Load Time: " & _
	                                       CStr(lTickEnd - lTickStart) & " ms"
	              bLoadWndLess = False
	              cmdWndless.Caption = "Unload Windowless Controls"
	           Else
	              lblWndLessUnload.Caption = "Unloading Lightweight Controls"
	              lTickStart = GetTickCount
	              lblStartTicks.Caption = "Start: " & CStr(lTickStart) & " ms"
	
	              '  UnLoad controls.
	              For lCounter = colCtrlWndLess.Count To 1 Step -1
	                 Controls.Remove colCtrlWndLess.Item(lCounter).Name
	                 colCtrlWndLess.Remove (lCounter)
	              Next
	
	              lTickEnd = GetTickCount
	              lblEndTicks.Caption = "End: " & CStr(lTickEnd) & " ms"
	              lblWndLessUnload.Caption = "Unload Time: " & _
	                                       CStr(lTickEnd - lTickStart) & " ms"
	              bLoadWndLess = True
	              cmdWndless.Caption = "Load Windowless Controls"
	           End If
	        End Sub
	
	        Private Sub Form_Load()
	           Set colCtrlWnd = New Collection
	           Set colCtrlWndLess = New Collection
	           cmdWndless.Caption = "Load Lightweight Controls"
	           bLoadWndLess = True
	           cmdWnd.Caption = "Load Regular Controls"
	           bLoadWnd = True
	           txtNumofControls.Text = "20"
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. If the
	  form successfully launches, then you have completed creating the standard
	  executable program in this project.
	
	The next section shows you how to create the regular and lightweight controls
	that the standard executable program uses.
	
	To Create the Regular and Lightweight Controls
	----------------------------------------------
	
	1. Add an ActiveX Control project to your project group.
	
	  a. On the File menu, click Add Project. The Add Project dialog box appears.
	
	  b. In the New Tab, select ActiveX Control.
	
	  c. Click Open to add the project to your project group and to close the Add
	     Project dialog box. UserControl1 is created by default.
	
	  d. Change the name of UserControl1 to ctrlWnd. This will be your regular
	     control.
	
	2. Add a combo box to the ctrlWnd control. Save the control.
	
	3. Add another UserControl by completing the following steps. This will be your
	  lightweight control:
	
	  1. On the Project Menu, click Add User Control. The Add User Control dialog
	     box appears with User Control highlighted.
	
	  2. Click Open to add the User Control to the project and close the Add User
	     Control dialog box. UserControl1 is created by default.
	
	  3. Change the name of UserControl1 to ctrlWndLess.
	
	  4. Set the Windowless property to True.
	
	4. Save the control.
	
	5. Rename the Project to TestControls. Save the project.
	
	You have completed creating the ActiveX controls required by this project. To run
	the project, press F5 or from the Run menu, click Start. You can set the number
	of controls and compare the load and unload times.
	
	Additional query words: kbCtrl kbCtrlCreate kbVBp kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
