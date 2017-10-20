---
layout: page
title: "Q113190: Npclnt.exe WFW Named Pipe Client"
permalink: /kb/113/Q113190/
---

## Q113190: Npclnt.exe WFW Named Pipe Client

{% raw %}

	Article: Q113190
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbsample kbAPI kbIPC kbPipes kbSDKPlatform kbOSWin311 kbGrpDSNet
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample Npclnt.exe in the Microsoft Download Center demonstrates the named
	pipe client interface in Windows for Workgroups (WFW).
	
	This sample provides a WFW named pipe client for the Win32 SDK named pipe sample
	(NPSERVER). This sample opens, reads, and writes to the named pipe created by
	the NPSERVER application. The DosReadAsyncNmPipe API is used to perform
	asynchronous reads from the server's named pipe to avoid blocking under WFW.
	
	NOTE: This sample has two problems.
	
	- The NP callback should be in a fixed code segment in a DLL.
	
	- Memory passed to DosReadAsyncNmPipe and DosWriteAsyncNmPipe should be fixed
	  and pagelocked.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Npclnt.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Care must be taken when using DosReadAsyncNmPipe or DosWriteAsyncNmPipe. Because
	both APIs provide WFW a function pointer that is called at interrupt time, only
	limited operations may be performed in the callback. The WFW SDK reference
	states the following about the callback function:
	
	  Generally, the callback function can set global variables and check the
	  variable specified by the pusErrCode parameter for potential errors. But the
	  callback function must not modify registers or call any MS-DOS system
	  functions, BIOS functions, or C run-time functions that call MS- DOS and BIOS
	  functions. Although the callback function can call the PostMessage function,
	  it must not call the SendMessage function.
	
	Also, the callback function must be exported in the application's *.DEF file.
	Besides exporting, the application must call MakeProcInstance on the function
	before calling the asynchronous API. Care must also be taken not to call
	FreeProcInstance while a read or write is outstanding.
	
	Additional query words: WFW Workgroups Named Pipe DosReadAsyncNmPipe DosWriteAsyncNmPipe
	
	======================================================================
	Keywords          : kbfile kbnetwork kbsample kbAPI kbIPC kbPipes kbSDKPlatform kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch kbWinSDK311
	Version           : :3.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
