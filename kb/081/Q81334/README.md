---
layout: page
title: "Q81334: KBHook2.exe Demonstrates Using a WH_KEYBOARD Hook"
permalink: kb/081/Q81334/
---

## Q81334: KBHook2.exe Demonstrates Using a WH_KEYBOARD Hook

	Article: Q81334
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbHook kbSDKPlatform kbGrpDSUser kbOSWin310 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	KBHOOK2 is a file in the Microsoft Download Center that contains sample code to
	demonstrate installing and using a system-wide WH_KEYBOARD keyboard filter
	function (otherwise known as a keyboard hook function). This code monitors the
	status of the CAPS LOCK key. Whenever the CAPS LOCK key is pressed, its status
	is displayed on the application's icon. Terminating the application removes the
	keyboard filter from the system.
	
	KBHOOK2 updates the KBHOOK sample to use new functions provided by Windows 3.1.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  KBHook2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	KBHOOK2 contains an application program, KEYAPP, and a dynamic-link library
	(DLL), KEYHOOK, that implements the keyboard filter function. The KEYHOOK DLL
	uses the new Windows 3.1 hook functions: SetWindowsHookEx, UnhookWindowsHookEx,
	and CallNextHookEx.
	
	KEYAPP calls KEYHOOK to install the keyboard filter function and then makes
	itself iconic. Windows calls KEYHOOK each time a key is pressed. When the CAPS
	LOCK key is pressed, KEYHOOK posts a message to KEYAPP. KEYAPP processes the
	message by painting its icon to display the current state of CAPS LOCK. When
	KEYAPP is terminated, the KEYHOOK filter is removed from the system.
	
	NOTE: Compiling this sample as is will fail with the error that the include file
	CONVDLL.INC cannot be found. To correct the problem, simply remove the line
	
	  INCLUDE CONVDLL.INC
	
	from the LIBENTRY.ASM.
	
	Additional query words: KBHook2
	
	======================================================================
	Keywords          : kbfile kbsample kbHook kbSDKPlatform kbGrpDSUser kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
