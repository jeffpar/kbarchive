---
layout: page
title: "Q99808: MsgColor.exe Changes Msg. Box Background &amp; Text Color"
permalink: /kb/099/Q99808/
---

## Q99808: MsgColor.exe Changes Msg. Box Background &amp; Text Color

	Article: Q99808
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMessageBox kbGrpDSUser kbOSWin310
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MsgColor.exe is a sample file that demonstrates how to change the background and
	text color of a message box by subclassing the message box.
	
	MsgColor.exe implements the ColorMessageBox() function, which creates a message
	box whose background and text color can be changed. The function subclasses the
	message box and processes WM_CTLCOLOR to modify the colors. Subclassing the
	message box requires obtaining the window handle of the message box. The window
	handle is obtained using a WH_CBT hook. The hook is called when the message box
	is created, and provides access to the window handle.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Msgcolor.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbMessageBox kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
