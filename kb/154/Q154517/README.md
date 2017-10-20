---
layout: page
title: "Q154517: HOWTO: Use the DrawText API Call from Visual Basic"
permalink: /kb/154/Q154517/
---

## Q154517: HOWTO: Use the DrawText API Call from Visual Basic

{% raw %}

	Article: Q154517
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DrawText API gives users the ability to write text to a Device context
	giving various alignment and word-wrapping features. This article provides a
	code sample showing how to achieve these effects under the 32-bit Edition of
	Visual Basic 4.0.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button to Form1.
	
	3. Place the following code in the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function DrawText Lib "user32" Alias "DrawTextA" _
	          (ByVal hdc As Long, ByVal lpStr As String, ByVal nCount As Long, _
	          lpRect As RECT, ByVal wFormat As Long) As Long
	
	        Private Const DT_BOTTOM = &H8
	        Private Const DT_CENTER = &H1
	        Private Const DT_LEFT = &H0
	        Private Const DT_RIGHT = &H2
	        Private Const DT_TOP = &H0
	        Private Const DT_VCENTER = &H4
	        Private Const DT_WORDBREAK = &H10
	
	        Private Type RECT
	           Left As Long
	           Top As Long
	           Right As Long
	           Bottom As Long
	        End Type
	
	        Private Sub Command1_Click()
	          Dim lSuccess As Long
	          Dim sPrintText As String
	          Dim MyRect As RECT
	          Form1.Font.Size = 12
	          Form1.ScaleMode = vbPixels
	          MyRect.Left = 0
	          MyRect.Right = Form1.ScaleWidth
	          MyRect.Top = 20
	          MyRect.Bottom = 60
	          sPrintText = "Print this text"
	          lSuccess = DrawText(Form1.hdc, sPrintText, Len(sPrintText), _
	          MyRect, DT_CENTER or DT_WORDBREAK)
	        End Sub
	
	4. Press the F5 key to run the project, and press the Command button. Text
	  should appear in the middle of the form and be word-wrapped. If you Resize
	  the form and run the project again, you will note that the text still appears
	  in the middle of the form on the horizontal axis.
	
	Following is a list of all the constants that can be used with the DrawText API
	to give the various effects documented in the Win32 SDK:
	
	  Global Const DT_TOP = &H00000000
	     Global Const DT_LEFT = &H00000000
	     Global Const DT_CENTER = &H00000001
	     Global Const DT_RIGHT = &H00000002
	     Global Const DT_VCENTER = &H00000004
	     Global Const DT_BOTTOM = &H00000008
	     Global Const DT_WORDBREAK = &H00000010
	     Global Const DT_SINGLELINE = &H00000020
	     Global Const DT_EXPANDTABS = &H00000040
	     Global Const DT_TABSTOP = &H00000080
	     Global Const DT_NOCLIP = &H00000100
	     Global Const DT_EXTERNALLEADING = &H00000200
	     Global Const DT_CALCRECT = &H00000400
	     Global Const DT_NOPREFIX = &H00000800
	     Global Const DT_INTERNAL = &H00001000
	     Global Const DT_EDITCONTROL = &H00002000
	     Global Const DT_PATH_ELLIPSIS = &H00004000
	     Global Const DT_END_ELLIPSIS = &H00008000
	     Global Const DT_MODIFYSTRING = &H00010000
	     Global Const DT_RTLREADING = &H00020000
	     Global Const DT_WORD_ELLIPSIS = &H00040000
	
	REFERENCES
	==========
	
	The Win32 SDK has a comprehensive summary of Drawtext and other Drawing and Text
	functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
