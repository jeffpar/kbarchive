---
layout: page
title: "Q81814: ToolBox.exe Implements a &quot;Tool Box&quot; Window"
permalink: /kb/081/Q81814/
---

## Q81814: ToolBox.exe Implements a &quot;Tool Box&quot; Window

	Article: Q81814
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProp kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ToolBox.exe is a file in the Microsoft Download Center that demonstrates how to
	implement a tool box window in an application. The Image Editor and the Dialog
	Editor are two applications provided with the Windows SDK that demonstrate a
	"tool box" window.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ToolBox.exe
	  (http://download.microsoft.com/download/platformsdk/sample76/3.1/W31/EN-US/ToolBox.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	A tool box window contains a group of icons that the user can choose at any time.
	The tool box window always floats above the application with which it is
	associated.
	
	The code in TOOLBOX assumes that all buttons in the tool box have the same size
	and are equally spaced throughout the window. TOOLBOX implements the following
	four steps to create the tool box window:
	
	1. Loads the bitmap that provides the visual appearance for all the buttons.
	
	2. Creates the tool box window with the WS_EX_TOPMOST style bit set. Sizes the
	  window appropriately based on the size of the bitmap.
	
	3. Processes the WM_ACTIVATE message in the window procedure for the
	  application's main window. If the main window or the tool box window is being
	  activated, TOOLBOX calls SetWindowPos() to add the WS_EX_TOPMOST style to the
	  window. If a window other than the main window or the tool box window is
	  being activated, TOOLBOX calls SetWindowPos() to remove the WS_EX_TOPMOST
	  style from the window.
	
	4. Performs the following two steps in the window procedure for the tool box
	  window:
	
	  a. Processes the WM_LBUTTONDOWN message. Performs hit testing to determine
	     which button the user chose. To make the button appear depressed, TOOLBOX
	     determines the rectangle for the button. TOOLBOX uses the InvertRect
	     function to invert the colors of the button.
	
	  b. Processes the WM_PAINT message. TOOLBOX uses the StretchBlt() function to
	     paint the bitmap onto the window. If any button is depressed, TOOLBOX
	     inverts the appropriate region as above.
	
	Although this sample does not demonstrate every possibility for tool box windows,
	the sample is very straightforward and easily modified.
	
	Additional query words: ToolBox
	
	======================================================================
	Keywords          : kbfile kbsample kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbWndwProp kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
