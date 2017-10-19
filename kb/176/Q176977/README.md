---
layout: page
title: "Q176977: STOP 0x00000023 FAT_FILE_SYSTEM with Corrupted Floppy Disk"
permalink: /kb/176/Q176977/
---

## Q176977: STOP 0x00000023 FAT_FILE_SYSTEM with Corrupted Floppy Disk

	Article: Q176977
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 system may generate the following STOP code when an attempt is
	made to read a corrupted floppy disk from Windows NT Explorer or My Computer.
	
	  STOP 0x00000023 (0x000f00b5, 0xfc4af978, 0xfc4af7b4, 0xfeff4a6b)
	  FAT_FILE_SYSTEM
	
	NOTE: All of the parameters may not be exactly the same.
	
	
	CAUSE
	=====
	
	The floppy disk has a long file name entry with an invalid ordinal. Windows NT
	4.0 Service Pack 3 and earlier did not check for this condition.
	
	RESOLUTION
	==========
	
	To work around this problem, do the following:
	
	- Run CHKDSK against the corrupted floppy disk from a command prompt before
	  attempting to view the disk contents in Explorer.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: trap 0x23 blue screen dump
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
