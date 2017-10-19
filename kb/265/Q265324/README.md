---
layout: page
title: "Q265324: Cannot Mount an NFS Share on a Linux NFS Server"
permalink: /kb/265/Q265324/
---

## Q265324: Cannot Mount an NFS Share on a Linux NFS Server

	Article: Q265324
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to mount an NFS shared directory on a Linux server from a Services
	for UNIX (SFU) 2.0 client, the Linux server displays the following error
	message:
	
	  svc: unknown version (3)
	
	CAUSE
	=====
	
	This behavior occurs because Linux only supports NFS version 2.0. By default,
	SFU attempts to connect by using NFS version 3.0.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To disable NFS version 3.0 support in SFU, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Client for NFS\CurrentVersion\Default
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableV3
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
