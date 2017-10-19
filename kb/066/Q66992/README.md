---
layout: page
title: "Q66992: DropShad.exe Draws Custom Border Around Control Window"
permalink: /kb/066/Q66992/
---

## Q66992: DropShad.exe Draws Custom Border Around Control Window

	Article: Q66992
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DropShad.exe demonstrates how to create an edit control with a "drop shadow."
	The parent window of the edit control draws the drop shadow on the control's
	behalf.
	
	Microsoft Windows is not designed to allow a control to draw its own custom
	border. If an application subclasses the control and draws a border during the
	processing of the WM_PAINT message, the control will not be clipped properly
	because the control does not determine the clipping when it draws outside its
	client area.
	
	The proper approach is to have the parent of the control draw the border during
	the processing of a WM_PAINT message. In this case, Windows will perform the
	appropriate clipping automatically.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DropShad.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The following three steps draw the drop shadow:
	
	1. During the processing of the parent window's WM_CREATE message, the parent
	  creates the edit control and sets a static variable to the edit control's
	  HWND (which will be needed to draw the shadow).
	
	2. The parent windows draws the drop shadow during the processing of a WM_PAINT
	  message. The parent window uses GetWindowRect() to determine the rectangle of
	  the edit control in screen coordinates. The ScreenToClient() function
	  converts this data to local coordinates, then OffsetRect() offsets the
	  rectangle to determine the bounds of the shadow. (The code for this step
	  would go very nicely into a DrawShadow() procedure if the application had
	  more than one edit control to shadow.)
	
	3. The parent window calls Rectangle() to draw the two rectangles that create
	  the drop shadow.
	
	The width of the drop shadow, how far the drop shadow is offset from the corners
	of the edit control, and the color of the brush used to paint the drop shadow
	can be varied to achieve a particular control appearance.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
