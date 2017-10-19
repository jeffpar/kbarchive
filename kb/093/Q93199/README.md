---
layout: page
title: "Q93199: SAMPLE: ChildMnu.exe Implements a Child Window with Menus"
permalink: /kb/093/Q93199/
---

## Q93199: SAMPLE: ChildMnu.exe Implements a Child Window with Menus

	Article: Q93199
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbWndw kbWndwProp
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ChildMnu.exe demonstrates one way to embed a pop-up window with menus in a child
	window to simulate a child window with menus.Child windows by design do not have
	menus; however, some applications may require such child windows.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	ChildMnu.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Child windows were not designed to have menus but under certain circumstances an
	application may require a child window with menus. Below are the steps to
	simulate a child window with menus:
	
	1. Create the child for a main window using standard methods.
	
	2. Create a pop-up window without a caption or border. The pop-up window should
	  take up the entire client area of the child window.
	
	3. Moving: Set the child window as the parent of the pop-up window using
	  SetParent(). This method clips the pop-up window to the child's client and
	  moves the pop-up window relative to the child window when the child moves.
	
	4. Sizing: If the child window has sizing borders, then the pop-up window must
	  be adjusted as the child is sized.
	
	  Correct sizing of the pop-up window can be accomplished by processing the
	  child window's WM_SIZE message. When the child window receives a WM_SIZE
	  message, the child's new client area is calculated and the pop-up window is
	  adjusted.
	
	5. Activation: Child windows are not activated by design. When the user clicks
	  the pop-up window, activation is taken away from the main window and is given
	  to the pop-up window. To simulate the main window's activation, the pop-up's
	  window procedure, upon receiving a WM_ACTIVATE message, posts a WM_NCACTIVATE
	  message to the main window.
	
	  Note: This step causes flashing because the caption is repainted when going
	  back and forth between the pop-up window and the main window. Unfortunately,
	  there is no sure way to accomplish the change of caption's activation.
	
	Other Considerations
	--------------------
	
	Maximizing: When a child window is maximized, it uses the screen's maximum size.
	To have the child window act similar to an MDI child, two messages need to be
	processed; WM_SIZE in the main parent's window procedure and WM_GETMINMAXINFO in
	the child's window procedure.
	
	WM_SIZE of the child's parent window procedure checks for SIZE_MAXIMIZE and
	SIZE_RESTORE. Then, if the child window is maximized, call ShowWindow() with
	SW_MAXIMIZED. This method adjusts the child window's size to the new size of the
	parent's client area.
	
	On WM_GETMINMAXINFO of the child's window procedure, calculate the size of the
	parent's client area. Use the newly calculated size and set the ptMaxSize
	variable of the MINMAXINFO structure. This ensures that the child is always
	fully contained within its parent client area when maximized.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbWndw kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
