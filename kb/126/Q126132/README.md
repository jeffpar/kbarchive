---
layout: page
title: "Q126132: WINS: Push Notification Sent on Every Registration"
permalink: /kb/126/Q126132/
---

## Q126132: WINS: Push Notification Sent on Every Registration

	Article: Q126132
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the value for Update Count in the Push Partner Properties dialog box to
	any value causes PUSH notifications (triggers) to be sent to PULL partners after
	every single name registration.
	
	MORE INFORMATION
	================
	
	When two WINS servers are configured in a PUSH/PULL relationship, the Push
	Partner Update Count determines how many additions and updates made to the WINS
	database result in changes that need to be replicated to the PULL partner. When
	the number of additions and changes equals the value defined by Update Count
	then a PUSH (trigger) is sent to the PULL partner, which then requests
	replicas.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
