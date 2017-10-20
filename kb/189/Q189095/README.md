---
layout: page
title: "Q189095: XFOR: Messages Not Delivered Due to IMS Size Restrictions"
permalink: /kb/189/Q189095/
---

## Q189095: XFOR: Messages Not Delivered Due to IMS Size Restrictions

{% raw %}

	Article: Q189095
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are setting one of two Internet Mail Services to restrict messages
	based on size, the following events may appear in the application log of the
	event viewer if the Internet Mail Service Message Archival is set to maximum:
	
	  Event ID: 4115
	  Type: Error
	  Source: MSExchangeIMC
	  Description:
	  The message from the spool file <&%$#> seems to be looping through
	  the routing extension for the Internet Mail Service. Please check that the
	  routing DLL is configured properly.
	
	  Event ID: 4132
	  Type: Error
	  Source: MSExchangeIMC
	  Description:
	  The Internet Mail Service has failed attempting to deliver a system message.
	  It will be moved from the queue into the ARCHIVE directory. The spool file
	  name can be found in the Data section of this event.
	
	Some system messages (replication, status, notifications, and so on) are not
	being delivered.
	
	CAUSE
	=====
	
	These event messages are due to the level of logging and are not harmful.
	Internet Mail Service operation is not affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: IMC SITE CONNECTOR
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
