---
layout: page
title: "Q125449: Arranging Icons by Type Does Not Sort by Extension"
permalink: /kb/125/Q125449/
---

## Q125449: Arranging Icons by Type Does Not Sort by Extension

	Article: Q125449
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to arrange icons by type, they are not arranged by their
	extensions.
	
	CAUSE
	=====
	
	When you choose to arrange icons by type, Windows 95 sorts the icons according
	to their registered names. Extensions are not used unless the file type is not
	registered. For example, files with .EXE extensions appear before files with
	.BMP extensions.
	
	Note that this behavior is not as apparent if you clear the "Hide MS-DOS file
	extensions for file types that are registered" check box on the View tab. To see
	this tab, click Options on the View menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	
