---
layout: page
title: "Q129707: X400: No Outgoing X.400 Receipt Notifications"
permalink: /kb/129/Q129707/
---

## Q129707: X400: No Outgoing X.400 Receipt Notifications

{% raw %}

	Article: Q129707
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an X.400 mail user requests a read receipt for a message sent to a
	Microsoft Mail user, the receipt is not an X.400 receipt notification. If the
	Microsoft Mail Windows client is used, a new message with the following text
	will be sent:
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Read Receipt
	  From: Administrator
	  Date sent: 1995-04-20 13:07
	  To: John DOE (local)
	  Subject: Return Receipt: Administrator
	  Your Message To: Administrator(MS:MICROSOFT/SUPPORT/Admin)
	  Entitled: Test message
	  And Sent On: 1995-04-20 13:07
	  Was Read At: 1995-04-20 13:07
	  Priority: C
	
	The fact that this is not a native X.400 receipt notification means that the
	foreign mail client cannot automatically associate it with the original message.
	
	CAUSE
	=====
	
	The CCITT X.400 recommendations contain a service element called Receipt
	Notification as a nonessential option. The Microsoft Mail Gateway to X.400 does
	not support this service on outgoing mail.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
