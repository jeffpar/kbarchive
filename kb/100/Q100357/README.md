---
layout: page
title: "Q100357: SAMPLE: Xtenaccl.exe - Accelerators for File Manager Extensions"
permalink: /kb/100/Q100357/
---

## Q100357: SAMPLE: Xtenaccl.exe - Accelerators for File Manager Extensions

	Article: Q100357
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbFileManExt kbHook kbInput kbKeyAccel kbGrpDSUser kbOSWin310 kbGrpDSSh
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Xtenaccl.exe is a sample that installs a task-specific message hook
	(WH_GETMESSAGE) and calls TranslateAccelerator() on every WM_KEY and WM_KEYDOWN
	message. If an appropriate accelerator is found, TranslateAccelerator() passes a
	WM_COMMAND to the main window. File Manager extensions cannot directly use
	accelerators because extensions do not have their own message pump. File Manager
	pulls messages on behalf of the extensions, and does not load and translate
	extension's accelerators.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Xtenaccl.exe
	  (http://download.microsoft.com/download/platformsdk/sample/6/W31/EN-US/Xtenaccl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The main window of File Manager handles and processes the WM_COMMAND message
	passed to it by TranslateAccelerator(). However, File Manager does not know how
	to handle that message because wParam (containing menu IDs) is defined by the
	extension. To interpret the correct value, File Manager dynamically changes an
	extension's menu IDs to suit its own needs. Therefore, XTENACCL traps the
	WM_COMMAND message passed by TranslateAccelerator() and routes it to a child
	window of its own. The child window in turn processes the menu command.
	
	To intercept the WM_COMMAND message, XTENACCL is using a second message hook that
	is of type WH_CALLWNDPROC. Because TranslateAccelerator() sends a WM_COMMAND
	instead of posting it, this second hook was needed.
	
	Additional query words: 0 file manager extension
	
	======================================================================
	Keywords          : kbfile kbsample kbFileManExt kbHook kbInput kbKeyAccel kbGrpDSUser kbOSWin310 kbGrpDSShell kb16bitonly kbAcceleratorKey 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
