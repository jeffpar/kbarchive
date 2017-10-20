---
layout: page
title: "Q87305: X400: Outgoing Messages Will No Longer Sit in Outgoing Queue"
permalink: /kb/087/Q87305/
---

## Q87305: X400: Outgoing Messages Will No Longer Sit in Outgoing Queue

{% raw %}

	Article: Q87305
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the changes made to version 3.0 of the Microsoft Mail Gateway to X.400 is
	that messages no longer sit indefinitely in outgoing queues. Priority 5 messages
	time-out in 45 minutes, and all other messages time-out in 24 hours. When a
	message times-out, a nondelivery report (including the content of the original
	message) is returned to the originator. Priority 1 messages (non-urgent)
	times-out in 36 hours.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
