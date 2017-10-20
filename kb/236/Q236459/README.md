---
layout: page
title: "Q236459: XFOR: Meeting Time Off One Hour When Sent by GroupWise Connector"
permalink: /kb/236/Q236459/
---

## Q236459: XFOR: Meeting Time Off One Hour When Sent by GroupWise Connector

{% raw %}

	Article: Q236459
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Novell GroupWise users may find that when they accept meeting requests from
	Exchange Server users, their meeting times are an hour later than the original
	meeting time. This behavior occurs during the time period between October 27th
	to October 31st. Note that October 31st is the end of Daylight Savings Time
	(DST) when most parts of the world automatically advance an hour.
	
	CAUSE
	=====
	
	In the GroupWise API gateway, the end of DST is incorrectly set at October 27th,
	rather than October 31st. This results in all meeting requests sent from
	Exchange Server to GroupWise to automatically advance an hour.
	
	RESOLUTION
	==========
	
	Contact Novell to inquire about a possible resolution to this problem. The
	third-party contact information included in this article is provided to help you
	find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about how to contact Novell, click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1 hour, advanced, meeting off, groupwise
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
