---
layout: page
title: "Q180624: BUG: Invalid Page Fault Occurs with More than 34 DDE Channels"
permalink: /kb/180/Q180624/
---

## Q180624: BUG: Invalid Page Fault Occurs with More than 34 DDE Channels

{% raw %}

	Article: Q180624
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed if you attempt to open more than 34 DDE
	(Dynamic Data Exchange) channels:
	
	  VB5 caused an invalid page fault in module KRNL386.EXE at 0002:000033C6
	
	This error message is displayed only in the 32-bit versions of Visual Basic
	running under Windows 95.
	
	RESOLUTION
	==========
	
	Use OLE automation instead of DDE. OLE automation is the current and future
	support technology at Microsoft. For more information about OLE automation see
	the following:
	
	- "Programming with Components" in the Visual Basic Programmer's Guide
	
	- OLE Automation: Communicating with Other Applications at
	  http://www.microsoft.com/AccessDev/Articles/comothap.htm
	
	To be safe, you should also reuse connections rather than open additional ones to
	keep the total number of open connections below 30.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The number of DDE channels required to reproduce this problem varies by machine
	and configuration and is not predictable. This behavior occurs in as few as 34
	channels to as many as 72 channels.
	
	The next section shows how to create a sample project that demonstrates this
	behavior. In order to observe the behavior, you need to create an Excel
	spreadsheet to act as a server.
	
	Create the Excel Spreadsheet
	----------------------------
	
	1. Start Excel. Book1 is created by default.
	
	2. Enter a number in the cell R1C1.
	
	3. Save the spreadsheet using the default filename Book1.xls, and then Minimize
	  Excel.
	
	After you create and save the Excel spreadsheet, create the Visual Basic project
	to reproduce the behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the CommandButton, Label, and Text Box to Form1. Set the Index property
	  of the Label control to 0.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Const MAX_CONNECTIONS = 98
	
	        Private Sub Form_Load()
	        'Creates a grid composed of labels.
	
	           Dim i As Integer
	           Dim n As Integer
	           Dim j As Integer
	           Dim temptop As Integer
	           Dim templeft As Long
	
	           templeft = 120
	           temptop = 120
	
	           ' Set initial properties of label used as template for dynamically
	           ' created labels.
	           Label1(0).BorderStyle = 1
	           Label1(0).Caption = ""
	           Label1(0).Visible = False
	           Label1(0).Move 120, 120, 1200, 300
	
	           ' Size form to handle array of MAX_CONNECTIONS labels and other
	           ' controls.
	           Me.Height = (Label1(0).Height * 14) + (60 * 15) + 980
	           Me.Width = (Label1(0).Width * 7) + (60 * 8) + 200
	           Me.Caption = "DDE Connection Limit Test"
	
	           'Set initial properties of Command1.
	           Command1.Caption = "Number of DDE connections"
	           Command1.Move 1420, Me.Height - 920, 4800, 400
	           Command1.Default = True
	
	           'Set initial properties of Text1.
	           Text1.Text = ""
	           Text1.Move 120, Command1.Top, 1200, Command1.Height
	
	           'Two nested For loops create grid of labels.
	           For i = 1 To 14 'Outer loop moves down the form,
	              For j = 1 To 7 'inner loop moves across the form.
	                 n = n + 1 'supplies you with array index.
	                 Load Label1(n)
	                 Label1(n).Visible = True
	                 Label1(n).Top = temptop
	                 Label1(n).Left = templeft
	                 templeft = templeft + Label1(0).Width + 60
	              Next j
	              templeft = 120
	              temptop = temptop + Label1(0).Height + 60
	           Next i
	
	           Me.Show
	           Text1.SetFocus
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim iValue As Integer
	           Dim i As Integer
	
	           'Get the value entered by the user.
	           iValue = Val(Text1)
	
	           'Test for invalid value.
	           If iValue < 1 Or iValue > MAX_CONNECTIONS Then
	              MsgBox "Enter a number between 1 and " & MAX_CONNECTIONS
	              Exit Sub
	           End If
	
	           'Remove any existing connections and reset all captions.
	           For i = 1 To MAX_CONNECTIONS
	              Label1(i).LinkMode = vbLinkNone
	              Label1(i).Caption = ""
	           Next i
	
	           'Start DDE conversations for the chosen number of labels.
	           For i = 1 To iValue
	              Label1(i).LinkTopic = "EXCEL|Book1.xls"
	              Label1(i).LinkItem = "R1C1"
	              Label1(i).LinkMode = vbLinkAutomatic
	           Next i
	        End Sub
	
	4. On the Run menu, click Start, or press the F5 key to start the program. In
	  the Text Box, enter a number between "34" (without the quotation marks) and
	  "98" (without the quotation marks) and click the CommandButton. The result is
	  that an Invalid Page Fault occurs.
	
	Additional query words: IPF GPF Crash Dynamic Data Exchange DDE Link
	
	======================================================================
	Keywords          : kbinterop kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
