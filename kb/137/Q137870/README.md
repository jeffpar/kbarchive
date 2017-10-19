---
layout: page
title: "Q137870: New Emm386.exe Fixes Problem Receiving NMI in Protected Mode"
permalink: /kb/137/Q137870/
---

## Q137870: New Emm386.exe Fixes Problem Receiving NMI in Protected Mode

	Article: Q137870
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A real-mode nonmaskable interrupt (NMI) handler does not receive an NMI if it is
	generated in protected mode. The real-mode NMI handler does receive the NMI if
	it is generated in real mode.
	
	CAUSE
	=====
	
	This problem occurs when Emm386.exe is loaded in protected mode, because the
	virtual machine (VM) flag does not get set during the process of creating the
	stack frame to go from protected mode to real mode.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
