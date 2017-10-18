---
layout: page
title: "Q137135: STOP Msg: 0x0000001E Running DEC Pathworks Version 4.1b"
permalink: kb/137/Q137135/
---

## Q137135: STOP Msg: 0x0000001E Running DEC Pathworks Version 4.1b

	Article: Q137135
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run DEC Pathworks version 4.1b on a Windows NT 3.51 server, your
	computer bugchecks intermittently. The STOP Message reported by the system looks
	similar to the following:
	
	  STOP 0x0000001E (0xc0000005, 0xfce038ab, 0x00000000, 0x00000015)
	
	
	CAUSE
	=====
	
	There is an incompatibility between the Windows NT 3.51 version of STREAMS.SYS
	and DEC Pathworks 4.1b.
	
	RESOLUTION
	==========
	
	Install the DEC version of STREAMS.SYS from the DEC Pathworks CD. Instructions
	on installing the new version of STREAMS.SYS can be found in the RELNOTES.TXT
	file on the DEC Pathworks CD.
	
	Pathworks 4.1bis manufactured by Digital Equipment Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt alpha blue screen error
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
