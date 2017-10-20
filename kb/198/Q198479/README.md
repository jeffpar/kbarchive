---
layout: page
title: "Q198479: XCLN: Individual AutoArchive Settings not Stored in Registry"
permalink: /kb/198/Q198479/
---

## Q198479: XCLN: Individual AutoArchive Settings not Stored in Registry

{% raw %}

	Article: Q198479
	Product(s): Microsoft Exchange
	Version(s): 8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The "Default archive file" setting for AutoArchive is configurable through the
	registry.
	
	MORE INFORMATION
	================
	
	When you set AutoArchive on an individual folder by right-clicking on the
	folder, selecting Properties, and clicking the AutoArchive tab, the settings are
	saved in an IPC (that is, hidden) message within the folder in the information
	store, and are not configurable in the registry.
	
	The following changes can be made in the client registry to modify the
	AutoArchive file name in the profile. However, if the user has multiple
	profiles, you will need to know which one to modify, or modify all of them.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows
	  Messaging Subsystem\Profiles
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Open the profile you want to modify.
	
	4. Select the key with a name of 0a0d020000000000c000000000000046.
	
	  Depending on what you need to change, you will need to look at one of the
	  two following values:
	
	  001e0324
	  001e032c
	
	  The location and file name set in Tools\Options\AutoArchive\Default Archive
	  File maps to 001e0324.
	
	  The location and file name set in File\Archive\Archive File maps to 001e032c.
	
	The following is a sample portion of a profile that contains two archive files
	set with the above registry strings and values:
	
	  001e032c:REG_SZ: C:\WINNT\Profiles\Username\Personal\Archive.pst
	  001e0324:REG_SZ: D:\Myarchive.pst
	
	NOTE: These values may not appear in the registry if initial AutoArchive settings
	have not been made.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.01,8.02,8.03; WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
