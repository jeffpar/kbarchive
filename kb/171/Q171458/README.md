---
layout: page
title: "Q171458: Windows NT May Fail On Request to Open Large Files"
permalink: /kb/171/Q171458/
---

## Q171458: Windows NT May Fail On Request to Open Large Files

	Article: Q171458
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When an application tries to open large files (over 100MB), the open request may
	fail with one of the following error messages:
	
	  Insufficient Resources
	
	- or -
	
	  Invalid Handle
	
	The actual error returned varies depending on the application being used to open
	the file.
	
	
	RESOLUTION
	==========
	
	The allocation for paged-pool memory was modified to correct any problem that
	might occur on systems that have large files (greater 100MB) that are repeatedly
	opened sequentially, updated, and then closed.
	
	Ntoskrnl.exe and Ntkrnlmp.exe have been updated to correct this problem.
	
	Windows NT 3.51
	---------------
	
	To resolve this problem on Windows NT 3.51, obtain and install the hotfix. You
	must restart the computer for the fix to take effect. No registry changes are
	required on Windows NT 3.51.
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor, locate and select the following Registry subkey in the
	  HKEY_LOCAL_MACHINE subtree:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	     \Session Manager\Memory Management
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. From the Edit menu, click Add Value.
	
	3. Enter DisablePagedPoolHint as the value name and set the Data Type to
	  REG_DWORD.
	
	4. Click OK and enter 1 as the Data.
	
	5. Click OK, quit Registry Editor, and then shut down and restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix to
	this problem is in development, but has not been regression- tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: 3.51 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
