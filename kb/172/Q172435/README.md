---
layout: page
title: "Q172435: Err Msg: Winhlp32 Caused an Invalid Page Fault in Module..."
permalink: kb/172/Q172435/
---

## Q172435: Err Msg: Winhlp32 Caused an Invalid Page Fault in Module...

	Article: Q172435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Help, you may receive the following error message:
	
	  Winhlp32 caused an Invalid Page Fault in Module Whlp.exe
	
	CAUSE
	=====
	
	The Winhelp.exe file may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Winhelp.exe file from your
	original Windows 95 disks or CD-ROM to the Windows folder. The Winhlp.exe file
	is located in the Win95_05.cab cabinet file on the Windows 95 CD-ROM, or the
	Win95_06.cab cabinet file on disk 6.
	
	For information about using the Extract tool, type "extract" (without the
	quotation marks) at a command prompt, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Hardware          : x86
	
	=============================================================================
	
