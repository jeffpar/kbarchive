---
layout: page
title: "Q156282: XCLN: Meeting Request Sent to Assistant Will NDR the Response"
permalink: /kb/156/Q156282/
---

## Q156282: XCLN: Meeting Request Sent to Assistant Will NDR the Response

{% raw %}

	Article: Q156282
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a Microsoft Schedule+ 7.0 meeting request to a Microsoft Schedule+
	1.0 user who is configured with an assistant, the 1.0 assistant can accept the
	meeting request but will receive an Non-Delivery Report (NDR) on the accept
	message response.
	
	If the user responds to the meeting request, the message will not NDR. This only
	happens if the assistant responds.
	
	WORKAROUND
	==========
	
	When the assistant receives the NDR, they should click the Resend button and
	forward that message to the correct address.
	
	MORE INFORMATION
	================
	
	The following is an example of the NDR message:
	
	  Your message did not reach some or all of the intended recipients.
	  Date submitted: Thursday, September 19, 1996 1:32PM
	  Message title: Yes: ABC Meeting
	  There were no valid message recipients supplied.
	
	  The following recipient(s) could not be reached:
	
	  JohnDoe(MS:MICROSOFT/C)
	  The message recipient was invalid.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 7.0 of Microsoft
	Schedule+. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
