---
layout: page
title: "Q81332: HookAll2.exe Demos WH_CALLWNDPROC &amp; WH_GETMESSAGE Hooks"
permalink: kb/081/Q81332/
---

## Q81332: HookAll2.exe Demos WH_CALLWNDPROC &amp; WH_GETMESSAGE Hooks

	Article: Q81332
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HookAll2.exe is a sample that demonstrates how to use the WH_GETMESSAGE and
	WH_CALLWNDPROC hooks in Windows 3.1. HookAll2.exe contains the code for a
	dynamic-link library (DLL) with functions that set and remove the hooks, as well
	as the hook filter functions. The DLL uses the new hook functions provided by
	Windows 3.1: SetWindowsHookEx, UnhookWindowsHookEx, and CallNextHookEx.
	HookAll2.exe also contains code for a TESTHOOK application that tests the DLL.
	
	HookAll2.exe updates the HOOKALL sample to use the features provided by Windows
	3.1. For more information about HOOKALL, query on the following words in the
	Microsoft Knowledge Base:
	
	  " hookall " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	HookAll2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	With the exception of WM_LBUTTONDOWN messages, the hook filter functions pass all
	messages directly to the next hook function in the hook chain. When they receive
	a WM_LBUTTONDOWN message, the filter functions draw a rectangle of random size
	and color in the TESTHOOK application's client area. One corner of the rectangle
	is at the point where the user pressed the mouse button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbHook kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
