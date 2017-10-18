---
layout: page
title: "Q147697: Turning Off Auditing of Security Policy Changes Not Audited"
permalink: kb/147/Q147697/
---

## Q147697: Turning Off Auditing of Security Policy Changes Not Audited

	Article: Q147697
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use User Manager for Domains to turn off auditing of successful
	Security Policy Changes, an event is not logged in the Event Viewer even though
	this is a successful change of the Security Policy.
	
	
	CAUSE
	=====
	
	The Local Security Authority has changed the Security Policy before determining
	if this change should be audited.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	This problem is fixed in SUR.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
