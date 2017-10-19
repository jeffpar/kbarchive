---
layout: page
title: "Q93045: DSWAP Increases by 16 Bytes Each Time an MS-DOS Program Is Run"
permalink: /kb/093/Q93045/
---

## Q93045: DSWAP Increases by 16 Bytes Each Time an MS-DOS Program Is Run

	Article: Q93045
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Each time you run an MS-DOS-based application in standard mode of
	either Windows or Windows for Workgroups, the size of DSWAP.EXE in
	memory increases by 16 bytes. This guarantees that each MS-DOS session
	starts at a unique address.
	
	MS-DOS keeps track of per-process information such as open files using
	the address of the program segment prefix. If the size of DSWAP did
	not increase, two MS-DOS-based applications could be started with the
	same program segment prefix, and the system would have difficulty
	distinguishing between them.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
