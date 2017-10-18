---
layout: page
title: "Q272532: PRB: DatePicker Value Is Incorrect When You Enter Invalid Date"
permalink: kb/272/Q272532/
---

## Q272532: PRB: DatePicker Value Is Incorrect When You Enter Invalid Date

	Article: Q272532
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbVBp kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form that contains a DateTimePicker control is loaded, and you change the
	date from today's date to "00", the date should revert to its original value
	(today's date) because the date is invalid. However, on Windows 95, Windows 98
	and Windows Millennium Edition (Me), the data that is contained in the value
	property displays the last day of the previous month instead of the today's
	date.
	
	This behavior does not occur on Windows 2000 or Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this problem, test the Day property, and set it to the original value
	if an invalid date is entered as follows:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click Components, and then select the Windows Common
	  Controls 2 check box. Click OK.
	
	3. On the form, find an instance of the DateTimePicker control.
	
	4. In the code module of Form1, paste the following code:
	
	  Dim s As String
	
	  Private Sub DTPicker1_Change()
	      If DTPicker1.Day = 0 Then
	          DTPicker1.Value = s
	      Else
	          s = DTPicker1.Value
	      End If
	  End Sub
	
	  Private Sub Form_Load()
	      s = DTPicker1.Value
	  End Sub
	
	5. Press the F5 key to run the project. You see today's date in the
	  DateTimePicker text area.
	
	6. Change the date to "0" (without the quotation marks) or "00" (without the
	  quotation marks). The date reverts to today's date.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a system that runs Window 95, Windows 98, or Windows Me, start a new
	  project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click Components, and then select the Windows Common
	  Controls 2 check box. Click OK.
	
	3. On the form, find an instance of the DateTimePicker control.
	
	4. Press F5 to run the project, and you see today's date in the DateTimePicker
	  text area.
	
	5. Change the date to "0" (without the quotation marks). This value immediately
	  changes to "00" as the control tries to verify the date. Then, the date in
	  DateTimePicker changes to "0" instead of today's date.
	
	6. If you examine the data that is contained in the value property, as
	  demonstrated in the code below, the data displays the last day of the
	  previous month.
	
	  Private Sub Form_Click()
	     MsgBox DTPicker1.Value
	  End Sub
	
	Additional query words: dtpicker
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbVBp kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
