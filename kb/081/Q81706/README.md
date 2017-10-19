---
layout: page
title: "Q81706: OwnCombo.exe Demonstrates an Owner-Draw Combo Box"
permalink: /kb/081/Q81706/
---

## Q81706: OwnCombo.exe Demonstrates an Owner-Draw Combo Box

	Article: Q81706
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbComboBox kbCtrl kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows creates an owner-draw combo box, it sends WM_DRAWITEM messages to
	the parent window of the combo box. To respond to this message, the parent
	window must perform the steps necessary to draw the items in the owner-draw
	combo box.
	
	OwnCombo.exe is a sample in the Microsoft Download Center that contains an
	example of a fixed-height owner-draw combo box that contains strings. The combo
	box also demonstrates painting bitmaps, changing the text color, and storing
	data associated with each item using the CB_SETITEMDATA message. All of the
	relevant code is contained within the ODDLG.C module.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  OwnCombo.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: OwnCombo
	
	======================================================================
	Keywords          : kbfile kbsample kbComboBox kbCtrl kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
