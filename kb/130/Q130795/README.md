---
layout: page
title: "Q130795: Unable to Open Compressed Files &amp; Directories in Window NT 3.5"
permalink: kb/130/Q130795/
---

## Q130795: Unable to Open Compressed Files &amp; Directories in Window NT 3.5

	Article: Q130795
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you dual boot between Windows NT versions 3.5 (with Service Pack 2) and 3.51
	on the same computer and compress files and directories on an NTFS partition in
	version 3.51, you cannot open, delete, copy, move, rename or change attributes
	of these files and directories in version 3.5. In addition, the following error
	message appears:
	
	  The network request is not supported.
	
	NOTE: This problem occurs in both File Manager and the MS-DOS Command Prompt in
	version 3.5.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt run execute
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
