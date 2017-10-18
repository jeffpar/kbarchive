---
layout: page
title: "Q175535: PRB: Printing Rotated Text with Visual Basic"
permalink: kb/175/Q175535/
---

## Q175535: PRB: Printing Rotated Text with Visual Basic

	Article: Q175535
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0,97,97sp2,97sp3
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbGDI kbPrinting KbVBA kbVBp500 kbVBp600 kbVS97sp2 kbVS97sp3 kbGrpDSVB MS
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to print rotated text using the Printer object from Visual Basic with
	Visual Studio 97 Service Pack 2 or 3 using the technique described in the
	following Microsoft Knowledge Base article, the text fails to rotate:
	
	  Q154515 HOWTO: Print Rotated Text Using Win32 API
	
	CAUSE
	=====
	
	Visual Studio 97 Service Pack 2 and 3 for Visual Basic 5.0 and 6.0 include a fix
	for the Printer object that prevents any new SelectObject calls from selecting a
	new Font for the Printer.hDC. So, when referencing the Printer object, new fonts
	must be selected via the Printer object's properties or they are ignored.
	
	RESOLUTION
	==========
	
	To work around this problem, either print using the API only, or do not
	reference the Printer object while printing with the API functions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The technique described in the Microsoft Knowledge Base article:
	
	  Q154515 HOWTO: Print Rotated Text Using Win32 API
	
	prints to a PictureBox control but also works using the Printer object. Printing
	to a PictureBox still works after SP2 but fails using the Printer object. The
	following code example will work from Visual Basic versions 4.0 (32-bit) and
	later.
	
	The key elements are using the TextOut API instead of Printer.Print and not
	referencing the printer object directly while setting up the font and printing
	with it. If you use TextOut with "Printer.hDC" instead of a local variable, it
	will fail. Any reference to a printer object property or method is a use of the
	printer object and will cause the printer object to reset its font/pen/brush.
	Therefore, the values of all printer object properties that you need to use with
	the new font/pen/brush must be saved into variables before using SelectObject,
	and then only use the variables.
	
	Code Example
	------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add 2 CommandButtons to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Const LF_FACESIZE = 32
	
	     Private Type LOGFONT
	        lfHeight As Long
	        lfWidth As Long
	        lfEscapement As Long
	        lfOrientation As Long
	        lfWeight As Long
	        lfItalic As Byte
	        lfUnderline As Byte
	        lfStrikeOut As Byte
	        lfCharSet As Byte
	        lfOutPrecision As Byte
	        lfClipPrecision As Byte
	        lfQuality As Byte
	        lfPitchAndFamily As Byte
	        lfFaceName As String * LF_FACESIZE
	     End Type
	
	     Private Type DOCINFO
	        cbSize As Long
	        lpszDocName As String
	        lpszOutput As String
	        lpszDatatype As String
	        fwType As Long
	     End Type
	
	     Private Declare Function CreateFontIndirect Lib "gdi32" Alias _
	     "CreateFontIndirectA" (lpLogFont As LOGFONT) As Long
	
	     Private Declare Function SelectObject Lib "gdi32" _
	     (ByVal hdc As Long, ByVal hObject As Long) As Long
	
	     Private Declare Function DeleteObject Lib "gdi32" _
	     (ByVal hObject As Long) As Long
	
	     Private Declare Function CreateDC Lib "gdi32" Alias "CreateDCA" _
	     (ByVal lpDriverName As String, ByVal lpDeviceName As String, _
	     ByVal lpOutput As Long, ByVal lpInitData As Long) As Long
	
	     Private Declare Function DeleteDC Lib "gdi32" (ByVal hdc As Long) _
	     As Long
	
	     Private Declare Function TextOut Lib "gdi32" Alias "TextOutA" _
	     (ByVal hdc As Long, ByVal x As Long, ByVal y As Long, _
	     ByVal lpString As String, ByVal nCount As Long) As Long ' or Boolean
	
	     Private Declare Function StartDoc Lib "gdi32" Alias "StartDocA" _
	     (ByVal hdc As Long, lpdi As DOCINFO) As Long
	
	     Private Declare Function EndDoc Lib "gdi32" (ByVal hdc As Long) _
	     As Long
	
	     Private Declare Function StartPage Lib "gdi32" (ByVal hdc As Long) _
	     As Long
	
	     Private Declare Function EndPage Lib "gdi32" (ByVal hdc As Long) _
	     As Long
	
	     Const DESIREDFONTSIZE = 12     ' Could use variable, TextBox, etc.
	
	     Private Sub Command1_Click()
	     ' Combine API Calls with the Printer object
	        Dim OutString As String
	        Dim lf As LOGFONT
	        Dim result As Long
	        Dim hOldfont As Long
	        Dim hPrintDc As Long
	        Dim hFont As Long
	
	        Printer.Print "Printer Object"
	        hPrintDc = Printer.hdc
	        OutString = "Hello World"
	
	        lf.lfEscapement = 1800
	        lf.lfHeight = (DESIREDFONTSIZE * -20) / Printer.TwipsPerPixelY
	        hFont = CreateFontIndirect(lf)
	        hOldfont = SelectObject(hPrintDc, hFont)
	        result = TextOut(hPrintDc, 1000, 1000, OutString, Len(OutString))
	        result = SelectObject(hPrintDc, hOldfont)
	        result = DeleteObject(hFont)
	
	        Printer.Print "xyz"
	        Printer.EndDoc
	     End Sub
	
	     Private Sub Command2_Click()
	     ' Print using API calls only
	        Dim OutString As String  'String to be rotated
	        Dim lf As LOGFONT        'Structure for setting up rotated font
	        Dim temp As String       'Temp string var
	        Dim result As Long       'Return value for calling API functions
	        Dim hOldfont As Long     'Hold old font information
	        Dim hPrintDc As Long     'Handle to printer dc
	        Dim hFont As Long        'Handle to new Font
	        Dim di As DOCINFO        'Structure for Print Document info
	
	        OutString = "Hello World"   'Set string to be rotated
	
	     ' Set rotation in tenths of a degree, i.e., 1800 = 180 degrees
	        lf.lfEscapement = 1800
	        lf.lfHeight = (DESIREDFONTSIZE * -20) / Printer.TwipsPerPixelY
	        hFont = CreateFontIndirect(lf)  'Create the rotated font
	        di.cbSize = 20                  ' Size of DOCINFO structure
	        di.lpszDocName = "My Document" ' Set name of print job (Optional)
	
	     ' Create a printer device context
	        hPrintDc = CreateDC(Printer.DriverName, Printer.DeviceName, 0, 0)
	
	        result = StartDoc(hPrintDc, di) 'Start a new print document
	        result = StartPage(hPrintDc)    'Start a new page
	
	     ' Select our rotated font structure and save previous font info
	        hOldfont = SelectObject(hPrintDc, hFont)
	
	     ' Send rotated text to printer, starting at location 1000, 1000
	        result = TextOut(hPrintDc, 1000, 1000, OutString, Len(OutString))
	
	     ' Reset font back to original, non-rotated
	        result = SelectObject(hPrintDc, hOldfont)
	
	     ' Send non-rotated text to printer at same page location
	        result = TextOut(hPrintDc, 1000, 1000, OutString, Len(OutString))
	
	        result = EndPage(hPrintDc)      'End the page
	        result = EndDoc(hPrintDc)       'End the print job
	        result = DeleteDC(hPrintDc)     'Delete the printer device context
	        result = DeleteObject(hFont)    'Delete the font object
	     End Sub
	
	     Private Sub Form_Load()
	        Command1.Caption = "API with Printer object"
	        Command2.Caption = "Pure API"
	     End Sub
	
	4. Run the Project and click API with Printer object. This will print a single
	  page to the current default printer with "Printer Object" and "xyz" printed
	  normally and "Hello World" printed rotated 180 degrees.
	
	5. Click Pure API. This will print a single page to the current default printer
	  with "Hello World" printed normally and rotated 180 degrees.
	
	Additional query words: sideways angle sp2
	
	======================================================================
	Keywords          : kbprint kbAPI kbGDI kbPrinting KbVBA kbVBp500 kbVBp600 kbVS97sp2 kbVS97sp3 kbGrpDSVB MSGRAPH 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0,97,97sp2,97sp3
	Issue type        : kbprb
	
	=============================================================================
	
