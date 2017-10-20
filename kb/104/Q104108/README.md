---
layout: page
title: "Q104108: PC Win: Messages with Same Time Stamp Are Sorted Incorrectly"
permalink: /kb/104/Q104108/
---

## Q104108: PC Win: Messages with Same Time Stamp Are Sorted Incorrectly

{% raw %}

	Article: Q104108
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.1,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.1, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, 3.1, and 3.2 of Microsoft Mail for Windows, messages
	received with the same time stamp do not get sorted correctly: they appear in a
	folder in the order they were placed in it and are not sorted automatically by
	their From field.
	
	CAUSE
	=====
	
	The messages are inserted into the folder in the order they are received. Mail
	does not sort them until you open the folder. If your primary sort key is the
	Received field, and all the time stamps are the same, the messages appear to
	Mail to already be sorted and Mail does not re-sort them. As a result, the
	messages appear in their original, unsorted order.
	
	The problem is that Mail pays attention only to date, hour, and minute when
	sorting, not seconds, and it does not automatically do a secondary sort by the
	From field.
	
	RESOLUTION
	==========
	
	Click the From field to force mail to sort based on that column, and then click
	the Received field again. This causes messages in the folder with the same time
	stamp to be sorted alphabetically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, 3.1, and 3.2
	of Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.10 3.20 timestamp
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail310 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.1,3.2
	
	=============================================================================
	

{% endraw %}
