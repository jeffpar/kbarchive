---
layout: page
title: "Q174660: Err Msg: Engct Caused Invalid Page Fault in Module Tcpconn.dll"
permalink: kb/174/Q174660/
---

## Q174660: Err Msg: Engct Caused Invalid Page Fault in Module Tcpconn.dll

	Article: Q174660
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  Engct caused an invalid page fault in module tcpconn.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Wsock32.dll file is damaged or is not the correct
	version.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete each copy of the Wsock32.dll file from your hard
	drive, and then extract a new copy of the Wsock32.dll file from your original
	Windows 95 disks or CD-ROM to the Windows\System folder. To do so, use the
	following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "wsock32.dll" (without quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click each Wsock32.dll file, and then click
	  Delete. Continue until the list of found files is empty.
	
	4. Close the Find: Files Named Wsock32.dll window.
	
	5. Extract a new copy of the Wsock32.dll file from your original Windows 95
	  disks or CD-ROM to the Windows\System folder.
	
	The Wsock32.dll file is located in the Win95_11.cab cabinet file on the Windows
	95 CD-ROM, in the Win95_18.cab cabinet file on the Windows 95 OEM Service
	Release 2 CD-ROM, in the Win95_12.cab cabinet file on disk 12 of the Windows 95
	DMF format disks, and in the Win95_19.cab cabinet file on disk 19 of the Windows
	95 non-DMF format disks.
	
	MORE INFORMATION
	================
	
	
	
	For more information about using the Extract tool, please see the Following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.0,1.2,1.3,2.0
	
	=============================================================================
	
