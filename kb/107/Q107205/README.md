---
layout: page
title: "Q107205: SMTP: WHEN Info Missing in Schedule+ Meeting Requests"
permalink: /kb/107/Q107205/
---

## Q107205: SMTP: WHEN Info Missing in Schedule+ Meeting Requests

{% raw %}

	Article: Q107205
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail users who receive meeting request messages from Microsoft Schedule+ by way
	of Microsoft Mail Gateway to SMTP, do not receive the WHEN portion of a meeting
	request and cannot tell when the meeting is scheduled.
	
	CAUSE
	=====
	
	When Schedule+ creates the meeting request it places the WHEN information in the
	header portion of the message but not in the body. Most header information is
	normally duplicated in a message's header and body portions because the header
	is used for routing within Microsoft Mail and the body is the text seen by MS
	Mail users--with header information extracted into the message as needed.
	
	Messages addressed to SMTP users are extracted to a text file using the Microsoft
	Mail File Format (MMFF) as defined in the File Format APIs for Gateway and
	Applications (FFAPI) manual. The header portion of the MMFF is not needed in the
	SMTP environment so it is discarded. WHEN information is included in the header
	but not in the body, so it is lost when the SMTP Gateway forwards the message
	into the SMTP environment.
	
	RESOLUTION
	==========
	
	Type the meeting time and date, and the time you send the meeting request, in
	the text itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of the Microsoft
	Mail Gateway to SMTP. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.0 when schedule+
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
