---
layout: page
title: "Q140426: STOP 0x0000000A Using HP 10/100 J2577a EISA LAN Adapter"
permalink: kb/140/Q140426/
---

## Q140426: STOP 0x0000000A Using HP 10/100 J2577a EISA LAN Adapter

	Article: Q140426
	Product(s): Microsoft Windows NT
	Version(s): 3.51
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
	
	When using Windows NT Services for Macintosh (SFM), and using Hewlett- Packard's
	(HP) J2755A 10/100VG EISA LAN Adapter, your system halts with the following stop
	code:
	
	     BugCheck 0000000a : ff687000 00000002 00000001 fbcf2488
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and HP
	J2577A 10/100VG EISA network adapter. HP has provided a fix for this driver,
	HPFEND.SYS. Please contact HP to obtain this fix.
	
	MORE INFORMATION
	================
	
	This problem occurs with small packet size of SFM and due to the HP driver's
	inability to handle them properly. HP is aware of this problem and has provided
	a fix for this problem.
	
	The J2577A 10/100VG EISA LAN Adapter is manufactured by Hewlett Packard Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	Additional query words: prodnt trap 0xa 0x0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
