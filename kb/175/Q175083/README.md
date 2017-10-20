---
layout: page
title: "Q175083: HOWTO: Print Line-by-Line to a Printer"
permalink: /kb/175/Q175083/
---

## Q175083: HOWTO: Print Line-by-Line to a Printer

{% raw %}

	Article: Q175083
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-SEP-2001
	
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
	
	Printing page-by-page is the Windows standard; however, it is sometimes
	desirable to print to a printer line-by-line rather than page-by-page. One
	advantage to printing line-by-line is that if there is a power failure while
	printing, the data lost is one log item, at most. The Visual Basic Printer
	object does not support this mode, but the Win32 API accomplishes this handily.
	
	MORE INFORMATION
	================
	
	This technique will work only when printing to a local line printer, typically a
	dot matrix printer. Laser and Ink Jet printers are page printers and will not
	print in single line mode.
	
	
	1. Create a new Visual Basic project and place a CommandButton on Form1.
	
	2. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Type DOCINFO
	            pDocName As String
	            pOutputFile As String
	            pDatatype As String
	        End Type
	
	        Private Declare Function ClosePrinter Lib "winspool.drv" (ByVal _
	           hPrinter As Long) As Long
	        Private Declare Function EndDocPrinter Lib "winspool.drv" (ByVal _
	           hPrinter As Long) As Long
	        Private Declare Function EndPagePrinter Lib "winspool.drv" (ByVal _
	           hPrinter As Long) As Long
	        Private Declare Function OpenPrinter Lib "winspool.drv" Alias _
	           "OpenPrinterA" (ByVal pPrinterName As String, phPrinter As Long, _
	            ByVal pDefault As Long) As Long
	        Private Declare Function StartDocPrinter Lib "winspool.drv" Alias _
	           "StartDocPrinterA" (ByVal hPrinter As Long, ByVal Level As Long, _
	           pDocInfo As DOCINFO) As Long
	        Private Declare Function StartPagePrinter Lib "winspool.drv" (ByVal _
	           hPrinter As Long) As Long
	        Private Declare Function WritePrinter Lib "winspool.drv" (ByVal _
	           hPrinter As Long, pBuf As Any, ByVal cdBuf As Long, _
	           pcWritten As Long) As Long
	
	        Dim lhPrinter As Long
	
	        Private Sub Command1_Click()
	               Dim lReturn As Long
	               Dim lpcWritten As Long
	               Dim sWrittenData As String
	               sWrittenData = "How's that for Magic !!!!" & vbCrLf
	               lReturn = WritePrinter(lhPrinter, ByVal sWrittenData, _
	                  Len(sWrittenData), lpcWritten)
	        End Sub
	
	        Private Sub Form_Load()
	            Dim lReturn As Long
	            Dim lDoc As Long
	            Dim MyDocInfo As DOCINFO
	
	            lReturn = OpenPrinter(Printer.DeviceName, lhPrinter, 0)
	            If lReturn = 0 Then
	                MsgBox "The Printer Name you typed wasn't recognized."
	                Exit Sub
	            End If
	            MyDocInfo.pDocName = "AAAAAA"
	            MyDocInfo.pOutputFile = vbNullString
	            MyDocInfo.pDatatype = vbNullString
	            lDoc = StartDocPrinter(lhPrinter, 1, MyDocInfo)
	            Call StartPagePrinter(lhPrinter)
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Dim lReturn As Long
	
	            lReturn = EndPagePrinter(lhPrinter)
	            lReturn = EndDocPrinter(lhPrinter)
	            lReturn = ClosePrinter(lhPrinter)
	        End Sub
	
	3. Make the logging printer the default and run the application. Every time you
	  click Command1, a line should be immediately printed to your printer.
	
	WARNING: Pressing the End button on the toolbar or selecting the Run / End menu
	option will not close the current print job and may block further jobs from
	printing to that printer. This is because the code to close the print job is in
	the Form_Unload event. This event is not executed when the sample is closed by
	the design environment. Always terminate the application by clicking the Close
	button, using the System menu, or entering Alt-F4.
	
	REFERENCES
	==========
	
	For more information about using the Win32 API to send data directly to the
	printer, please see the following article in the Microsoft Knowledge Base:
	
	  Q154078 : HOWTO: Send Raw Data to a Printer Using the Win32 API from VB
	
	Additional query words: receipt
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
