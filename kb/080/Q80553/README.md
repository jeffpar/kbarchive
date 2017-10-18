---
layout: page
title: "Q80553: ExpEdit.exe Changes Size of an Edit Control"
permalink: kb/080/Q80553/
---

## Q80553: ExpEdit.exe Changes Size of an Edit Control

	Article: Q80553
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser _IK
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ExpEdit.exe is a sample file that demonstrates how to change the size of an edit
	control in response to an EN_UPDATE message. In the sample, when the typed text
	reaches the end of a line, the edit control expands to allow the user to
	continue typing on a new line.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	ExpEdit.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Windows sends the EN_UPDATE notification message to the parent of the edit
	control whenever the contents of the edit control have been altered, but before
	the display is updated. The notification is sent to the parent window as the
	HIWORD of the lParam parameter of a WM_COMMAND message. The ID of the control is
	in the wParam.
	
	Therefore, for an application to determine when it is necessary to change the
	size of the edit control, it must handle the WM_COMMAND case in which the wParam
	is the ID of the control and the HIWORD of the lParam is EN_UPDATE. When EXPEDIT
	receives an EN_UPDATE notification message, it performs the following eight
	actions:
	
	1. Sends an EM_FMTLINES message to the edit control (wParam = 1). When the
	  control processes this message, it modifies its buffer to have the character
	  sequence carriage return-carriage return-linefeed (CR-CR-LF) at the end of
	  each line.
	
	2. Retrieves the length of the edit control's buffer.
	
	3. Passes a handle to the (nonempty) buffer of the DrawText() function, which
	  calculates the size of the rectangle required to hold all the text.
	
	4. Adjusts the text height returned by DrawText because DrawText interprets the
	  CR-CR-LF sequence at the end of each buffer line as two lines instead of one.
	
	5. Compares the right edge of the rectangle returned from DrawText with the
	  "limit." DrawText will extend the right edge of the rectangle if the text is
	  too long. If the right edge of the last line exceeds the limit, then the edit
	  control needs an additional line. EXPEDIT performs all the obvious limit
	  checks.
	
	6. If the height has not changed, then it is not necessary to change the size of
	  the edit control, and EXPEDIT returns. Otherwise, the size of the edit
	  control must be changed.
	
	7. Updates the size of the edit control with MoveWindow() and UpdateWindow().
	
	8. Returns FALSE so that the Dialog Manager will not do anything when it
	  receives the EN_UPDATE message.
	
	NOTE: The key idea of this implementation is to "predict" whether the next
	character will fit in the edit control; if it will not, then add a new line to
	the control so that the character will fit. This prediction is accomplished by
	subtracting the width of "W" from the edge of the edit control's rectangle to
	get the limit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
