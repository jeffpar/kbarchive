---
layout: page
title: "Q85894: Program Icon Disappears from Group on a Read-Only Share"
permalink: kb/085/Q85894/
---

## Q85894: Program Icon Disappears from Group on a Read-Only Share

	Article: Q85894
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you review a program icon's properties by choosing Properties from Program
	Manager's File menu, and the group file (.GRP) is located on a read-only network
	share, you will receive the following error message twice and the program icon
	will be deleted until Windows is restarted:
	
	  Cannot Open Program-Group File 'G:\TESTRO.GRP'
	
	NOTE: This problem occurs when the network share is read-only. It does not occur
	if only the group file (.GRP) is made read-only with the MS-DOS ATTRIB.EXE
	command. This has been tested in a Microsoft LAN Manager 2.x environment.
	
	WORKAROUND
	==========
	
	Do not place the group file (.GRP) in a read-only network share. Instead, make
	the actual .GRP file read-only using the MS-DOS ATTRIB.EXE command. For
	example:
	
	  ATTRIB TESTRO.GRP +R
	
	MORE INFORMATION
	================
	
	Read-only groups are sometimes used in network environments to ensure consistent
	Program Manager contents on all workstations. Other characteristics of a
	read-only group include the inability to move icons within, and between groups.
	
	Additional query words: 3.10 3.1 shared readonly read only
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
