---
layout: page
title: "Q180645: FIX: Cannot Change Page Settings During Print Job"
permalink: kb/180/Q180645/
---

## Q180645: FIX: Cannot Change Page Settings During Print Job

	Article: Q180645
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp500 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Printer object, you cannot change any page settings after using
	the NewPage method. This includes Orientation, Height, Width, PaperSize,
	PrintQuality, and PaperBin.
	
	RESOLUTION
	==========
	
	You cannot change page settings while printing to a page; however, you should be
	able to call the NewPage method, then make page setting changes before printing
	again. This allows the code to switch orientations, paper trays, paper size, and
	so forth, between pages. A bug in the Visual Basic 5.0 version of the NewPage
	method prematurely sets a flag that indicates printing on the new page has
	already started. So when you try to set a page property, such as Orientation,
	the following error is generated:
	
	  Run-time error '396':
	  '<Property>' property cannot be set within a page
	
	where <Property> is the property you were trying to set.
	
	Alternatively, you can print with API functions exclusively without using the
	Printer object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	When printing via the Visual Basic Printer object, replacing NewPage with EndDoc
	is the only workaround to this problem. While this works as expected in many
	circumstances, this is not always an acceptable solution in multi- user
	environments. This article provides an API solution to this problem. Because
	this code creates a Device Context (DC) for your printer and you can only print
	to one DC at a time, it has the limitation that you cannot use the Printer
	object at the same time. So, you must end this document before returning to
	using the Printer object.
	
	Please note that when using duplex printing, the call to ResetDC can cause
	duplexing to start over on some printer drivers. This can produce blank pages
	giving the appearance that the duplexing is skipping pages or not working at
	all. Because this is happening in the driver, the way to resolve this is to use
	a driver that does not exhibit this behavior.
	
	You can use Printer.hDC instead of getting a new DC with CreateDC, but
	Printer.hDC might have some problems that can be encountered if you expand on
	this code. Article Q175535, listed in the "References" section below, describes
	one such problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE Project. Form1 is created by default.
	
	2. Add the following code to the Form_Load event:
	
	        Printer.PaperBin = vbPRBNLower ' 2
	        Printer.Print "Testing Lower Bin"
	        Printer.NewPage
	        Printer.PaperBin = vbPRBNUpper ' 1
	        Printer.Print "Testing Upper Bin"
	        Printer.EndDoc
	
	3. Run the project. This produces the message "Run-time error '396': 'Paperbin'
	  property cannot be set within a page". Clicking on "Debug" will highlight the
	  line following the NewPage.
	
	Example to Change Page Settings During a Print Job
	--------------------------------------------------
	
	1. Create a Standard EXE Project. Form1 is created by default.
	
	2. Add a CommandButton to Form1, and paste the following code into the form's
	  Declaration section:
	
	        Option Explicit
	
	        ' Constants for DEVMODE.
	        Private Const CCHDEVICENAME = 32
	        Private Const CCHFORMNAME = 32
	
	        ' Constants for DocumentProperties() call.
	        Private Const DM_MODIFY = 8
	        Private Const DM_IN_BUFFER = DM_MODIFY
	        Private Const DM_COPY = 2
	        Private Const DM_OUT_BUFFER = DM_COPY
	
	        ' Constants for Orientation.
	        Private Const DMORIENT_PORTRAIT = 1
	        Private Const DMORIENT_LANDSCAPE = 2
	
	        ' Constants for printer bin.
	        Private Const DMBIN_UPPER = 1
	        Private Const DMBIN_LOWER = 2
	
	        ' Constants for DMFIELDS (which fields did you change?).
	        Private Const DM_ORIENTATION = &H1
	        Private Const DM_DEFAULTSOURCE = &H200
	
	        Private Type DOCINFO
	            cbSize As Long
	            lpszDocName As String
	            lpszOutput As String
	        End Type
	
	        Private Type DEVMODE
	            dmDeviceName(1 To CCHDEVICENAME) As Byte
	            dmSpecVersion As Integer
	            dmDriverVersion As Integer
	            dmSize As Integer
	            dmDriverExtra As Integer
	            dmFields As Long
	            dmOrientation As Integer
	            dmPaperSize As Integer
	            dmPaperLength As Integer
	            dmPaperWidth As Integer
	            dmScale As Integer
	            dmCopies As Integer
	            dmDefaultSource As Integer
	            dmPrintQuality As Integer
	            dmColor As Integer
	            dmDuplex As Integer
	            dmYResolution As Integer
	            dmTTOption As Integer
	            dmCollate As Integer
	            dmFormName(1 To CCHFORMNAME) As Byte
	            dmUnusedPadding As Integer
	            dmBitsPerPel As Integer
	            dmPelsWidth As Long
	            dmPelsHeight As Long
	            dmDisplayFlags As Long
	            dmDisplayFrequency As Long
	        End Type
	
	        Private Declare Function OpenPrinter Lib "winspool.drv" Alias _
	            "OpenPrinterA" (ByVal pPrinterName As String, phPrinter As _
	            Long, ByVal pDefault As Long) As Long
	
	        Private Declare Function ClosePrinter Lib "winspool.drv" _
	            (ByVal hPrinter As Long) As Long
	
	        Private Declare Function DocumentProperties Lib "winspool.drv" _
	            Alias "DocumentPropertiesA" (ByVal hwnd As Long, _
	            ByVal hPrinter As Long, ByVal pDeviceName As String, _
	            pDevModeOutput As Any, pDevModeInput As Any, _
	            ByVal fMode As Long) As Long
	
	        Private Declare Function ResetDC Lib "gdi32" Alias "ResetDCA" _
	            (ByVal hdc As Long, lpInitData As Any) As Long
	
	        Private Declare Function CreateDC Lib "gdi32" Alias "CreateDCA" _
	            (ByVal lpDriverName As String, ByVal lpDeviceName As String, _
	            ByVal lpOutput As Long, ByVal lpInitData As Long) As Long
	
	        Private Declare Function DeleteDC Lib "gdi32" (ByVal hdc As Long) _
	            As Long
	
	        Private Declare Function TextOut Lib "gdi32" Alias "TextOutA" _
	            (ByVal hdc As Long, ByVal X As Long, ByVal Y As Long, _
	            ByVal lpString As String, ByVal nCount As Long) As Boolean
	
	        Private Declare Function StartDoc Lib "gdi32" Alias "StartDocA" _
	            (ByVal hdc As Long, lpdi As DOCINFO) As Long
	
	        Private Declare Function StartPage Lib "gdi32" (ByVal hdc As Long) _
	            As Long
	
	        Private Declare Function EndDoc Lib "gdi32" (ByVal hdc As Long) _
	            As Long
	
	        Private Declare Function EndPage Lib "gdi32" (ByVal hdc As Long) _
	            As Long
	
	        Private Declare Function GetLastError Lib "KERNEL32" () As Long
	
	        Private Declare Sub CopyMemory Lib "KERNEL32" Alias "RtlMoveMemory" _
	            (hpvDest As Any, hpvSource As Any, ByVal cbCopy As Long)
	
	        Function ResetPrinterDC(PrinterName As String, hPrtDc As Long, _
	            PaperSource As Long, PaperOrient As Long) As Boolean
	            Dim nSize As Long           ' Size of DEVMODE
	            Dim pDevMode As DEVMODE
	            Dim PrinterHandle As Long   ' handle to printer
	            Dim LastError As Long       ' return value for GetLastError
	            Dim aDevMode() As Byte      ' working DEVMODE
	
	            ' Get a handle to the printer.
	            If OpenPrinter(PrinterName, PrinterHandle, 0&) Then
	                nSize = DocumentProperties(Me.hwnd, PrinterHandle, _
	                PrinterName, 0&, 0&, 0)
	                ' Reserve memory for the actual size of the DEVMODE
	                ReDim aDevMode(1 To nSize)
	
	                ' Fill the DEVMODE from the printer.
	                nSize = DocumentProperties(Me.hwnd, PrinterHandle, _
	                PrinterName, aDevMode(1), 0&, DM_OUT_BUFFER)
	                ' Copy the predefined portion of the DEVMODE.
	                Call CopyMemory(pDevMode, aDevMode(1), Len(pDevMode))
	
	                ' Change the appropriate member in the DevMode.
	                ' In this case, you want to change the paper bin and
	                ' orientation.
	                pDevMode.dmDefaultSource = PaperSource
	                pDevMode.dmOrientation = PaperOrient
	                ' Set the dmFields bit flag to indicate what you're changing.
	                pDevMode.dmFields = pDevMode.dmFields Or DM_DEFAULTSOURCE _
	                Or DM_ORIENTATION
	
	                ' Copy your changes back, then update DEVMODE.
	                Call CopyMemory(aDevMode(1), pDevMode, Len(pDevMode))
	                nSize = DocumentProperties(Me.hwnd, PrinterHandle, _
	                PrinterName, aDevMode(1), aDevMode(1), _
	                DM_IN_BUFFER Or DM_OUT_BUFFER)
	
	                nSize = ResetDC(hPrtDc, aDevMode(1))   ' Reset the DEVMODE
	
	                ' Close the handle when you're done with it.
	                ClosePrinter (PrinterHandle)
	                ResetPrinterDC = True   ' Reset succeeded!
	            Else
	                ResetPrinterDC = False  ' Reset failed!
	                LastError = GetLastError()
	                MsgBox "Error changing Page settings. Error Code: " _
	                & LastError, vbExclamation, "Print Error"
	            End If
	        End Function
	
	        Private Sub Command1_Click()
	            Dim di As DOCINFO
	            Dim hPrintDc As Long
	            Dim Ret As Long
	            Dim LastError As Long
	            Dim tx$
	
	            tx$ = "Hello World!"
	            hPrintDc = CreateDC(Printer.DriverName, Printer.DeviceName, 0, 0)
	            di.cbSize = Len(di)   ' 20
	            di.lpszDocName = "VB Test Document"    ' Optional
	
	            ' Initialize page settings.
	            Ret = ResetPrinterDC(Printer.DeviceName, hPrintDc, _
	            DMBIN_UPPER, DMORIENT_PORTRAIT)
	
	            Ret = StartDoc(hPrintDc, di)
	            Ret = StartPage(hPrintDc)
	            Ret = TextOut(hPrintDc, 1000, 1000, tx$, Len(tx$))
	            Ret = EndPage(hPrintDc)
	
	            ' Change page settings.
	            Ret = ResetPrinterDC(Printer.DeviceName, hPrintDc, _
	            DMBIN_LOWER, DMORIENT_LANDSCAPE)
	
	            Ret = StartPage(hPrintDc)
	            Ret = TextOut(hPrintDc, 1000, 1000, tx$, Len(tx$))
	            Ret = EndPage(hPrintDc)
	            Ret = EndDoc(hPrintDc)
	            Ret = DeleteDC(hPrintDc)
	        End Sub
	
	3. Make sure that the printer orientation is set to Portrait and the paper
	  source is set to Upper Tray or AutoSelect. Then run the Project and click on
	  Command1.
	
	If your printer has both an upper and a lower paper tray and supports both
	orientations, this will print the first page to the upper tray in Portrait and
	then a second page from the lower tray in Landscape.
	
	REFERENCES
	==========
	
	For additional information for an example of changing Font information with this
	type of code, click on the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q175535 PRB: Printing Rotated Text with Visual Basic
	
	For additional information on how ResetDC affects duplex printing, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q173197 PRB: ResetDC Disables Duplex Printing on PCL Printers
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp500 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
