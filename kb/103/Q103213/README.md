---
layout: page
title: "Q103213: Printing in Visual Basic and C"
permalink: kb/103/Q103213/
---

## Q103213: Printing in Visual Basic and C

	Article: Q103213
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Printing from applications written for the Microsoft Windows version 3.1
	operating system can be trying at times. This article describes a convenient
	method for printing from applications using a Dynamic-Link Library (DLL) called
	EZPRINT.dll. EZPRINT provides three exported functions--StartDocument,
	PrintObject, and EndDocument--to start the printing job, print various objects
	on the page, and end the printing job. The sample DLL code and Visual Basic code
	that calls EZPRINT are included with this article. You may use the DLL as is or
	modify it to meet your needs. In its present form, EZPRINT prints text,
	rectangles, and lines with various attributes.
	
	This article was written for developers who have relatively little printing
	experience and whose printing needs involve text placement and simple line
	drawing only. Experienced developers can also use EZPRINT as a framework for
	implementing more sophisticated printing capabilities.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ezprint.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: kbfile softlib EZPRINT.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
