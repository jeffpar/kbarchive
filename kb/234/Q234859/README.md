---
layout: page
title: "Q234859: PRB: Windows Desktop Update Is Required for Product Resiliency"
permalink: kb/234/Q234859/
---

## Q234859: PRB: Windows Desktop Update Is Required for Product Resiliency

	Article: Q234859
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbide kbMSI kbFAQ kbGrpDSTools kbvc600faq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Windows Installer-based applications, the shortcuts that populate the
	Start menu display the Missing Shortcut dialog box with the "searching
	flashlight," and fail to find the target path of the shortcut.
	
	CAUSE
	=====
	
	This problem can occur in situations where the application is damaged, or when
	the application is assigned in the Active Directory and the user attempts to
	start the application by using the shortcut. The Windows Installer is attempting
	to repair the installation or install new features.
	
	This problem occurs because the shell update in Internet Explorer 4.01 or higher
	is necessary to allow the Windows Installer to create the correct shortcut to
	enable the Windows Installer to perform application repair and assignments for
	the application's features.
	
	RESOLUTION
	==========
	
	Verify that the Shell32.dll version is 4.72.3110 or greater. Shell32.dll is
	found in the %systemroot%\System32 folder. Right-click the file and click
	Properties, and then click the Version tab. The version entry should be viewable
	on the File version: line.
	
	If the version number is less than 4.72.3110, install the Windows Desktop Update
	that ships with Internet Explorer 4.01 Service Pack 1 (SP1).
	
	STATUS
	======
	
	This is by design of the Windows Installer and the Windows Desktop Update.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbide kbMSI kbFAQ kbGrpDSTools kbvc600faq 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
