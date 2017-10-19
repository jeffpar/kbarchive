---
layout: page
title: "Q142687: Windows NT 4.0 Not Able to Read Some Compact Discs"
permalink: /kb/142/Q142687/
---

## Q142687: Windows NT 4.0 Not Able to Read Some Compact Discs

	Article: Q142687
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to read or copy files from certain compact discs to your hard
	drive, you get the following error message:
	
	  Cannot copy <filename>: Error performing inpage operation.
	
	The same files could be copied by earlier versions of Windows NT, or by other
	operating systems, and other compact discs work correctly.
	
	CAUSE
	=====
	
	This error is caused by the compact disc file system (CDFS) not quite correctly
	recognizing the allocation size of a file on media of a block size different
	than the physical sector size of 2048 on a compact disc (for example, less than
	indicated per ISO 9660). CDFS tries to generate sector- aligned reads regardless
	of whether it is doing that reading beyond the mapped range of the file.
	
	RESOLUTION
	==========
	
	The fixed version of CDFS.sys is available in Windows NT 4.0 Service Pack 2 or
	later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: compact prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
