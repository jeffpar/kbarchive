---
layout: page
title: "Q198860: HOWTO: Open the Printer Properties Dialog"
permalink: /kb/198/Q198860/
---

## Q198860: HOWTO: Open the Printer Properties Dialog

{% raw %}

	Article: Q198860
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbSpooler kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to create your own printer dialog, you can use the PrinterProperties
	API function to bring up a printer's properties dialog. Your users can then make
	most of the same changes they could if they brought up this dialog by hand. The
	only difference will be that some tabs may be missing.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton and a ListBox to the Form.
	
	3. Paste the following code into the Form's module:
	
	        Option Explicit
	
	        Private Declare Function PrinterProperties Lib "winspool.drv" _
	          (ByVal hwnd As Long, ByVal hPrinter As Long) As Long
	
	        Private Declare Function OpenPrinter Lib "winspool.drv" _
	          Alias "OpenPrinterA" (ByVal pPrinterName As String, _
	          phPrinter As Long, pDefault As PRINTER_DEFAULTS) As Long
	
	        Private Declare Function ClosePrinter Lib "winspool.drv" _
	          (ByVal hPrinter As Long) As Long
	
	        Private Type PRINTER_DEFAULTS
	             pDatatype As Long ' String
	             pDevMode As Long
	             pDesiredAccess As Long
	        End Type
	
	        Private Const STANDARD_RIGHTS_REQUIRED = &HF0000
	        Private Const PRINTER_ACCESS_ADMINISTER = &H4
	        Private Const PRINTER_ACCESS_USE = &H8
	        Private Const PRINTER_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED Or _
	           PRINTER_ACCESS_ADMINISTER Or PRINTER_ACCESS_USE)
	
	        Private Sub Form_Load()
	           Dim I As Integer
	
	           ' List all available printers
	           For I = 0 To Printers.Count - 1
	              List1.AddItem Printers(I).DeviceName
	              If Printers(I).DeviceName = Printer.DeviceName Then
	                 List1.Selected(I) = True  ' Select current default printer
	              End If
	           Next I
	        End Sub
	
	        Private Sub List1_Click()
	           Dim Prt As Printer
	
	           ' Find and use the printer just selected in the ListBox
	           For Each Prt In Printers
	              If Prt.DeviceName = List1.Text Then
	                    Set Printer = Prt
	                 Exit For
	              End If
	           Next
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim RetVal As Long, hPrinter As Long
	           Dim PD As PRINTER_DEFAULTS
	
	           PD.pDatatype = 0
	           ' Note that you cannot request more rights than you have as a user
	           PD.pDesiredAccess = STANDARD_RIGHTS_REQUIRED Or PRINTER_ACCESS_USE
	           PD.pDevMode = 0
	           RetVal = OpenPrinter(Printer.DeviceName, hPrinter, PD)
	           If RetVal = 0 Then
	               MsgBox "OpenPrinter Failed!"
	           Else
	               RetVal = PrinterProperties(Me.hwnd, hPrinter)
	               RetVal = ClosePrinter(hPrinter)
	           End If
	        End Sub
	
	4. Run the project and click on Command1. The Properties dialog will open for
	  the currently selected printer. Note that some tabs may be missing from what
	  you see when bringing up these properties by hand.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Chris E.
	Jolley, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbSpooler kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
