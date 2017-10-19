---
layout: page
title: "Q103210: Designing DLLs for Multiple Client Applications"
permalink: /kb/103/Q103210/
---

## Q103210: Designing DLLs for Multiple Client Applications

	Article: Q103210
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is a companion article to "Designing DLLs for Multiple Client Applications,
	Part 1: Strategy," also available on the Microsoft Developer Network CD. That
	article discusses various strategies for allowing Microsoft Windows dynamic-link
	libraries (DLLs) to provide services to multiple client applications.
	
	This article describes how the associated Grocery Shopper sample application
	implements some of the client-server strategies described in Part 1. It begins
	with an overview of the sample application's architecture, and then proceeds to
	analyze how the application programming interface (API) is implemented, how the
	DLL manages multiple clients, and how information hiding is enforced. Among the
	features of the sample code are registration and deregistration APIs,
	enumeration callbacks, delayed resource allocation, and custom
	event-notification messages.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Dllstrt2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: kbfile DLLSTRT2.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
