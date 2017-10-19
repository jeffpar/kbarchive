---
layout: page
title: "Q142305: Min. and Max. Interval Values for WINS Configuration"
permalink: /kb/142/Q142305/
---

## Q142305: Min. and Max. Interval Values for WINS Configuration

	Article: Q142305
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WINS Configuration parameters default to:
	
	  96 hours - Renewal Interval
	  96 hours - Extinction Interval
	  96 hours - Extinction Timeout
	  576 hours - Verify Interval
	
	MORE INFORMATION
	================
	
	The Renewal Interval defines how often a client re-registers its name:
	
	  Minimum Value - 40 minutes
	  Maximum Recommended Value - 96 Hours
	
	The Extinction Interval defines the time span between an entry being marked
	released and marked as extinct, or tombstoned. The Extinction Interval can never
	be less than the Renewal Interval:
	
	  Minimum Value - 40 minutes
	  Maximum Value - 96 hours
	
	The Extinction Timeout defines the time span between an entry being as extinct,
	or tombstoned, and the entry being scavenged, or removed from the database:
	
	  Minimum Value - 24 hours
	  Maximum Value - 96 hours
	
	The Verify Interval defines the time before it verifies that names it does not
	own are still active:
	
	  Minimum Value - 576 hours
	  Maximum Value - 9999 hours 59 minutes 59 seconds
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
