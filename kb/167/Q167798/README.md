---
layout: page
title: "Q167798: FIX: Can Not Attach Process to Debugger from NT Task Manager"
permalink: /kb/167/Q167798/
---

## Q167798: FIX: Can Not Attach Process to Debugger from NT Task Manager

{% raw %}

	Article: Q167798
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbide kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Visual C++ version 5.0, you may not be able to attach an active
	process from Windows NT Task Manager. A message box titled "Unable to Attach
	Debugger" with the following error message appears:
	
	  The operation could not be completed. The system cannot find the file
	  specified.
	
	CAUSE
	=====
	
	This happens because the registry entry in HKEY_LOCAL_MACHINE\SOFTWARE\
	Microsoft\Windows NT\CurrentVersion\AeDebug has a space in the path to
	MSDEV.EXE. By default, the installed path to MSDEV.EXE is C:\Program
	Files\DevStudio\SharedIDE\BIN\.
	
	RESOLUTION
	==========
	
	The resolution is to change the entry in the AeDebug registry key to:
	
	  "<install drive>\Program Files\DevStudio\SharedIDE\BIN\msdev.exe" -p %id - e %id
	
	The quotation marks around the executable path and name are necessary in order to
	correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The registry key HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\
	CurrentVersion\AeDebug is used to attach the Visual C++ debugger to an active
	process by launching MSDEV.EXE. It is also used by Just-In-Time (JIT) debugging
	for the same purpose.
	
	After you install Visual C++, the above registry key will have the following
	value:
	
	<drive>\Program Files\DevStudio\SharedIDE\BIN\msdev.exe -p %id -e %id
	
	where <drive> is the drive letter where Visual C++ is installed.
	
	JIT debugging works fine with the value above.
	
	The following are two ways you can attach an active process to the Visual C++
	debugger:
	
	- In Developer Studio, from the Build menu, Start Debug allows you to Attach to
	  Process where you select an active process from the list provided.
	
	- In Windows NT, open the Task Manager, right-click an active process, and
	  select Debug in the pop-up window. This attaches the Visual C++ debugger to
	  the selected active process.
	  For additional information about this method , please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q120707 How to Debug an Active Process in 32-bit Visual C++
	
	
	The first method works without having to incorporate the fix described in this
	article because Visual C++ is already running.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Windows NT Task Manager by pressing CTRL+ALT+DEL, and then select Task
	  Manager from the system dialog box.
	
	2. Click the Processes tab, then right-click the process you want to attach to
	  the debugger, and select Debug. If the fix described above is not in place,
	  you will not be able to debug the process and you will receive the error
	  message described in the SYMPTOMS section.
	
	As mentioned earlier, Just-in-time debugging and attaching to a process from
	Developer Studio works without using the fix described in this article.
	
	WARNING: Toggling the Just-in-time debugging check box in the Developer Studio
	Options, Debug Menu tab rewrites the AeDebug registry key back to its original
	value.
	
	======================================================================
	Keywords          : kbtool kbDebug kbide kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
