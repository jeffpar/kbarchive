---
layout: page
title: "Q142611: WOW: GP Fault in Ddeml.dll Using Visual Basic Application"
permalink: kb/142/Q142611/
---

## Q142611: WOW: GP Fault in Ddeml.dll Using Visual Basic Application

	Article: Q142611
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	16-bit Windows Visual Basic applications using dynamic data exchange (DDE) for
	inter-process communications may return a general protection fault (GPF) under
	Windows NT 3.51.
	
	This problem only occurs using Windows NT 3.51; the application does not fail
	using Windows NT 3.1 or 3.5
	
	CAUSE
	=====
	
	Windows NT 3.51 added error detection code to Ddeml.dll to validate DDE data
	structures. Applications that previously were successful may now fail with a GPF
	when passing invalid DDEDATA to DdeFreeDataHandle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
