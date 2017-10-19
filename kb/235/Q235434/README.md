---
layout: page
title: "Q235434: FIX: &quot;Attach to Process&quot; List Is Empty"
permalink: /kb/235/Q235434/
---

## Q235434: FIX: &quot;Attach to Process&quot; List Is Empty

	Article: Q235434
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbOSWin2000 kbVC600bug kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbVS600
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the debugger, the "Attach to process" list is empty.
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	CAUSE
	=====
	
	The "Attach to process" list is populated using a performance counter API.
	Depending on the environment and the installed performance counter DLLs, the
	code to populate the list may fail.
	
	This bug only affects the "Attach to process" list when running on Windows NT and
	Windows 2000.
	
	RESOLUTION
	==========
	
	Resolution 1:
	
	You should be able to attach to the process using Task Manager:
	
	1. Enable just-in-time debugging (JIT):
	
	  a. In Visual C++, on the Tools menu, click Options.
	
	  b. On the Debug tab, make sure that Just-in-time debugging is selected.
	
	2. Run Task Manager and select the process to attach to. Right-click and select
	  Debug.
	
	
	Resolution 2:
	
	1. Run Task Manager and get the process ID for the process you want to debug.
	
	2. At a command prompt enter the following:
	
	"msdev -p <processid>" (without the quotation marks)
	This will start Visual C++ and will attach to the process specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	If the steps for Resolution 2 do not help, and if Resolution 1 is
	unsatisfactory, check the version of the operating system. Even though this bug
	is known to occur on Windows NT 4.0 as well Windows 2000, Resolution 2 may not
	work on Windows 2000. You may need to go back to a released version of Windows
	NT.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDebug kbide kbOSWin2000 kbVC600bug kbDSupport kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
