---
layout: page
title: "Q85633: SAMPLE: SplitWin.exe Splits a Window into Two Panes"
permalink: kb/085/Q85633/
---

## Q85633: SAMPLE: SplitWin.exe Splits a Window into Two Panes

	Article: Q85633
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SplitWin.exe is a sample in the Microsoft Download Center that demonstrates how
	to split a window into two panes using the mouse or keyboard. Each pane can be
	scrolled independently in the vertical direction. Scrolling the lower child
	horizontally, however, causes the upper child to scroll by the same amount.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  SplitWin.exe
	  (http://download.microsoft.com/download/platformsdk/sample66/3.1/W31/EN-US/SplitWin.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The SPLITWIN sample creates a frame window that has a child window. The child
	window fills the client area of the frame window. When the user splits the
	window, SPLITWIN creates a second child window. The two child windows are sized
	according to the position of the split bar.
	
	The user can change the position of the split bar using either the mouse or the
	arrow keys. After the window is split, it can be restored to its original state
	by dragging the split bar off the frame window or by selecting a position that
	does not provide enough room to create the second window.
	
	When the user clicks the mouse button in the split bar, SPLITWIN starts a
	PeekMessage() loop that processes mouse and keyboard messages. The PatBlt()
	function updates the position of the split bar as it is dragged.
	
	Additional query words: synchronize
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
