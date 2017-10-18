---
layout: page
title: "Q149233: FIX: Palette Does Not Change with Picture on MDI Child"
permalink: kb/149/Q149233/
---

## Q149233: FIX: Palette Does Not Change with Picture on MDI Child

	Article: Q149233
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing from one 256-color bitmap to another 256-color bitmap at run time
	causes the second bitmap to be rendered with the palette from the first bitmap.
	This causes the second bitmap to look wrong, unless both bitmaps have similar or
	identical colors. This problem occurs only when the picture or image control
	resides on an MDI child form.
	
	RESOLUTION
	==========
	
	To work around this problem, send a WM_QUERYNEWPALETTE message to the MDI child
	form immediately after changing the bitmap. Follow these steps to implement this
	fix:
	
	1. Add a single module to the project to hold the declaration for SendMessage
	  and the WM_QUERYNEWPALETTE constant. If a module already exists in the
	  project it can be used instead of adding a new one.
	
	2. Add the following function and constant declarations for the appropriate
	  bitness to the module:
	
	  For Win16 or Win32:
	
	     Public Const WM_QUERYNEWPALETTE = &H30F
	
	  For Win32 (only):
	
	     Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	     (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As
	     Long) As Long
	
	  For Win16 (only):
	
	     Declare Function SendMessage Lib "User" (ByVal hWnd As Integer, _
	     ByVal wMsg As Integer, ByVal wParam As Integer, lParam As Any) As Long
	
	3. Immediately after the code where the bitmap is changed, add this single call
	  to SendMessage (assuming Form1 is the MDI child where the picture or image
	  control is located):
	
	     SendMessage Form1.hWnd, WM_QUERYNEWPALETTE, 0, 0
	
	  When the form receives this message it will correctly set the palette so that
	  the new image is displayed correctly. These declarations were obtained from
	  the 16-bit and 32-bit versions of the API Text Viewer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add an MDI form by selecting MDI Form from the Insert menu.
	
	3. Change the MDIChild property for Form1 to True.
	
	4. Add a single Image control to Form1.
	
	5. Change the Picture property of the image control to point to a 256-color
	  bitmap.
	
	6. Add this code to the Form_Click event of Form1 (where PICTURE.BMP is the
	  filename of a 256-color bitmap with a different palette than the one selected
	  in step 5):
	
	     Private Sub Form_Click()
	        Image1.Picture = LoadPicture("PICTURE.BMP")
	     End Sub
	
	7. Press F5 or select Start from the Run menu to run the application. Click
	  Form1 and see that the picture changes but that the colors are not correct.
	  Sending a WM_QUERYNEWPALETTE message immediately after changing the bitmap
	  will fix the problem.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp400bug kbVBp600fix kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
