---
layout: page
title: "Q154944: Power PC (PPC) Only: OldIrql Is Stored Before Spinlock"
permalink: kb/154/Q154944/
---

## Q154944: Power PC (PPC) Only: OldIrql Is Stored Before Spinlock

	Article: Q154944
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows NT Server or Workstation on a Power PC computer, a STOP
	error message (0xA) may occur.
	
	CAUSE
	=====
	
	The OldIrql is stored before the spinlock is acquired.
	
	RESOLUTION
	==========
	
	Apply the fix mentioned below. The spinlock is now acquired before OldIrql is
	stored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Power PC is manufactured by IBM, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
