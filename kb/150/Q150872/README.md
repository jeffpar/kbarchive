---
layout: page
title: "Q150872: Setup Does Not Run ScanDisk from Windows 3.1 Standard Mode"
permalink: /kb/150/Q150872/
---

## Q150872: Setup Does Not Run ScanDisk from Windows 3.1 Standard Mode

	Article: Q150872
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): scandisk win95 kbScanDisk
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 Setup from Microsoft Windows 3.1 in standard mode,
	ScanDisk is not invoked.
	
	CAUSE
	=====
	
	Windows 95 Setup cannot start ScanDisk in a virtual machine from Windows 3.1
	running in standard mode.
	
	RESOLUTION
	==========
	
	To ensure that Windows 95 Setup invokes ScanDisk, use either of the following
	methods:
	
	- Start Windows 3.1 in 386 enhanced mode, then start Windows 95 Setup
	
	- Quit Windows 3.1 and run Windows 95 Setup from MS-DOS.
	
	MORE INFORMATION
	================
	
	Even though ScanDisk is not invoked by Windows 95 Setup when Setup is run from
	Windows 3.1 in standard mode, Windows 95 Setup still checks for cross-linked
	files.
	
	Windows 95 can successfully upgrade a computer running Windows 3.1 in standard
	mode. However, you may experience instability or the inability to run Windows 95
	if there is pre-existing file or disk damage. Note that the computer may not be
	able to run Windows 95 due to hardware limitations if it cannot run Windows 3.1
	in 386 enhanced mode.
	
	Additional query words: corruption
	
	======================================================================
	Keywords          : scandisk win95 kbScanDisk 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
