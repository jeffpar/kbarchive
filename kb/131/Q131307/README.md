---
layout: page
title: "Q131307: Unable to Find File Name with Extended-ASCII Characters in NTFS"
permalink: kb/131/Q131307/
---

## Q131307: Unable to Find File Name with Extended-ASCII Characters in NTFS

	Article: Q131307
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
	
	When you attempt to find or change the properties of a file with a file name
	that is less than 8 characters long on an NTFS partition, the following error
	message appears:
	
	  File not found
	
	CAUSE
	=====
	
	This happens when the file name includes extended-ASCII characters. NTFS does
	not provide an 8.3 format file name if file name includes extended- ASCII
	characters and is less than 8 characters long.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
