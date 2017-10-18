---
layout: page
title: "Q259826: Troubleshooting Profile Quota Manager"
permalink: kb/259/Q259826/
---

## Q259826: Troubleshooting Profile Quota Manager

	Article: Q259826
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbtshoot
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	It can be difficult to troubleshoot problems with the Profile Quota Manager tool
	(Proquota.exe). However, you can use the checked version of Proquota.exe with a
	registry change to create a log file in the root folder of drive C that is
	useful in debugging problems with Proquota.exe. Proquota.exe is invoked by the
	Limit Profile Size policy.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To enable the log file:
	
	1. Rename the Proquota.exe file in the %SystemRoot%\System32 folder to
	  Proquota.old or some other name.
	
	2. Copy the checked version of the Proquota.exe file to the
	  %SystemRoot%\System32 folder on the client computer that you want to debug.
	  The checked version of the Proquota.exe file must match the version of the
	  operating system being used.
	
	3. Start Registry Editor (Regedt32) and locate the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	4. Create a new value named ProquotaDebugLevel as a REG_DWORD value. Assign data
	  value 10002 in hexadecimal.
	
	5. Restart the computer.
	
	Log information is recorded in the root folder of drive C in the Proquota.log
	file. You can view the contents of the file with any text editor (such as
	Notepad).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbtshoot 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
