---
layout: page
title: "Q40962: DllInst.exe-Multiple Application Instance Data in a DLL"
permalink: /kb/040/Q40962/
---

## Q40962: DllInst.exe-Multiple Application Instance Data in a DLL

{% raw %}

	Article: Q40962
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DllInst.exe is a sample in the Microsoft Download Center that demonstrates how a
	dynamic-link library (DLL) can interact with more than one application at a time
	with each interaction independent from the others. To illustrate the
	independence of each interaction, the DLL maintains separate data for each
	application instance. This article discusses the techniques used in DLLINST.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DllInst.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When a DLL receives a call from an application, nothing in the call specifies the
	application instance involved. Because instance information is required to
	ensure that each interaction is independent, the application's instance is one
	of the parameters for the interface functions provided by the DLL.
	
	If the DLL contains global data that are used by each application instance, the
	following techniques help avoid data access conflicts:
	
	1. Use a flag as a mutual-exclusion semaphore. This will ensure that only one
	  application instance can use the DLL at any given time.
	
	2. Use additional storage in the DLL to provide each application instance with
	  its own data area. One way to implement this is through a list of records
	  that is indexed by the instance.
	
	DLLINST is a sample application in the Microsoft Download Center that
	demonstrates the technique of tracking the identity of the calling application.
	The DLL provides a primitive string edit functionality within a dialog box, and
	keeps separate buffers indexed by the application instance for each open
	dialog.
	
	The DLLINST file contains the source code to two modules, DLLINST.EXE and
	DLGDLL.DLL. The DLGDLL file implements the second technique listed above:
	instanced data for each calling application.
	
	Multiple instances of the DLLINST application can call into the DLGDLL DLL to
	demonstrate the techniques.
	
	Note that the application passes hInst (the application's instance handle) to the
	DLL through the call to the TestDLLDlg function in MainWndProc.
	
	As an alternative, the DLL can call the GetCurrentTask function to determine
	which instance is calling. This eliminates the requirement that hInst be passed
	in. If the DLL uses hWnd, the DLL can maintain a separate data area for each
	window rather than for each instance. This technique might be useful for a
	Multiple Document Interface (MDI) application.
	
	DLLINST "unregisters" each application before it returns, which frees the buffer
	for use by another instance. This prevents data from persisting across calls to
	the DLL. Although the DLL can recognize and register a new instance that calls
	the DLL for the first time, to implement persistent data, each instance must
	call a cleanup function in the DLL before terminating. This prevents a possible
	problem where an instance terminates and its handle is reused by a new
	instance.
	
	In Windows version 3.1, the TOOLHELP DLL provides the NFY_EXITTASK notification
	to inform a callback function that a task terminated. The DLL can use this to
	unregister an application, even if it terminated abnormally. The callback
	function can use the GetCurrentTask and TaskFindHandle functions to determine if
	the terminating task has called the DLL.
	
	The following relevant function is in the DLLINST.C file:
	
	MainWndProc    Processes messages for the application. Calls the
	              TestDLLDlg function in DLGDLL to display a dialog box
	              that edits data for a calling instance.
	
	The following relevant functions are in the DLGDLL.C file:
	
	DlgProc        Processes messages for DLL dialog box and writes
	              DlgItemText to the correct buffer.
	
	TestDLLDlg     Called by each instance of the application to display a
	              dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
