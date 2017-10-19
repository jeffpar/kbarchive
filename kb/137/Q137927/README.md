---
layout: page
title: "Q137927: Int21 Random Write Fails Under Windows NT"
permalink: /kb/137/Q137927/
---

## Q137927: Int21 Random Write Fails Under Windows NT

	Article: Q137927
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Int21 call, Random Write (22H), from a client running Windows for Workgroups
	or Windows95 to Windows NT fails. As a result, if you run an older application
	on the client that relies on the Int21 call, you cannot write to a network drive
	on computer running Windows NT server.
	
	CAUSE
	=====
	
	Reading the trace on SMB Response Open&X from Windows NT, the Open Mode is
	0x00FF instead of 0x0072.
	
	WORKAROUND
	==========
	
	Use Handler functions instead of FCB calls.
	
	RESOLUTION
	==========
	
	To correct this problem, install the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt advance msdos programming (fcb section)
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
