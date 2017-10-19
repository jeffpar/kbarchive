---
layout: page
title: "Q82076: DataVal.exe Demonstrates Edit Control Validation"
permalink: /kb/082/Q82076/
---

## Q82076: DataVal.exe Demonstrates Edit Control Validation

	Article: Q82076
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOS
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DataVal.exe is a file in the Microsoft Download Center that demonstrates how to
	validate the contents of one or more edit controls within the same dialog box
	without subclassing the edit controls.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DataVal.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	DATAVAL processes the EN_KILLFOCUS message, which the dialog box receives after
	an edit control has lost the input focus. When the dialog box receives an
	EN_KILLFOCUS message, it calls a validation function to determine if the
	contents of the control losing focus is valid. If the contents is not valid,
	then the dialog box posts a user- defined "not valid" message to itself. When
	the dialog box processes the "not valid" message, it displays a message box
	alerting the user of the error, and then sets focus back to the control with
	invalid contents. A cancel button in the dialog box allows the user to exit the
	dialog box without performing validation.
	
	An application is in an unstable state when it receives an EN_KILLFOCUS message;
	Windows is in the process of switching focus between windows. Therefore, the
	application must use PostMessage to provide the "not valid" message or the
	application can enter an infinite loop.
	
	Additional query words: DataVal
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
