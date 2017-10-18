---
layout: page
title: "Q37657: RCData.exe Uses User-Defined Resources in Windows Apps"
permalink: kb/037/Q37657/
---

## Q37657: RCData.exe Uses User-Defined Resources in Windows Apps

	Article: Q37657
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RCData.exe is a sample that demonstrates how to use a user-defined resource in a
	Windows-based application.
	
	The resource is declared in the resource (RC) file as follows:
	
	     TEST RCDATA
	     BEGIN
	         <data goes here>
	     END
	
	An application accesses this resource with the following statements:
	
	     hFound = FindResource(hInstance, "TEST", RT_RCDATA);
	     hRes = LoadResource(hInstance, hFound);
	     lpBuff = LockResource(hRes);
	     // use lpBuff to access the resource contents
	     bResult = UnlockResource(hRes);
	     bResult = FreeResource(hRes);
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  RCData.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
