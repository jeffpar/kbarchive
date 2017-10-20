---
layout: page
title: "Q183333: HOWTO: Create a Dynamically Scrolling Graph"
permalink: /kb/183/Q183333/
---

## Q183333: HOWTO: Create a Dynamically Scrolling Graph

{% raw %}

	Article: Q183333
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a dynamically scrolling graph in Visual
	Basic. You can use the information in this article to create a graph as data is
	generated, such as in a monitoring program.
	
	MORE INFORMATION
	================
	
	The sample project uses Timer and PictureBox controls. The graph is first
	created in memory and then copied to the PictureBox control using the BitBlt
	function. This method is used to allow the PictureBox control to update properly
	when another window partially or completely covers the PictureBox control.
	
	The next section shows you how to create the sample project.
	
	To Create the Sample Project
	----------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Timer and a PictureBox control to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Private Const SRCCOPY = &HCC0020 ' (DWORD) dest = source
	        Private Const PS_SOLID = 0
	
	        Private Declare Function CreateCompatibleDC Lib "gdi32" _
	                       (ByVal hdc As Long) As Long
	
	        Private Declare Function CreateCompatibleBitmap Lib "gdi32" _
	                       (ByVal hdc As Long, _
	                       ByVal nWidth As Long, _
	                       ByVal nHeight As Long) As Long
	
	        Private Declare Function SelectObject Lib "gdi32" _
	                       (ByVal hdc As Long, _
	                       ByVal hObject As Long) As Long
	
	        Private Declare Function CreatePen Lib "gdi32" _
	                       (ByVal nPenStyle As Long, _
	                       ByVal nWidth As Long, _
	                       ByVal crColor As Long) As Long
	
	        Private Declare Function LineTo Lib "gdi32" _
	                       (ByVal hdc As Long, _
	                       ByVal x As Long, _
	                       ByVal y As Long) As Long
	
	        Private Declare Function MoveToEx Lib "gdi32" _
	                       (ByVal hdc As Long, _
	                       ByVal x As Long, _
	                       ByVal y As Long, _
	                       ByVal lpPoint As Long) As Long
	
	        Private Declare Function BitBlt Lib "gdi32" _
	                       (ByVal hDestDC As Long, _
	                       ByVal x As Long, _
	                       ByVal y As Long, _
	                       ByVal nWidth As Long, _
	                       ByVal nHeight As Long, _
	                       ByVal hSrcDC As Long, _
	                       ByVal xSrc As Long, _
	                       ByVal ySrc As Long, _
	                       ByVal dwRop As Long) As Long
	
	  Private Const pWidth = 250    ' Width of picture box in pixels.
	        Private Const pHeight = 150   ' Height of picture box in pixels.
	        Private Const pGrid = 25      ' Distance between grid lines.
	        Private Const tInterval = 100 ' Interval between timer samplings
	                                      ' in milliseconds.
	        Private Const pHeightHalf = pHeight \ 2
	        Dim counter As Long  ' Number of data points logged so far. Used to
	                             ' sync grid.
	        Dim oldY As Long     ' Contains the previous y coordinate.
	        Dim hDCh As Long, hPenB As Long, hPenC As Long
	
	        Private Sub Form_Load()
	            Dim hBmp As Long
	            Dim i As Integer
	            Me.Show
	            Picture1.ScaleMode = 3
	            Picture1.Left = 0
	            Picture1.Top = 0
	            Form1.ScaleMode = 3
	            Picture1.Height = 155
	            Picture1.Width = 255
	            counter = 0
	            hDCh = CreateCompatibleDC(Picture1.hdc)
	            hBmp = CreateCompatibleBitmap(Picture1.hdc, _
	                                         pWidth, _
	                                         pHeight)
	            Call SelectObject(hDCh, hBmp)
	            hPenB = CreatePen(PS_SOLID, 0, vbBlack)
	            hPenC = CreatePen(PS_SOLID, 0, vbRed)
	            Call SelectObject(hDCh, hPenB)
	
	        ' Plot horizontal grid lines.
	            For i = pGrid To pHeight - 1 Step pGrid
	                Picture1.Line (0, i)-(pWidth, i)
	            Next
	
	        ' Plot vertical grid lines.
	            For i = pGrid - (counter Mod pGrid) To _
	                             pWidth - 1 Step pGrid
	                Picture1.Line (i, 0)-(i, pHeight)
	            Next
	
	            Call BitBlt(hDCh, _
	                       0, _
	                       0, _
	                       pWidth, _
	                       pHeight, _
	                       Picture1.hdc, _
	                       0, _
	                       0, _
	                       SRCCOPY)
	            Timer1.Interval = 100
	            Timer1.Enabled = True
	            oldY = pHeightHalf
	        End Sub
	
	        Private Sub Timer1_Timer()
	            Dim i As Integer
	            Call BitBlt(hDCh, _
	                          0, _
	                          0, _
	                          pWidth - 1, _
	                          pHeight, _
	                          hDCh, _
	                          1, _
	                          0, _
	                          SRCCOPY)
	
	            If counter Mod pGrid = 0 Then
	                Call MoveToEx(hDCh, pWidth - 2, 0, 0)
	                Call LineTo(hDCh, pWidth - 2, pHeight)
	            End If
	
	            i = Sin(0.1 * counter) * _
	                 (pHeightHalf - 1) + _
	                 pHeightHalf
	
	            Call SelectObject(hDCh, hPenC)
	            Call MoveToEx(hDCh, pWidth - 3, oldY, 0)
	            Call LineTo(hDCh, pWidth - 2, i)
	            Call SelectObject(hDCh, hPenB)
	            Call BitBlt(Picture1.hdc, _
	                          0, _
	                          0, _
	                          pWidth, _
	                          pHeight, _
	                          hDCh, _
	                          0, _
	                          0, _
	                          SRCCOPY)
	            counter = counter + 1
	            oldY = i
	        End Sub
	
	4. From the Run menu, click Start or press the F5 key to start the program. A
	  sine wave in red is displayed in the PictureBox control.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp600 kbSDKWin32 kbAPI kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
