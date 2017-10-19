---
layout: page
title: "Q84900: PRB: Vertical Bars Displayed in Message Box, Control Text"
permalink: /kb/084/Q84900/
---

## Q84900: PRB: Vertical Bars Displayed in Message Box, Control Text

	Article: Q84900
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMessageBox kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application runs under Windows 3.0, text in a message box or in a
	child-window control appears on two lines, as desired. However, under Windows
	3.1, the same text appears as one line with two vertical bars at the position
	where the line break should appear.
	
	CAUSE
	=====
	
	The character sequence "\n\r" was used to separate the two lines of text.
	
	RESOLUTION
	==========
	
	Modify the text to use the character sequence "\r\n" to break lines of text.
	
	MORE INFORMATION
	================
	
	In an application developed for the Windows environment, various text strings
	can contain an embedded carriage return-linefeed pair to display the text on two
	separate lines. For example, an application can send the following message to a
	multiline edit control in a dialog box to display the string "This is a test" on
	two lines with a break between the words "a" and "test":
	
	     SetDlgItemText(hDlg, IDC_MEDIT, (LPSTR)"This is a\r\ntest."));
	
	Under Windows 3.0, both the "\r\n" and "\n\r" strings create a new line in the
	output text. However, under Windows 3.1, only the "\r\n" string creates a new
	line in the output. The "\n\r" string creates the two vertical bars previously
	discussed.
	
	Additional query words: 3.00 3.10 static
	
	======================================================================
	Keywords          : kb16bitonly kbMessageBox kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
