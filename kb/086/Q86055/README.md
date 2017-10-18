---
layout: page
title: "Q86055: Garbled, Incomplete, or Broken Printing on Novell Network"
permalink: kb/086/Q86055/
---

## Q86055: Garbled, Incomplete, or Broken Printing on Novell Network

	Article: Q86055
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print large and/or graphically intensive files on a Novell NetWare 3.11
	shared printer, the output may appear garbled, incomplete, or it may contain
	form feeds.
	
	CAUSE
	=====
	
	These problems may be caused by a PSERVER.NLM file dated earlier than 1/9/92.
	This file is located in the NetWare SYSTEM subdirectory.
	
	WORKAROUND
	==========
	
	You need to update the PSERVER.NLM file.
	
	The current version is available on CompuServe, or from Novell. To download the
	file from CompuServe, do the following:
	
	1. At the CompuServe ! prompt, type "go novell" (without the quotation marks).
	
	2. From \\NOVLIB\LIB#6, download PSERV1.ZIP.
	
	The ZIP file contains five files. Replace the old PSERVER.NLM file with the new
	one.
	
	To obtain phone numbers for Novell, query on the following words in the Microsoft
	Knowledge Base:
	
	  "Novell" (without the quotation marks) and "phonebook" (without the quotation
	  marks)
	
	MORE INFORMATION
	================
	
	With Novell NetWare 3.11, each print job creates a file. The file is sent to a
	share that has a 3K buffer, segmented in 512 bytes. A pointer is used to keep
	track of where the print job file should continue after each dump of the 3K
	buffer. On very large and/or graphically intensive jobs, this pointer may go
	past the 3K barrier, thus pointing to another area on the net drive containing
	the print files. This causes the garbled output.
	
	
	Additional query words: 3.10 garbage characters novell winword 3.11 WIN31 kbnetwork
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
