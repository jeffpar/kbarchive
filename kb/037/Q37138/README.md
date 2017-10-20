---
layout: page
title: "Q37138: Journal.exe Contains Windows Journal Hooks Source Code"
permalink: /kb/037/Q37138/
---

## Q37138: Journal.exe Contains Windows Journal Hooks Source Code

{% raw %}

	Article: Q37138
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Journal.exe is a sample that demonstrates how to use the journal hooks
	WH_JOURNALRECORD and WH_JOURNALPLAYBACK. The JOURNAL archive file contains the
	source to App.exe; WNDPROC.C is one of the source files.
	
	The App.exe application serves only one purpose; it illustrates how to call the
	dynamic-link library (DLL) that performs all of the journaling work. The
	WNDPROC.C application module contains calls to the DLL to record and play back
	messages. One of the source modules for the DLL, JOURNAL.C, contains all the
	code required to create Diary.bin, a file of messages. The messages in Diary.bin
	can be played back at a later time. The Diary.bin file is overwritten each time
	the user chooses Record On from the menu.
	
	The Journal.exe code can serve as the basis of a "hands off" application
	demonstration. The application demonstrating itself can call the high- level
	functions in the DLL to play each event.
	
	The Diary.bin file is also included in the JOURNAL archive to demonstrate using
	journal hooks. To demonstrate playing the contents of a Diary.bin file, select
	Play from the menu.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Journal.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
