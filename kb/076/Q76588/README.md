---
layout: page
title: "Q76588: HookAll.exe Demos WH_CALLWNDPROC &amp; WH_GETMESSAGE Hooks"
permalink: /kb/076/Q76588/
---

## Q76588: HookAll.exe Demos WH_CALLWNDPROC &amp; WH_GETMESSAGE Hooks

{% raw %}

	Article: Q76588
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbHook kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HookAll.exe is a sample program in the Microsoft Download Center that
	demonstrates the use of WH_GETMESSAGE and WH_CALLWNDPROC hooks. The sample
	contains the code for a dynamic-link library (DLL) with functions to set and
	remove the hooks, as well as the hook filter functions. The filter functions use
	OutputDebugString to display a message when they receive a WM_LBUTTONDOWN
	message. The sample also contains code for an application that tests the DLL.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  HookAll.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: HookAll
	
	======================================================================
	Keywords          : kbfile kbsample kbHook kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
