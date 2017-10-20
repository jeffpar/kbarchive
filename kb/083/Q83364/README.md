---
layout: page
title: "Q83364: FlshEdit.exe Demonstrates Flashing an Edit Control"
permalink: /kb/083/Q83364/
---

## Q83364: FlshEdit.exe Demonstrates Flashing an Edit Control

{% raw %}

	Article: Q83364
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProp kbOSWin3
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application window or dialog box has a number of edit controls, the user
	can lose track of the control that has the input focus. FlshEdit.exe is a sample
	in the Microsoft Download Center that demonstrates how to make an edit control
	flash to indicate that the control has the input focus. The technique used by
	FLSHEDIT is similar to calling the FlashWindow function. FlashWindow flashes the
	caption bar on a window to gain the user's attention.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  FlshEdit.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The FLSHEDIT sample contains a dialog box with four edit controls. The
	application uses one timer, which is used to flash whichever edit control has
	the focus. The application sets the timer each time an edit control receives the
	input focus (an EN_SETFOCUS message). The timer is destroyed when an edit
	control loses the input focus (an EN_KILLFOCUS message) or when the context of
	the edit control changes (an EN_CHANGE message).
	
	When the specified time elapses and the application receives a WM_TIMER message,
	the application invalidates the contents of the edit control and specifies the
	new text and background colors. Then Windows redraws the control using the new
	colors.
	
	Therefore, a control stops flashing when either of the following events take
	place:
	
	- The user takes the input focus away from the control.
	
	- The user changes the text contents of the control.
	
	The FLSHEDIT application provides an option to stop the flashing and to change
	the color of the flashing.
	
	In addition to flashing, the FLSHEDIT sample changes the text in an edit control
	to indicate that the control has the input focus. However, if the user changes
	the contents of an edit control, the changed text remains even after the user
	moves the input focus to another control. If the user changes the text to an
	empty string, the edit control regains its default contents.
	
	Windows 3.0 does not properly change the background color of a single-line edit
	control.
	
	
	FLSHEDIT incorporates the first method provided by this Knowledge Base article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProp kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
