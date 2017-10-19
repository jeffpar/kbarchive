---
layout: page
title: "Q154515: HOWTO: Print Text Sideways in a Picture Box Using Win32 API"
permalink: /kb/154/Q154515/
---

## Q154515: HOWTO: Print Text Sideways in a Picture Box Using Win32 API

	Article: Q154515
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the CreateFont and CreateFontIndirect Win32 API calls, it is possible
	to rotate text on a Device context such as a picture box, a form, or the Printer
	Object. This article provides a Win32 Code sample demonstrating how this can be
	done.
	
	MORE INFORMATION
	================
	
	1. Start a new Visual Basic Project. Form1 is created by default.
	
	2. Add a Command button to Form1.
	
	3. Place a PictureBox on Form1.
	
	4. Place the following code in the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Declare Function CreateFontIndirect Lib "gdi32" Alias _
	       "CreateFontIndirectA" (lpLogFont As LOGFONT) As Long
	     Private Declare Function SelectObject Lib "gdi32" (ByVal hdc _
	       As Long, ByVal hObject As Long) As Long
	     Private Declare Function DeleteObject Lib "gdi32" (ByVal _
	       hObject As Long) As Long
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
	       lfFaceName as String * LF_FACESIZE
	     End Type
	
	     Sub Command1_Click()
	       Dim font As LOGFONT
	       Dim prevFont As Long, hFont As Long, ret As Long
	       Const FONTSIZE = 10 ' Desired point size of font
	       font.lfEscapement = 1800    ' 180-degree rotation
	       font.lfFaceName = "Arial" & Chr$(0) 'Null character at end
	      ' Windows expects the font size to be in pixels and to
	       ' be negative if you are specifying the character height
	       ' you want.
	       font.lfHeight = (FONTSIZE * -20) / Screen.TwipsPerPixelY
	       hFont = CreateFontIndirect(font)
	       prevFont = SelectObject(Picture1.hdc, hFont)
	       Picture1.CurrentX = Picture1.ScaleWidth
	       Picture1.CurrentY = Picture1.ScaleHeight / 2
	       Picture1.Print "Rotated Text"
	       ' Clean up by restoring original font.
	       ret = SelectObject(Picture1.hdc, prevFont)
	       ret = DeleteObject(hFont)
	       Picture1.CurrentY = Picture1.ScaleHeight / 2
	       Picture1.Print "Normal Text"
	     End Sub
	
	5. Press the F5 key to run the project, and then press the Command Button. You
	  will see two pieces of text appear, one the right way up and one inverted.
	
	NOTE: These instructions will not work if you attempt to use Printer.hDC in
	Visual Basic 5.0, SP2 or SP3, instead of using Picture1.hDC.
	
	REFERENCES
	==========
	
	For additional information about how to properly rotate text using a printer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q175535 PRB: Printing Rotated Text with Visual Basic
	
	For additional information about the 16-bit equivalent of this sample, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q119673 How to Print with Rotated Text
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
