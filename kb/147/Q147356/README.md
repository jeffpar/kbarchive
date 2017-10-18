---
layout: page
title: "Q147356: Intermittent Replication Between WINS Servers"
permalink: kb/147/Q147356/
---

## Q147356: Intermittent Replication Between WINS Servers

	Article: Q147356
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Internet Name Service (WINS) replication between partners is
	intermittent and unpredictable.
	
	CAUSE
	=====
	
	This problem occurs if the Replication Options are not configured correctly for
	each of the replication partners. In the Push Partner Properties dialog box, if
	Update Count is blank it defaults to 20 (minimum). However, if the Replication
	Interval in the Pull Partner Properties is left blank, it defaults to 0 (zero).
	Therefore, the WINS server does not pull records from the WINS partner at a
	regular interval. Records will be pulled only once during start up.
	
	If the Start Time is left blank records will be pulled beginning at startup and
	then continue at the configured Replication Interval.
	
	
	RESOLUTION
	==========
	
	Make sure you enter a specific value for the Replication Interval when you
	configure WINS Replication Partners.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
