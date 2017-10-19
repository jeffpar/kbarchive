---
layout: page
title: "Q74509: DlgIcons.exe Dynamically Changes Icons in Modal Dialog"
permalink: /kb/074/Q74509/
---

## Q74509: DlgIcons.exe Dynamically Changes Icons in Modal Dialog

	Article: Q74509
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbIcon kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DlgIcons.exe is a sample in demonstrates how to dynamically change an icon in a
	modal dialog box.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DlgIcons.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The modal dialog box displays an icon by creating a static child window with the
	SS_ICON style. The lpWindowName parameter to the CreateWindow() function
	specifies the icon to be displayed. To change the icon, the dialog destroys the
	child and creates a new child in the same location.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbIcon kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
