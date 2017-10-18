---
layout: page
title: "Q162447: Multiple Print Jobs When Printing Single Document"
permalink: kb/162/Q162447/
---

## Q162447: Multiple Print Jobs When Printing Single Document

	Article: Q162447
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document from a Windows 95 workstation to a printer shared on a
	Windows NT-based computer, multiple print jobs may appear in the printer's queue
	for the document. When this occurs, one print job displays a valid file size and
	all others display a size of zero bytes. If separator pages are specified for
	the printer, each print job has a separator page. Each separator page has a job
	number and description of "Remote Downlevel Document."
	
	CAUSE
	=====
	
	This behavior can occur if anti-virus software is running on your Windows 95
	workstation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, one of the following methods:
	
	- Configure the anti-virus software not to scan your document files by
	  specifying not to scan file types with extensions such as .doc and .txt.
	
	- Disable or remove the anti-virus software on the Windows 95 workstation.
	
	- Contact the anti-virus software manufacturer for updates to the program.
	
	MORE INFORMATION
	================
	
	For information about how to configure your anti-virus software, consult the
	program's documentation or manufacturer.
	
	Additional query words: duplicate win95 Event 10 ID remote downlevel document banner five
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
