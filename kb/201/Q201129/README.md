---
layout: page
title: "Q201129: Unable to Delete Folders with Non-Standard MS-DOS Names"
permalink: /kb/201/Q201129/
---

## Q201129: Unable to Delete Folders with Non-Standard MS-DOS Names

{% raw %}

	Article: Q201129
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to use Windows NT Explorer to delete a folder on a shared resource,
	you may be unable to delete the folder if its name does not comply with the
	MS-DOS 8.3 naming convention. This includes file names that contain spaces or
	are longer than eight characters plus a three-character file extension.
	
	CAUSE
	=====
	
	This behavior can occur when you configure the NtfsDisable8dot3NameCreation
	value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem
	
	You can also configure this setting through System Policies under "Default
	Computer\Windows NT System\File system\Do not create 8.3 file names for long
	file names."
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem:
	
	1. Start Regedt32.exe and locate the
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem key.
	
	2. Double-click the NtfsDisable8dot3NameCreation value.
	
	3. Type "0" (without the quotation marks) in the Data box.
	
	4. Click OK, and then quit Regedt32.exe.
	
	5. Quit Windows NT, and then turn off your computer.
	
	6. Turn on your computer, and then restart Windows NT.
	
	To work around this problem, use any of the following methods:
	
	- Use Windows NT Explorer to delete the folder locally on the server on which
	  it resides.
	
	- Use File Manager to delete the folder remotely or locally.
	
	- Type a command at the command prompt to delete the folder remotely or
	  locally.
	
	
	Additional query words: policy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
