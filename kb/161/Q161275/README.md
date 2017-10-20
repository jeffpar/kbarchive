---
layout: page
title: "Q161275: Interaction of File and Folder Security on NTFS Volumes"
permalink: /kb/161/Q161275/
---

## Q161275: Interaction of File and Folder Security on NTFS Volumes

{% raw %}

	Article: Q161275
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you set permissions on specific files, users and groups sometimes have
	more rights to the files than expected. This is because NTFS security applies
	both at the file level and at the folder level. NTFS permissions granted at both
	levels are cumulative.
	
	For example, you have a folder called Reports and you grant the group Sales full
	control, and the group Marketing read access to the folder. You then put a file
	called README into the folder, and explicitly set the rights to the Everyone
	group as Read. Members of the Marketing group will be able to read, but not
	delete the file README. Members of the Sales group however, will be able to both
	read and delete the file, because they have the full control right at the folder
	level. To prevent the file from being deleted by either group you would need to
	change the Sales group access at the folder level.
	
	MORE INFORMATION
	================
	
	For additional information on this subject see:
	
	- "Windows NT Workstation Resource Kit," Chapter 18, section titled
	  "Controlling Access to Files and Folders"
	
	- Windows NT Server "Concepts and Planning Guide," Chapter 5.
	
	Additional query words: subdirectory security directory
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
