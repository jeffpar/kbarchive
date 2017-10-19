---
layout: page
title: "Q298141: HOWTO: Send a PCL or PostScript File Directly to a Printer w/ VB"
permalink: /kb/298/Q298141/
---

## Q298141: HOWTO: Send a PCL or PostScript File Directly to a Printer w/ VB

	Article: Q298141
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbSample kbAPI kbPrinting kbSpooler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSuppor
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to bypass the printer driver and send a PCL or
	PostScript file directly to a printer from Visual Basic.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place two Command Buttons, Command1 and Command2, onto Form1.
	
	3. Add the following code to the code window of Form1:
	
	  Option Explicit
	    
	  ' Modify FILE_NAME to point to a valid path and file name on your system.
	  Const FILE_NAME = "C:\TEST.PRN"  
	
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
	
	  Private Sub Command1_Click()
	    Dim lhPrinter As Long
	    Dim lReturn As Long
	    Dim lpcWritten As Long
	    Dim lDoc As Long
	    Dim sWrittenData As String
	    Dim MyDocInfo As DOCINFO
	    lReturn = OpenPrinter(Printer.DeviceName, lhPrinter, 0)
	    If lReturn = 0 Then
	        MsgBox "The Printer " & Printer.DeviceName & " could not be opened!"
	        Exit Sub
	    End If
	    MyDocInfo.pDocName = "My Document"
	    MyDocInfo.pOutputFile = vbNullString
	    MyDocInfo.pDatatype = vbNullString
	    lDoc = StartDocPrinter(lhPrinter, 1, MyDocInfo)
	    Call StartPagePrinter(lhPrinter)
	    sWrittenData = "How's that for Magic !!!!" & vbFormFeed
	    lReturn = WritePrinter(lhPrinter, ByVal sWrittenData, _
	       Len(sWrittenData), lpcWritten)
	    lReturn = EndPagePrinter(lhPrinter)
	    lReturn = EndDocPrinter(lhPrinter)
	    lReturn = ClosePrinter(lhPrinter)
	  End Sub
	
	  Private Sub Command2_Click()
	    Dim lhPrinter As Long
	    Dim lReturn As Long
	    Dim lpcWritten As Long
	    Dim lDoc As Long
	    Dim sWrittenData As String
	    Dim MyDocInfo As DOCINFO
	    
	    Dim NumLoops As Long     ' number of 8k loops
	    Dim LeftOver As Integer  ' amount of file left
	    Dim i As Integer         ' counter for loops
	    Const MaxSize = 8192     ' maximum buffer size
	    
	    lReturn = OpenPrinter(Printer.DeviceName, lhPrinter, 0)
	    If lReturn = 0 Then
	        MsgBox "The Printer Name you typed wasn't recognized."
	        Exit Sub
	    End If
	    MyDocInfo.pDocName = "My Document"
	    MyDocInfo.pOutputFile = vbNullString
	    MyDocInfo.pDatatype = vbNullString
	    lDoc = StartDocPrinter(lhPrinter, 1, MyDocInfo)
	    ' Make sure that FILE_NAME points to a valid PCL or PostScript file on your system.
	    Open FILE_NAME For Binary As #1
	    
	    ' Calculate size of file and amount left over.
	    NumLoops = LOF(1) \ MaxSize
	    LeftOver = LOF(1) Mod MaxSize
	    
	    For i = 1 To NumLoops
	      sWrittenData = Input(MaxSize, #1)
	      lReturn = WritePrinter(lhPrinter, ByVal sWrittenData, _
	                    Len(sWrittenData), lpcWritten)
	    Next
	    
	    ' Grab what is left over.
	    If LeftOver <> 0 Then
	      sWrittenData = Input(LeftOver, #1)
	      lReturn = WritePrinter(lhPrinter, ByVal sWrittenData, _
	                        Len(sWrittenData), lpcWritten)
	    End If
	    
	    Close #1
	    lReturn = EndDocPrinter(lhPrinter)
	    lReturn = ClosePrinter(lhPrinter)
	  End Sub
	
	  Private Sub Form_Load()
	    Command1.Caption = "Print a String"
	    Command2.Caption = "Print a File"
	  End Sub
	
	4. Assign the constant FILE_NAME in the code with your own PCL or PostScript
	  path and file name.
	
	5. Run the project. Click Print a String, which prints a string to the printer.
	  Click Print a File to read and print a PCL or PostScript file directly to the
	  printer.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q154078 HOWTO: Send Raw Data to a Printer Using the Win32 API from Visual
	  Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbSample kbAPI kbPrinting kbSpooler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
