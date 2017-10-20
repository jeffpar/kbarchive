---
layout: page
title: "Q191254: Dr. Watson Error When Starting Terminal Server Admin Utility"
permalink: /kb/191/Q191254/
---

## Q191254: Dr. Watson Error When Starting Terminal Server Admin Utility

{% raw %}

	Article: Q191254
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start the Terminal Server Administration utility from the
	Start/Programs/Administrative Tools menu, a Dr. Watson Access Violation error in
	Tsadmin.exe is generated.
	
	Example: (text from Drwatson.log file)
	
	  Application exception occurred:
	  App: exe\tsadmin.dbg
	  When: 8/3/1998 @ 9:35:15.733
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	The registry setting for the InstallDate was set to 0 (zero).
	
	RESOLUTION
	==========
	
	This problem can be resolved by editing the registry and changing the value for
	the InstallDate to a valid value.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To correctly configure the InstallDate, use the Registry Editor (Regedt32.exe) to
	edit the following registry key:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\Microsoft\WindowsNT\CurrentVersion\InstallDate
	
	2. Select the InstallDate value and change it to a valid Hex Dword, representing
	  an appropriate date and time, for example:
	
	   - Sunday, January 01, 1995, 12:00:00 AM = 2f0636d0
	
	   - Monday, January 01, 1996, 12:00:00 AM = 30e76a50
	
	3. Use the registry entry value from another computer.
	
	4. Write a small C program using ctime to calculate the exact value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0,
	Terminal Server Edition version 4.0.
	
	MORE INFORMATION
	================
	
	The installation of hotfixes on Terminal Server can also cause the Dr. Watson
	error because of the missing value of Installed On. Tsadmin.exe enumerates the
	Hotfix key to get the information regarding hotfixes installed on the system.
	The absence of the Installed On value can cause Dr. Watson errors, too.
	
	Check the following information in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Hotfix\<Q
	  Article Number>
	  Add Value: Installed On
	  Data Type: REG_DWORD
	  Data: 0x0
	
	Additional query words: installdate tsadmin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
