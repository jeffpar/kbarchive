---
layout: page
title: "Q138232: XCLN: Mail Message Time Stamps Off by 1 or More Hours"
permalink: /kb/138/Q138232/
---

## Q138232: XCLN: Mail Message Time Stamps Off by 1 or More Hours

{% raw %}

	Article: Q138232
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client included with Microsoft Windows 95,
	you may find that the time stamp associated with a particular message is off by
	an hour or more.
	
	CAUSE
	=====
	
	When you set up Microsoft Windows 95, the Setup program asks you to choose a
	time zone for the computer. If you press ENTER rather than choosing the correct
	time, the time displayed may be incorrect for your time zone.
	
	If two users are in the same time zone, but User A chooses Central Time and User
	B chooses Pacific Time during Setup, the Date/Time dialog in the Control Panel
	will show the same local time but mail sent from User B to User A will have a
	time-relative offset of 3 hours because Microsoft Exchange thinks that the
	message came from a user 3 hours away.
	
	RESOLUTION
	==========
	
	Change the time zone to the correct one.
	
	Additional query words: 4.00 time stamp date
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
