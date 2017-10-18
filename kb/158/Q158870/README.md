---
layout: page
title: "Q158870: HOWTO: Display DBCS in a VB Application Running on Windows NT"
permalink: kb/158/Q158870/
---

## Q158870: HOWTO: Display DBCS in a VB Application Running on Windows NT

	Article: Q158870
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbIntl kbVBp kbVBp400 kbGrpDSVB kbDSupport kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on how to display double-byte characters (for
	example, Kanji, Chinese, Korean), that are written with a non-localized version
	of Visual Basic and run on non-localized Windows NT.
	
	MORE INFORMATION
	================
	
	The following steps and sample code demonstrate how to display Kanji characters.
	Cp_932.nls, the Kanji character code page, and Msgothic.ttf, a TrueType font,
	are required for this demonstration. This approach does not apply to Windows 95.
	Windows 95 does not support TextOutW API.
	
	NOTE: Cp_932.nls and Msgothic.ttf can be found in the Ielpkja.cab file included
	with Internet Explorer version 5.01. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q246073 Internet Explorer 5.01 File List (1 of 3)
	
	Step 1: Register the Code Page File
	-----------------------------------
	
	1. Copy the code page file, cp_932.nls, into the \Windows\System directory.
	
	2. Start the Registry Editor and locate the following: HKEY_LOCAL_MACHINE
	  Subtree: \System\CurrentControlSet\Control\NLS\CodePage
	
	3. If entry 932=cp_932.nls does not exist in the registry list, add a new value
	  from the Edit menu:
	
	Value Name: 932
	     Data Type : REG_SZ
	     String    : cp_932.nls
	
	Step 2: Install Kanji Font
	--------------------------
	
	1. Open the Control Panel.
	
	2. Double-click the Fonts icon.
	
	3. On the File menu, click Install New Font to install Msgothic.ttf.
	
	Step 3: Create the Visual Basic Application
	-------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. On the Insert menu, click Module. The default is Module1.
	
	3. Paste the following code into the General Declarations section of Module1:
	
	     Declare Function TextOutU Lib "gdi32" Alias "TextOutW" _
	                       (ByVal hdc As Long, ByVal nXStart As Long, _
	                        ByVal nYStart As Long,  lpUnicode As Any, _
	                        ByVal cbString As Long) As Long
	
	     Declare Function SelectObject Lib "gdi32" (ByVal hdc As Long, _
	                        ByVal hgdiObj As Long) As Long
	
	     Declare Function CreateFontA Lib "gdi32"  (ByVal nHight As Long, _
	                        ByVal nWidth As Long, ByVal nEscapement As Long, _
	                        ByVal nOrientation As Long, _
	                        ByVal fnWeight As Long, _
	                        ByVal fdwItalic As Long, _
	                        ByVal fdwU As Long, ByVal fdwS As Long, _
	                        ByVal fdwChar As Long,ByVal fdwO As Long, _
	                        ByVal fdwC As Long, ByVal fdwQ As Long, _
	                        ByVal fdwP As Long, ByVal lpszFase As String) As Long
	
	    Declare Function DeleteObject Lib "gdi32" (ByVal hObject As Long) As Long
	
	    Type Unicode
	
	             h As Byte
	             l As Byte
	
	    End Type
	
	1. Add a command button (Command1) to Form1.
	
	2. Paste the following code into the General Declarations section of Form1:
	
	     Private Sub Command1_Click()
	
	        Dim hFont As Long
	        Dim hOldFont As Long
	
	        hFont = CreateFontA(32, 16, 0, 0, 400, 0, 0, 0, 128, 3, 2, 1, 49, _
	        "MS Gothic")
	        hOldFont = SelectObject(Form1.hdc, hFont)
	
	        Dim MyUniCode(3) As Unicode
	
	        MyUniCode(0).h = CByte(140)
	        MyUniCode(0).l = CByte(128)
	
	        MyUniCode(1).h = CByte(140)
	        MyUniCode(1).l = CByte(127)
	
	        MyUniCode(2).h = 0
	        MyUniCode(2).l = 0
	
	        Dim di
	        di = TextOutU(Form1.hdc, 100, 100, MyUniCode(0), 2)
	
	        Call SelectObject(Form1.hdc, hOldFont)
	        DeleteObject (hFont)
	
	       End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIntl kbVBp kbVBp400 kbGrpDSVB kbDSupport kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
