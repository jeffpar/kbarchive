---
layout: page
title: "Q174840: Disabling Buttons in the Windows NT Security Dialog Box"
permalink: kb/174/Q174840/
---

## Q174840: Disabling Buttons in the Windows NT Security Dialog Box

	Article: Q174840
	Product(s): Microsoft Windows NT
	Version(s): WinNT4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You cannot disable the Lock Workstation, Change Password, or Task Manager
	buttons when you press CTRL+ALT+DELETE.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	After you apply the hotfix, perform one of the following:
	
	- Run Regedt32.exe and add the following value(s) to the registry:
	
	   - To disable the LOCK WORKSTATION button, create the following value in the
	     registry:
	
	     NOTE: The System key may need to be created.
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	     \Policies\System\ 
	
	     DisableLockWorkstation = 1 (DWORD Hexadecimal value)
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	   - To disable the CHANGE PASSWORD button, create the following value in the
	     registry:
	
	     NOTE: The System key may need to be created.
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	     \Policies\System\ 
	
	     DisableChangePassword = 1 (DWORD Hexadecimal value)
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	   - To disable the TASK MANAGER button, create the following value in the
	     registry:
	
	     NOTE: The System key may need to be created.
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	     \Policies\System\ 
	
	     DisableTaskMgr = 1 (DWORD Hexadecimal value)
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	  -or-
	
	- Copy the updated version of Winnt.adm to the %SystemRoot%\Inf folder and then
	  perform the following steps:
	  1. Start System Policy Editor (Poledit.exe).
	
	  2. On the file menu, click open registry, and then double-click Local User.
	
	  3. Double-click Windows NT System.
	
	  4. The new options appear as:
	
	      - Disable Lock Workstation
	
	      - Disable Change Password
	
	      - Disable Task Manager
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: poledit
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
