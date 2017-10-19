---
layout: page
title: "Q72023: SAMPLE: Verify.exe - Data Input Verification for Edit Controls"
permalink: /kb/072/Q72023/
---

## Q72023: SAMPLE: Verify.exe - Data Input Verification for Edit Controls

	Article: Q72023
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbCtrl kbDlg kbEditCtrl kbSDKPlatform kbGrpDSUser kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a file in the Microsoft Download Center called VERIFY.EXE that contains
	sample code demonstrating the verification of the contents of a dialog box edit
	control. The code reads and verifies the edit control string as each character
	is entered by the user.
	
	The contents of the edit control are verified to be legal for a specified data
	type. If an illegal character is encountered, the character is removed from the
	edit control and a message beep is generated. The code will verify the input of
	WORD, DWORD, or FLOAT values.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Verify.exe
	  (http://download.microsoft.com/download/platformsdk/sample86/3.1/W31/EN-US/Verify.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbCtrl kbDlg kbEditCtrl kbSDKPlatform kbGrpDSUser kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
