---
layout: page
title: "Q81333: MousHook.exe Demonstrates Windows 3.1 WH_MOUSE Hook"
permalink: /kb/081/Q81333/
---

## Q81333: MousHook.exe Demonstrates Windows 3.1 WH_MOUSE Hook

	Article: Q81333
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MousHook.exe is a sample that demonstrates how to install and use a WH_MOUSE
	mouse message hook. The mouse message hook in MousHook.exe disables the right
	mouse button for all applications in the system by discarding WM_RBUTTONDOWN and
	WM_NCRBUTTONDOWN messages. The mouse hook function beeps each time it discards a
	message.
	
	MousHook.exe contains the source to an application program, TESTAPP, and a
	dynamic-link library (DLL), MousHook.dll, that implements the mouse hook. The
	MousHook.dll uses the new hook functions provided by Windows 3.1:
	SetWindowsHookEx(), UnhookWindowsHookEx(), and CallNextHookEx().
	
	TESTAPP calls MOUSHOOK to install the mouse hook. When TESTAPP is closed, it
	removes the mouse hook from the system.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MousHook.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
