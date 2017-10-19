---
layout: page
title: "Q142653: STOP Message Occurs Calling GetThreadContext/SetThreadContext"
permalink: /kb/142/Q142653/
---

## Q142653: STOP Message Occurs Calling GetThreadContext/SetThreadContext

	Article: Q142653
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run a program that calls to GetThreadContext() or SetThreadContext() with
	certain bad kernel mode addresses (high bit set) specified for the context
	recorn, a Stop message with a blue screen appears and your computer stops
	responding (hangs).
	
	The stop code is a function of the type of illegal address passed to the
	function.
	
	CAUSE
	=====
	
	A field in the context structure is referenced within a try/except, but without
	first doing a probe.
	
	Almost all bad kernel addresses are caught by the exception handling mechanism,
	but there are classes of addresses which the system declares as totally invalid
	and which should never generate a fault. If one of these addresses is referenced
	and a fault occurs, the system crashes on purpose.
	
	WORKAROUND
	==========
	
	Obtain the fix mentioned below or wait for the next Service Pack.
	
	To work around this problem, stop using the software that calls GetThreadContext
	or SetThreadContext with the illegal address value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
