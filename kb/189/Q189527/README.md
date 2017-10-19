---
layout: page
title: "Q189527: Unable to Create Folder on an NTFS Partition"
permalink: /kb/189/Q189527/
---

## Q189527: Unable to Create Folder on an NTFS Partition

	Article: Q189527
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try use your Windows 95 OEM Service Release 2-based computer to create
	a new folder on a Microsoft Windows NT Server-based computer's NTFS partition,
	you may receive the following error message:
	
	  Unable to create directory.
	
	This problem may occur even though you have full file permissions to the folder
	in which the new folder is being created.
	
	CAUSE
	=====
	
	This problem can occur if you do not have full file permissions to a parent
	folder under which the new folder is being created. In Windows 95 OEM Service
	Release 2 (OSR2), the full path is verified when a new folder is created, so if
	you do not have permissions at one of the folder levels in the path, the error
	message is generated.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	
	Additional query words: 95 2.0 2.10 2.50
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
