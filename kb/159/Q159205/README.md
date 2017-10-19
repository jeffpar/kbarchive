---
layout: page
title: "Q159205: SFM File Type and Creator Properties Invalid"
permalink: /kb/159/Q159205/
---

## Q159205: SFM File Type and Creator Properties Invalid

	Article: Q159205
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.00.
	Operating System(s): 
	Keyword(s): kbnetwork kbother
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.00. 
	- Microsoft Windows NT Server version 4.00. 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The extension to type/creator mapping is nonfunctional.
	
	For example:
	
	Create a file called test.doc on a FAT partition and copy it to an NTFS directory
	shared as a Macintosh volume. Instead of putting the type/creator for the file,
	it leaves the type creator as TEXT/LMAN. When viewing it from an Apple
	Macintosh, it doesn't appear as the correct type of file and cannot be
	double-clicked on to open with the appropriate application. All extension
	mapping is invalid for any extension type.
	
	RESOLUTION
	==========
	
	Install the updated files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : winnt:4.00.
	
	=============================================================================
	
