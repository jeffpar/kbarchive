---
layout: page
title: "Q172770: Err Msg: Cannot Connect to MAPI Server. Invalid MAPI Server..."
permalink: kb/172/Q172770/
---

## Q172770: Err Msg: Cannot Connect to MAPI Server. Invalid MAPI Server...

	Article: Q172770
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  Cannot Connect to MAPI Server. Invalid MAPI Server Present. Cannot Provide
	  MAPI Services.
	
	CAUSE
	=====
	
	One of the following files may be damaged or missing:
	
	- Mapi32.dll
	
	- Mapisp32.exe
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Mapi32.dll and Mapisp32.exe
	files to the Windows\System folder.
	
	The Mapi32.dll file can be found in the following locations:
	
	- Win95_06.cab cabinet file on the Windows 95 CD-ROM
	
	- Win95_09.cab cabinet file on the Windows 95 OEM Service Release 2 (OSR2)
	  CD-ROM
	
	- Win95_07.cab cabinet file on the original Windows 95 DMF disks
	
	- Win95_10.cab cabinet file on the original Windows 95 non-DMF disks
	
	The Mapisp32.exe file can be found in the following locations:
	
	- Win95_07.cab cabinet file on the Windows 95 CD-ROM
	
	- Win95_10.cab cabinet file on the Windows 95 OEM Service Release 2 (OSR2)
	  CD-ROM
	
	- Win95_07.cab cabinet file on the original Windows 95 DMF disks
	
	- Win95_11.cab cabinet file on the original Windows 95 non-DMF disks
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
