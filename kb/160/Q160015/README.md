---
layout: page
title: "Q160015: 2D Vector Performance on WinNT 4.0 Slower Than on 3.51"
permalink: /kb/160/Q160015/
---

## Q160015: 2D Vector Performance on WinNT 4.0 Slower Than on 3.51

	Article: Q160015
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use 2D Vector graphics extensively experience slower
	performance when running their application on Windows NT version 4.0 than on
	version 3.51.
	
	CAUSE
	=====
	
	This is caused by extra allocations that happen in kernel mode with Windows NT
	4.0's new graphics device interface (GDI).
	
	
	WORKAROUND
	==========
	
	Apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
