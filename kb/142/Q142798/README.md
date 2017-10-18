---
layout: page
title: "Q142798: True Type Font Corruption After Applying Service Pack 3"
permalink: kb/142/Q142798/
---

## Q142798: True Type Font Corruption After Applying Service Pack 3

	Article: Q142798
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Service Pack 3 for Microsoft Windows NT 3.51, some True Type
	fonts may not display correctly. Documents that display corrupt fonts may still
	print properly.
	
	CAUSE
	=====
	
	Code in WINSRV.DLL did not handle an entry in the font cmap table properly.
	
	
	RESOLUTION
	==========
	
	Replacing WINSRV.DLL with the version that exists in Microsoft Windows NT 3.51
	Service Pack 2 (or earlier Microsoft Windows NT 3.51 version) should restore
	normal functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: REGRESSION FONT TRUE TYPE CORRUPT DISPLAY
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
