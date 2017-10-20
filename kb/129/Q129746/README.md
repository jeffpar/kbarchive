---
layout: page
title: "Q129746: X.400 SMTP: Mixed Gateway Addresses on the To: Line"
permalink: /kb/129/Q129746/
---

## Q129746: X.400 SMTP: Mixed Gateway Addresses on the To: Line

{% raw %}

	Article: Q129746
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent to both an X.400 user and an SMTP user, the Reply All
	feature does not work.
	
	CAUSE
	=====
	
	When a message is sent to an X.400 user and an SMTP user, the X.400 recipient
	will not have a valid route to send mail to the SMTP recipient. The message
	shows both the SMTP name and the X.400 name in the TO: header. However, the SMTP
	user does not have a return address route. When the X.400 recipient chooses to
	Reply All, he or she can see only the original MSMail sender, NOT the SMTP user.
	
	RESOLUTION
	==========
	
	This is working the way it is supposed to work. There is no way for the "remote"
	X.400 system to route mail to SMTP. Our mail program does not allow mail coming
	in from one gateway to be routed out through another gateway. The TO: field does
	include both recipients. Users will need to reconstruct their own addresses to
	reach the SMTP user.
	
	MORE INFORMATION
	================
	
	Be sure you do not strip out the gateway headers when you set up your gateways.
	If you strip the headers, you will not know who the original recipients were.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
