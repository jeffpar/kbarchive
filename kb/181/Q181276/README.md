---
layout: page
title: "Q181276: HOWTO: Display Extended ASCII WingDings on DBCS Systems"
permalink: /kb/181/Q181276/
---

## Q181276: HOWTO: Display Extended ASCII WingDings on DBCS Systems

	Article: Q181276
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	From Visual Basic 5.0, you cannot consistently produce extended ASCII WingDings
	on DBCS (Double-Byte Character Set) versions of Windows 95, Windows 98, Windows
	Me, Windows NT 4.0, or Windows 2000. DBCS versions of Windows include Chinese,
	Japanese, and Korean.
	
	MORE INFORMATION
	================
	
	Extended ASCII WingDings are those the have ASCII values 128 through 255. These
	WingDings cannot be displayed from the DBCS code pages because lead byte ranges
	for the double byte character sets can start at 129. A lead byte is the first
	half of the two byte representation used to describe characters in the double
	byte character sets.
	
	Character sets are sometimes called charsets. Charsets refer to the same
	collections of characters defined by Windows code pages but their identification
	numbers can be expressed in a single byte. A code page is used to associate a
	numerical value to each character used in the language. For example, to
	illustrate the relationship between code pages and charsets, the code page for
	Chinese is 950 and the charset that corresponds to this code page has a value of
	136 (see CHINESEBIG5_CHARSET in step 3 below). By changing the charset using the
	CreateFontIndirect API, you can display these WingDings using the TextOutA API.
	
	There are other fonts whose extended ASCII characters can be displayed using this
	method.
	
	The sample below displays all WingDings from 32 to 255 on DBCS Windows 95,
	Windows NT 4.0, and Windows 2000. It uses the CreateFontIndirect and TextOutA
	APIs. The method below can also be used to display extended ASCII characters for
	other fonts. To change the font in this sample, set lf.lfFaceName to the name of
	the font. It might also be necessary to modify lf.lfCharSet. Possible values for
	lf.lfCharset are listed as constants in the code below:
	
	1. Create a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. From the Project menu, select Add Module. Module1 is created by default.
	
	3. Place the following code in the General Declarations section of Module1:
	
	        Type LOGFONT
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
	           lfFaceName As String * 32
	        End Type
	
	        'Charset constants
	        'Values for lf.lfCharSet:
	        Public Const ANSI_CHARSET        = 0
	        Public Const DEFAULT_CHARSET     = 1
	        Public Const SYMBOL_CHARSET      = 2
	        Public Const SHIFTJIS_CHARSET    = 128
	        Public Const HANGUL_CHARSET      = 129
	        Public Const GB2312_CHARSET      = 134
	        Public Const CHINESEBIG5_CHARSET = 136
	        Public Const GREEK_CHARSET       = 161
	        Public Const TURKISH_CHARSET     = 162
	        Public Const HEBREW_CHARSET      = 177
	        Public Const ARABIC_CHARSET      = 178
	        Public Const BALTIC_CHARSET      = 186
	        Public Const RUSSIAN_CHARSET     = 204
	        Public Const THAI_CHARSET        = 222
	        Public Const EE_CHARSET          = 238
	        Public Const OEM_CHARSET         = 255
	
	        'Values to be used with GetSysColor:
	        Public Const COLOR_BTNFACE = 15
	        Public Const COLOR_ACTIVEBORDER = 10
	        Public Const COLOR_ACTIVECAPTION = 2
	        Public Const COLOR_ADJ_MAX = 100
	        Public Const COLOR_ADJ_MIN = -100 'shorts
	        Public Const COLOR_APPWORKSPACE = 12
	        Public Const COLOR_BACKGROUND = 1
	        Public Const COLOR_BTNHIGHLIGHT = 20
	        Public Const COLOR_BTNSHADOW = 16
	        Public Const COLOR_BTNTEXT = 18
	        Public Const COLOR_CAPTIONTEXT = 9
	        Public Const COLOR_GRAYTEXT = 17
	        Public Const COLOR_HIGHLIGHT = 13
	        Public Const COLOR_HIGHLIGHTTEXT = 14
	        Public Const COLOR_INACTIVEBORDER = 11
	        Public Const COLOR_INACTIVECAPTION = 3
	        Public Const COLOR_INACTIVECAPTIONTEXT = 19
	        Public Const COLOR_MENUTEXT = 7
	        Public Const COLOR_SCROLLBAR = 0
	        Public Const COLOR_WINDOW = 5
	        Public Const COLOR_WINDOWFRAME = 6
	        Public Const COLOR_WINDOWTEXT = 8
	
	        Declare Function TextOut Lib "gdi32" Alias "TextOutA" (ByVal hdc As _
	           Long, ByVal x As Long, ByVal y As Long, lpString As Any, _
	           ByVal nCount As Long) As Long
	        Declare Function DeleteObject Lib "gdi32" (ByVal hObject As Long) _
	           As Long
	        Declare Function CreateFontIndirect Lib "gdi32" Alias _
	           "CreateFontIndirectA" (lpLogFont As LOGFONT) As Long
	        Declare Function SelectObject Lib "gdi32" (ByVal hdc As Long, _
	           ByVal hObject As Long) As Long
	        Declare Function SetBkColor Lib "gdi32" (ByVal hdc As Long, _
	           ByVal crColor As Long) As Long
	        Declare Function GetBkMode Lib "gdi32" (ByVal hdc As Long) As Long
	        Declare Function GetSysColor Lib "user32" (ByVal nIndex As Long) _
	           As Long
	
	4. Place a CommandButton on Form1.
	
	5. Place the following code in the click event of the CommandButton (Command1):
	
	        Private Sub Command1_Click()
	
	           Dim lf As LOGFONT
	           Dim chars(257) As Byte
	           Dim sysColor As Long
	           Dim DispChar As Integer
	           Dim NumDispchar As Integer
	           Dim prevBkCol As Long
	           Dim hFont As Long
	           Dim StartASCII As Integer
	           Dim StopASCII As Integer
	           Dim StartRow As Integer
	           Dim NumOfChars As Integer
	           Dim i As Integer
	           Dim j As Integer
	           Dim EndRow As Integer
	           Dim NewStart As Integer
	           Dim tmp As Integer
	           Dim xd As Long
	           Dim xt As Long
	           Dim xs As Long
	
	           'These are the important settings: lfCharSet and lfFaceName
	           lf.lfCharSet = SYMBOL_CHARSET
	           lf.lfFaceName = "WingDings" & Chr$(0)
	
	           lf.lfClipPrecision = 64
	           lf.lfOutPrecision = 0
	           lf.lfEscapement = 0
	           lf.lfItalic = 0
	           lf.lfWidth = 16
	           lf.lfHeight = 32
	           lf.lfOrientation = 0
	
	           Form1.Caption = lf.lfFaceName
	           Form1.Refresh
	           sysColor = GetSysColor(COLOR_BTNFACE) 'Gets button system color
	           prevBkCol = SetBkColor(Form1.hdc, sysColor) 'Set background color
	           hFont = CreateFontIndirect(lf)
	           xs = SelectObject(Form1.hdc, hFont)
	
	           DispChar = 32 'Number of characters to display in a row
	           StartASCII = 32 'Starting with character having this ASCII value
	           StopASCII = 255 'Ending with this ASCII character
	           StartRow = 1
	
	           If StartASCII < 0 Then StartASCII = 32
	           If StopASCII > 255 Then StopASCII = 255
	           If StartASCII > StopASCII Then 'If StartASCII is larger than
	                                          'StopASCII swap
	              tmp = StartASCII
	              StartASCII = StopASCII
	              StopASCII = tmp
	           End If
	
	           NumOfChars = StopASCII - StartASCII + 1
	
	           If Int(NumOfChars / DispChar) = (NumOfChars) / DispChar Then
	              EndRow = Int(NumOfChars / DispChar)
	           Else
	              EndRow = Int(NumOfChars / DispChar) + 1
	           End If
	
	           For i = StartASCII To StopASCII
	              chars(i) = i
	           Next i
	
	           'Display characters on the form in rows containing 32 characters
	           For j = StartRow To EndRow
	              NewStart = StartASCII + (j - 1) * DispChar
	
	              If NumOfChars <  DispChar And NumOfChars > 0 Then
	                 NumDispchar = NumOfChars
	              Else
	                 NumDispchar = DispChar
	              End If
	
	              xt = TextOut(Form1.hdc, 0, j * lf.lfHeight + 2, _
	                 chars(NewStart), NumDispchar)
	              NumOfChars = NumOfChars - NumDispchar
	           Next j
	
	           xd = DeleteObject(hFont)
	           Form1.Caption = Form1.Caption & "   From " & _
	                           StartASCII & " to " & StopASCII
	
	        End Sub
	
	6. Press the F5 key to run the application, and click the CommandButton. Note
	  that all WingDings having an ASCII value from 32 to 255 are displayed.
	
	REFERENCES
	==========
	
	"Developing International Software for Windows 95 and Windows NT" by Nadine
	Kano, published by Microsoft Press, 1995
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
