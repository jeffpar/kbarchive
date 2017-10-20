---
layout: page
title: "Q196712: Performance Monitor Hangs on Startup or When Adding Counters"
permalink: /kb/196/Q196712/
---

## Q196712: Performance Monitor Hangs on Startup or When Adding Counters

{% raw %}

	Article: Q196712
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Performance Monitor utility, Perfmon.exe, may stop responding (hang) when
	starting or when trying to add counters.
	
	CAUSE
	=====
	
	This problem can be caused by the failure of one or more extensible counter
	DLLs. To try and narrow it down, you could try to disable the extensible counter
	DLLs to prevent them from being loaded. If this solves the problem, enable the
	extensible counter DLLs one at a time to see when it breaks again.
	
	RESOLUTION
	==========
	
	To disable one or more extensible counter DLLs:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start the Registry Editor (RegEdt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Services
	
	3. Click Find Key on the View menu.
	
	4. Type Performance as the search string, and then search down from there.
	
	5. At each Performance entry you find, select the Library value and modify the
	  library name by replacing the DLL portion of the name three Xs (xxx).
	
	  For example, change OrigLib.dll to OrigLib.xxx
	
	6. When you have done this for each Performance entry under the
	  CurrentControlSet\Services key, restart Perfmon to see whether it works. If
	  it does, repeat the above two steps, but restore the original library name
	  and try Perfmon after each change to see which library caused the fault.
	
	MORE INFORMATION
	================
	
	For additional information on finding Performance Monitor problems, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q152513 Troubleshooting Performance Monitor Counter Problems
	
	Additional query words: troubleshoot winnt freezes hangs lockup locks
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
