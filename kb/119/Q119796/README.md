---
layout: page
title: "Q119796: PC Adm: TEMPLATE.EXE Err Msg: No Memory; Error Releasing Mem"
permalink: kb/119/Q119796/
---

## Q119796: PC Adm: TEMPLATE.EXE Err Msg: No Memory; Error Releasing Mem

	Article: Q119796
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TEMPLATE.EXE utility produces the following errors and results in a
	zero-byte .INF file:
	
	  No Memory
	  Error releasing memory
	
	The size of the .TXT file that causes this error is dependent upon the amount of
	template information for each template record.
	
	CAUSE
	=====
	
	TEMPLATE.EXE experiences buffering limitations when it tries to compile large
	template text files.
	
	RESOLUTION
	==========
	
	Use the IMPORT.EXE -T command-line option.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
