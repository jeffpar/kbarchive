---
layout: page
title: "Q132836: Windows 95 Does Not Auto-Detect Some EISA Cards"
permalink: /kb/132/Q132836/
---

## Q132836: Windows 95 Does Not Auto-Detect Some EISA Cards

	Article: Q132836
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 does not auto-detect an EISA card when it is added to the system, and
	prompts you to run hardware detection from the Add New Hardware program.
	
	CAUSE
	=====
	
	Some EISA cards report various I/O (Input/Output) ranges that are not the
	standard I/O for those registers. As a result, duplicate enumeration cannot
	remove the detected adapters. The Eisa.VxD file ignores any EISA card with these
	particular identifications.
	
	
	RESOLUTION
	==========
	
	To let Windows detect the EISA card, run hardware detection from the Add New
	Hardware program.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
