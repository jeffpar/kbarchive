---
layout: page
title: "Q177127: Incorrect Report on Disk Free Space Under Dfs"
permalink: /kb/177/Q177127/
---

## Q177127: Incorrect Report on Disk Free Space Under Dfs

{% raw %}

	Article: Q177127
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0,4.01;Windows:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Disk Free Space reported in Windows Explorer or in a Command Prompt on a
	Distributed File System (Dfs) client for a Dfs share is always the Disk Free
	Space of the drive containing (hosting) the Dfs root.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior:
	
	1. Host a Dfs root on a Windows NT Server (Dfs 4.0/4.1).
	
	2. Create a volume that references a remote server.
	
	3. From a Dfs-aware client, map a drive to the Dfs volume created in step two.
	
	4. Check the properties of the mapped drive.
	
	5. The amount of disk free space reported is for the drive on the server hosting
	  the Dfs root, not the remote server's drive to which the connection was
	  actually made.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0,4.01;Windows:95
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
