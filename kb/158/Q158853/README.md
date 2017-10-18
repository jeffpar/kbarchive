---
layout: page
title: "Q158853: Errors Using IBM Anti-Virus with FAT32 File System"
permalink: kb/158/Q158853/
---

## Q158853: Errors Using IBM Anti-Virus with FAT32 File System

	Article: Q158853
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool osr2 win95 win98
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1, 2.5 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms with IBM Anti-Virus:
	
	- When you are installing IBM Anti-Virus, the Setup program offers to scan for
	  viruses. If you choose to scan, you may receive an error message stating that
	  the master boot record could not be read.
	
	- When you are scanning for viruses on a drive using the FAT32 file system, IBM
	  Anti-Virus may report that errors occurred while it was checking for viruses.
	  The error log may contain the following information:
	
	  Errors during virus checking: unexpected error code 18
	
	CAUSE
	=====
	
	IBM Anti-Virus is not written to work with the new FAT32 file system included
	with Windows 95 OEM Service Release 2 and Windows 98.
	
	RESOLUTION
	==========
	
	Contact IBM for an updated copy of IBM Anti-Virus.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kberrmsg kbtool osr2 win95 win98 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
