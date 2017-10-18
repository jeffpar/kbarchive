---
layout: page
title: "Q160657: 16-bit Version of Visual Basic 4 May Hang Windows NT 4.0"
permalink: kb/160/Q160657/
---

## Q160657: 16-bit Version of Visual Basic 4 May Hang Windows NT 4.0

	Article: Q160657
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 will stop responding under certain circumstances when running the
	16-bit version of Visual Basic 4.0 and attempting to use the Visual Basic Add-In
	Manager.
	
	
	CAUSE
	=====
	
	The PDB (program database) pointer was being restored into the wrong context.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
