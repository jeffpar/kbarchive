---
layout: page
title: "Q81610: Ecovrwrt.exe - Multiline Edit Control Overwrite Mode"
permalink: /kb/081/Q81610/
---

## Q81610: Ecovrwrt.exe - Multiline Edit Control Overwrite Mode

	Article: Q81610
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ecovrwrt.exe is a file in the Microsoft Download Center that demonstrates how an
	application can implement a multiline edit control in which the user can toggle
	between "insert" mode and "overwrite" mode. In insert mode, new text pushes any
	existing text further to the right. In overwrite mode, new text replaces any
	existing text.
	
	To implement overwrite mode, Ecovrwrt.exe subclasses the multiline edit control.
	When the control is in overwrite mode, when the control receives a WM_CHAR
	message, the character after the selection point is selected and replaced with
	the character in the wParam of the message.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Ecovrwrt.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: Ecovrwrt
	
	======================================================================
	Keywords          : kbfile kbsample kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
