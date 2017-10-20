---
layout: page
title: "Q147163: Err Msg: Launching Regedit Failed: Error Code 00000002"
permalink: /kb/147/Q147163/
---

## Q147163: Err Msg: Launching Regedit Failed: Error Code 00000002

{% raw %}

	Article: Q147163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to reinstall Windows 95 on a computer that is already running
	Windows 95, you may receive the following error message:
	
	  Launching Regedit failed: Error Code 00000002
	
	CAUSE
	=====
	
	The Regedit.exe file in the Windows folder is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, rename the Regedit.exe file (if it exists) in the
	Windows folder, and then extract a new copy of the Regedit.exe file from your
	original Windows 95 disks or CD-ROM. The Regedit.exe file is located in the
	Win95_02.cab cabinet file on the Windows 95 CD-ROM or disk 2 of your original
	Windows 95 disks.
	
	For information about using the Extract tool, type "extract" (without quotation
	marks) at a command prompt, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	When you run Windows 95 Setup, programs use Registry Editor (Regedit.exe) to
	make changes to the registry. If the Regedit.exe file is missing or damaged, you
	can receive the error message stated above.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
