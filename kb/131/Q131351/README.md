---
layout: page
title: "Q131351: IBM Lan Streamer Error 5009"
permalink: kb/131/Q131351/
---

## Q131351: IBM Lan Streamer Error 5009

	Article: Q131351
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	The following error message appears in the event log after starting Windows NT
	on a computer with an IBM Lan Streamer network adapter:
	
	  Event ID 5009
	
	  The description for Event ID ( 5009 ) in Source ( Streamer ) could not be
	  found.
	
	  It contains the following insertion string(s): \Device\Streamer1, Streamer1.
	
	  0000: 000c0000 00660002 00000000 80001391
	  0010: 00000000 00000000 00000000 00000000
	  0020: 00000000 00000000 00000008 0000009d
	  0030: 00000000
	
	CAUSE
	=====
	
	A data integrity problem was identified with the first release of the Lan
	Streamer card. Hooks were added to the Lan Streamer driver to minimize the
	problem. This event log message is logged for the benefit of IBM development to
	identify that the adapter has the data integrity problem.
	
	The affected release of the Lan Streamer card can be identified by part number
	92F8941.
	
	RESOLUTION
	==========
	
	Contact IBM for replacement of the card.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
