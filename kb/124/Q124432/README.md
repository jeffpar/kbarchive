---
layout: page
title: "Q124432: Canon BubbleJet BJC-800 Prints Slowly Under Windows NT 3.5"
permalink: /kb/124/Q124432/
---

## Q124432: Canon BubbleJet BJC-800 Prints Slowly Under Windows NT 3.5

	Article: Q124432
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 3.5, printing to the Canon BubbleJet BJC-800 printer is
	significantly slower when compared to the printing speed under Windows 3.1 or
	Windows for Workgroups.
	
	CAUSE
	=====
	
	Under Windows NT 3.5, the drivers for Canon BubbleJet printers do not support
	different kinds of paper media. Because of this limitation, Mode D on the
	BJC-800 is selected for printing, as the type of paper being used can't be
	determined and Mode D can print to any type.
	
	However, Mode D is significantly slower than other printing modes for the Canon
	BJC-800, because the paper being used may need more precise ink layout in order
	to produce acceptable output. According to Canon, Mode D may take more than 10
	minutes to print a single page.
	
	Under 16-bit Windows, Canon has written drivers which support multiple paper
	media types. Mode A can be used when you are printing on coated paper. Mode A is
	much faster than Mode D.
	
	
	WORKAROUND
	==========
	
	The only method for printing faster under Windows NT is to send a first page
	with some random text, pause the printer, and then manually select Mode A. Once
	the printer is restarted, it will print the rest of that document faster. This
	can be a useful workaround for long documents.
	
	The Canon products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt wfw wfwg bj bjc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
