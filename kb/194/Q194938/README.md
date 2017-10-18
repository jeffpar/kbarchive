---
layout: page
title: "Q194938: HOWTO: Monitor TCP/IP Ports in Use"
permalink: kb/194/Q194938/
---

## Q194938: HOWTO: Monitor TCP/IP Ports in Use

	Article: Q194938
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to monitor whether a TCP/IP port is in use.
	
	MORE INFORMATION
	================
	
	There are times when it is necessary to know or monitor whether a port is in
	use. The following sample demonstrates how this is done.
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add 1 Timer, 2 Labels, 1 Listbox, 1 TextBox and 2 CommandButton controls to
	  Form1. Position Label1 above Text1 and Label2 above List1.
	
	3. Set the Sorted property of List1 to True.
	
	4. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Const PortsChecked = 200
	
	        Private Sub Command1_Click()
	           Timer1.Enabled = True
	           Timer1.Interval = 1000
	        End Sub
	
	        Private Sub Command2_Click()
	           Timer1.Interval = 0
	           Timer1.Enabled = False
	        End Sub
	
	        Private Sub Timer1_Timer()
	           Dim X As Integer
	
	           List1.Clear
	           For X = 1 To PortsChecked
	              DoEvents
	              Text1.Text = X
	              WinSock1.LocalPort = X
	              On Error Resume Next
	              WinSock1.Listen  ' If we get an error, the port is busy.
	              If Err.Number = 10048 Then
	                 List1.AddItem X  ' Log Active port # to list box.
	                 Err.Number = 0
	              End If
	
	              WinSock1.Close
	           Next X
	        End Sub
	
	        Private Sub Form_Load()
	           Label1.Caption = "Checking Port #"
	           Label2.Caption = "Ports In Use"
	           Command1.Caption = "Start"
	           Command2.Caption = "End"
	           Text1.Locked = True
	        End Sub
	
	5. Run the program. If, for example, you have an active DCOM connection, you
	  should see 135 displayed in the ListBox.
	
	  To change the number of ports checked, modify the constant PortsChecked. To
	  change the amount of time between samples modify the constant TimerInt.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173619 PRB: Winsock Control Generates Error 10048 - Address in Use
	
	Also search Visual Basic Help for "Using the Winsock Control."
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Richard T. Edwards, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
