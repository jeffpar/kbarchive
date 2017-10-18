---
layout: page
title: "Q186492: Preventing Unnecessary Registry Growth in Terminal Server"
permalink: kb/186/Q186492/
---

## Q186492: Preventing Unnecessary Registry Growth in Terminal Server

	Article: Q186492
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The non-paged pool limit in Windows NT 4.0 is 192 MB and the registry can
	consume up to 80 percent of that limit (or about 150 MB). However, keeping the
	registry as small as possible is preferable because the Registry cannot be paged
	out of memory. This article discusses one way to avoid unnecessary registry
	growth.
	
	MORE INFORMATION
	================
	
	One way to keep your registry from growing is to prevent unneeded writes to the
	Classes key.
	
	The Classes key is located under HKEY_LOCAL_MACHINE\Software, and new users get a
	copy of the key in their registry at first logon. In most cases, there is no
	need for this key. Each user's profile is already loaded into the registry while
	the user is logged on.
	
	Microsoft Office 97 and Microsoft Internet Explorer 4.0 are examples of
	applications that write to both the User Profile and to the Classes key. Between
	the two applications, the User's Hive can increase from 2 MB to 10 MB each. To
	prevent this, you can modify the registry by performing the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
	  NT\CurrentVersion\TerminalServer\Compatibility\Registry Entries
	
	  There should be two values under this key by default:
	
	  Classes (REG_DWORD) 0x108
	  Microsoft\WindowsNT (REG_DWORD) 0x108
	
	2. Add these values if they are missing. These values will disable the per-user
	  file associations feature because the classes key would not be replicated
	  from HKEY_LOCAL_MACHINE to each user's HKEY_CURRENT_USER.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
