---
layout: page
title: "Q189736: BUG: Painting Model for BitBlt and StretchBlt Changed for VB6"
permalink: /kb/189/Q189736/
---

## Q189736: BUG: Painting Model for BitBlt and StretchBlt Changed for VB6

{% raw %}

	Article: Q189736
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program that paints correctly using the BitBlt or StretchBlt API functions
	under Visual Basic 5.0 might no longer work under Visual Basic 6.0. Under Visual
	Basic 5.0, the bitmap is correctly displayed no matter whether the AutoRedraw
	property of the Form is set to True or False. However, under Visual Basic 6.0,
	if the AutoRedraw property is set to True, nothing is displayed and no error
	messages are generated.
	
	RESOLUTION
	==========
	
	In Visual Basic 6.0, set the Form's AutoRedraw property to False or call Refresh
	to view the result after calling BitBlt or StretchBlt if the AutoRedraw property
	is set to True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Change the AutoRedraw property of Form1 to True.
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Add a PictureBox (Picture1) to Form1 and set its Picture property to a .bmp
	  file.
	
	5. Copy and paste the code below in Form1's code module:
	
	        Option Explicit
	
	        Private Declare Function BitBlt Lib "gdi32" ( _
	           ByVal hDestDC As Long, ByVal x As Long, ByVal y As Long, _
	           ByVal nWidth As Long, ByVal nHeight As Long, _
	           ByVal hSrcDC As Long, ByVal xSrc As Long, ByVal ySrc As Long, _
	           ByVal dwRop As Long) As Long
	
	        Private Sub Command1_Click()
	
	           Call BitBlt(hdc, ScaleX(Width, vbTwips, vbPixels) * 0.5, _
	              ScaleY(Height, vbTwips, vbPixels) * 0.5, _
	              ScaleX(Picture1.Width, vbTwips, vbPixels), _
	              ScaleY(Picture1.Height, vbTwips, vbPixels), _
	              Picture1.hdc, 0, 0, vbSrcCopy)
	           '**************************************************************
	           'Refresh    'this line is required for Visual Basic 6.0 to
	                       'work if Form1.AutoRedraw is TRUE
	           '**************************************************************
	        End Sub
	
	  If the above project is run in Visual Basic 5.0, everything behaves as
	  expected. If run under Visual Basic 6.0, the program will not run as
	  expected. For the above code to work in Visual Basic 6.0, you must call
	  Refresh (as commented above).
	
	Additional query words: kbDSupport kbVBp500bug kbVBp600bug kbdss kbVBp kbAPI kbBitmap
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
