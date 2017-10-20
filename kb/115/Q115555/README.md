---
layout: page
title: "Q115555: SMTP: Gateway Screen Border Displays Random Characters"
permalink: /kb/115/Q115555/
---

## Q115555: SMTP: Gateway Screen Border Displays Random Characters

{% raw %}

	Article: Q115555
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to SMTP may display a disrupted screen with random
	characters on its borders. Mail flow is not affected.
	
	CAUSE
	=====
	
	Setting the "Internet Name of Gateway" to 254 characters or more disrupts the
	gateway screen.
	
	RESOLUTION
	==========
	
	The "Internet Name of Gateway" field is found in the Administrator program,
	under Gateway, SMTP, Setup. Decrease the gateway name to fewer than 254
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.00 of Microsoft Mail
	Gateway to SMTP. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 smtp screen
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
