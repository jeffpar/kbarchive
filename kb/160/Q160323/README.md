---
layout: page
title: "Q160323: XCLN: Messages Created Using Form Do Not Sort Properly by Date"
permalink: /kb/160/Q160323/
---

## Q160323: XCLN: Messages Created Using Form Do Not Sort Properly by Date

{% raw %}

	Article: Q160323
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 13-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Microsoft Exchange Forms Designer to create a form, messages created
	using that form may not sort properly in the Microsoft Exchange client. If the
	form contains a date field and you attempt to sort the messages by date, the
	messages may not be sorted properly.
	
	CAUSE
	=====
	
	When you create a form that contains a date field, and then use that form to
	create a message, the information in the date field is converted to text before
	the message appears in the Microsoft Exchange client. Because the field contains
	text data instead of dates, you may be unable to successfully sort the messages
	by date.
	
	
	WORKAROUND
	==========
	
	To work around this problem, configure the date field so that the year appears
	before the month and day (YY/MM/DD). When the date field is configured in this
	manner, the messages are sorted properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Forms Designer that is
	included with the Microsoft Exchange clients listed at the beginning of this
	article. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
