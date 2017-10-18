---
layout: page
title: "Q47499: Talk.exe Shares Global Memory Between Applications"
permalink: kb/047/Q47499/
---

## Q47499: Talk.exe Shares Global Memory Between Applications

	Article: Q47499
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbDDE
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Talk.exe is a sample application in the Microsoft Download Center that
	demonstrates how to share data between two applications without having to use
	dynamic data exchange (DDE). TALK contains two applications (POST and HELLO)
	that demonstrate three different ways to pass information between two
	applications. Please note that either the GMEM_DDESHARE or the GMEM_NOTBANKED
	flag must be specified when the memory is allocated. This ensures that the
	memory referenced by the handle is available even when Windows is running in
	real mode and EMS memory is in use.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Talk.exe
	  (http://download.microsoft.com/download/platformsdk/sample72/3.1/W31/EN-US/Talk.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: Although the principles of message-based DDE communication shown in the
	TALK sample are compatible with Windows 3.1, Microsoft strongly recommends that
	new applications for Windows 3.1 and later use the DDEML library provided by the
	system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
