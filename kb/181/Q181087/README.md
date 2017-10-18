---
layout: page
title: "Q181087: Computer Hangs When Using the DIR Command in DFS Shared Folders"
permalink: kb/181/Q181087/
---

## Q181087: Computer Hangs When Using the DIR Command in DFS Shared Folders

	Article: Q181087
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1,2.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DIR command from a command prompt on a Windows 95 Distributed
	File System (DFS) client to view the contents of a DFS shared network folder on
	a Windows NT server, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The current folder in which you are using the DIR command is several levels
	  down on the DFS shared network drive. For example, this behavior can occur if
	  you use the DIR command in Folder5 of the following path
	
	  <drive>:\Folder1\Folder2\Folder3\Folder4\Folder5
	
	  where <drive> is the mapped drive to the DFS shared network folder.
	
	- The DFS volume on the Windows NT server has a volume label.
	
	
	RESOLUTION
	==========
	
	To work around this issue, remove the volume label from the DFS volume on the
	Windows NT server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	
