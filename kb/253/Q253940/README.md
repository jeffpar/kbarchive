---
layout: page
title: "Q253940: PRB: Incorrect Screen Object Width/Height After the Desktop Is R"
permalink: kb/253/Q253940/
---

## Q253940: PRB: Incorrect Screen Object Width/Height After the Desktop Is R

	Article: Q253940
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbGDI kbVBp600 kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inside the Visual Basic IDE, the Screen object reports an incorrect value for
	the desktop width after the screen resolution is changed.
	
	When the application is executing outside the IDE, the Width and Height
	properties of the Screen object return incorrect values if the resolution is
	changed from the Display Properties icon in the System Tray.
	
	RESOLUTION
	==========
	
	The GetDeviceCaps API function can be used to return the screen resolution in
	pixels. This workaround can be examined by removing the comment from the MsgBox
	command in the code provided in the "More Information" section of this article.
	The width and height pixel values returned by GetDeviceCaps can be converted to
	Twips by multiplying by Screen.TwipsPerPixelX and Screen.TwipsPerPixelY,
	respectively.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Control Panel, use the Display option to change the screen resolution
	  to 800 by 600 pixels.
	
	2. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Add the following code to the code window of Form1:
	
	  Private Declare Function GetDeviceCaps Lib "gdi32" _
	          (ByVal hdc As Long, ByVal nIndex As Long) As Long
	
	  Const HORZRES = 8
	  Const VERTRES = 10
	
	  Sub Form_Load()
	      MsgBox "Width = " & Screen.Width & vbCrLf & _
	             "Height = " & Screen.Height
	      ' Uncomment the following line to examine the workaround
	      ' MsgBox "Width = " & GetDeviceCaps(Form1.hdc, HORZRES) & vbCrLf & _
	             "Height = " & GetDeviceCaps(Form1.hdc, VERTRES)
	  End Sub
	
	4. In the Control Panel, use the Display option to change the screen resolution
	  to 640 by 480 pixels.
	
	5. Press the F5 key to run the program. Notice that the width of the screen, in
	  Twips, is incorrectly reported as the screen height.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbGDI kbVBp600 kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
