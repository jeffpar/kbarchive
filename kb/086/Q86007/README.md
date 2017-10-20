---
layout: page
title: "Q86007: DOC: Correction to JournalRecordProc Documentation"
permalink: /kb/086/Q86007/
---

## Q86007: DOC: Correction to JournalRecordProc Documentation

{% raw %}

	Article: Q86007
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbHook kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the documentation for the JournalRecordProc on page 561 of the "Microsoft
	Windows Software Development Kit: Programmer's Reference, Volume 2: Functions"
	manual and in the Windows SDK online help file, the lParam parameter passed to a
	JournalRecordProc callback function is documented incorrectly.
	
	The documentation should state the lParam points to an EVENTMSG data structure,
	which is defined as follows:
	
	     typedef struct tagEVENTMSG {
	
	     UINT  message;
	     UINT  paramL;
	     UINT  paramH;
	     DWORD time;
	
	     } EVENTMSG;
	
	The EVENTMSG data structure is defined in the WINDOWS.H include file provided
	with version 3.1 of the Windows SDK.
	
	Additional query words: 3.10 WH_JOURNALRECORD
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbHook kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
