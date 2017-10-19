---
layout: page
title: "Q255654: IIS Performance Counters Not Available in TS Client Session"
permalink: /kb/255/Q255654/
---

## Q255654: IIS Performance Counters Not Available in TS Client Session

	Article: Q255654
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The performance counters in the "Internet Information Services Global"
	performance object are not available through a Terminal Server Client session.
	
	CAUSE
	=====
	
	The user who is logged in through the Terminal Services Client is not a member
	of the Administrator user group on the computer that is hosting Terminal
	Services. Only users who are members of the Administrator group can view some
	performance objects, such as "Internet Information Services Global".
	
	RESOLUTION
	==========
	
	If it is appropriate for that user to have all Administrator privileges on the
	computer hosting Terminal Services, add that user to the Administrator group.
	
	Additional query words: iis 5 ts Admin akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
