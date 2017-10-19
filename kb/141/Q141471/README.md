---
layout: page
title: "Q141471: Err Msg: No Such File or Directory Using FC.EXE"
permalink: /kb/141/Q141471/
---

## Q141471: Err Msg: No Such File or Directory Using FC.EXE

	Article: Q141471
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Windows NT 3.51 file compare utility (FC.EXE) to compare two
	identical files, the following error message appears:
	
	  FC: cannot open C:\<file_name> - No such file or directory
	
	This error occurs only if the first file has only the Compressed bit set. If any
	of the other Attribute bits (Hidden, System, Read-only, or Archive) are set in
	addition to the Compressed bit, the operation completes without an error.
	Attribute bits set on the second file do not effect the compare operation.
	
	CAUSE
	=====
	
	File compare does not support the compressed file attributes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	prodnt
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
