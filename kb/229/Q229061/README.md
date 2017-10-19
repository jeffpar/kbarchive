---
layout: page
title: "Q229061: Cannot Manage Permissions from Within a Dfs 4.1 Tree"
permalink: /kb/229/Q229061/
---

## Q229061: Cannot Manage Permissions from Within a Dfs 4.1 Tree

	Article: Q229061
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 09-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Distributed File System (Dfs) version 4.1 for Windows NT Server,
	you cannot change NTFS permissions for files and folders from within the Dfs
	tree. NOTE: If you right-click a file or folder from within the Dfs tree, only a
	General tab is displayed.
	
	CAUSE
	=====
	
	This issue occurs because you are looking at pointers to the files and folders,
	and not the actual file system.
	
	RESOLUTION
	==========
	
	To set permissions for Dfs files and folders, use Windows NT Explorer to connect
	directly to the file share or directory to which Dfs is pointing.
	
	1. Click Start, point to Programs, and then click Windows NT Explorer.
	
	2. Right-click the folder or file you want, and then click Properties.
	
	3. On the Security tab, click Permissions.
	
	4. Add or remove users and set the permission type for each user you give
	  permissions, and then click OK.
	
	NOTE: The permissions you configure in Windows NT Explorer are enforced when
	users navigate using the Dfs tree.
	
	
	REFERENCES
	==========
	
	For more information about Dfs version 4.1 for Windows NT Server 4.0, please see
	the readme file that comes with the Dfs files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
