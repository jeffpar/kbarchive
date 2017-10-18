---
layout: page
title: "Q146053: Err Msg: WINS Encountered An Error While Processing..."
permalink: kb/146/Q146053/
---

## Q146053: Err Msg: WINS Encountered An Error While Processing...

	Article: Q146053
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a static mapping in WINS Manager, the following error
	message appears:
	
	  WINS encountered an error while processing the command
	
	CAUSE
	=====
	
	This problem occurs when you attempt to add a conflicting mapping type for a
	mapping name that exists in the WINS database. For example, if the WINS database
	contains a domain entry for FARMHURST <1Ch> and <1Bh> and you
	attempt to add a Unique or Multihomed static mapping for FARMHURST, the above
	error message appears.
	
	Additional query words: prodnt dns
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
