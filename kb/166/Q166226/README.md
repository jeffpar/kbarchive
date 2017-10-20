---
layout: page
title: "Q166226: Backup of Local Registry Does Not Work With NTBACKUP.EXE /b"
permalink: /kb/166/Q166226/
---

## Q166226: Backup of Local Registry Does Not Work With NTBACKUP.EXE /b

{% raw %}

	Article: Q166226
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run Ntbackup.exe with the /b switch to backup the local registry, the
	%SystemRoot\System32\Config folder is backed up correctly. However, the Profiles
	folder is not backed up.
	
	CAUSE
	=====
	
	Windows NT 4.0 moved the registry to the Profiles folder. The graphical user
	interface (GUI) of Windows NT Backup was modified to reflect this change.
	However, Windows NT Backup was not modified to accept this change when the /b
	switch is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00 prodnt
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
