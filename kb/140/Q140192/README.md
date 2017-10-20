---
layout: page
title: "Q140192: PC WSPlus: Meeting Requests Returned as Undeliverable"
permalink: /kb/140/Q140192/
---

## Q140192: PC WSPlus: Meeting Requests Returned as Undeliverable

{% raw %}

	Article: Q140192
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you send a meeting request, you may receive a message similar to the
	following:
	
	  
	
	  From:                     System Administrator
	  To:                       User Name
	  Subject:                  Undeliverable Mail
	  Date Sent:                Tuesday, January 1, 1990 12:34PM
	  Non-delivery explanation: Your message did not reach some or all
	                            of the intended recipients.
	  Date submitted:           Tuesday, January 1, 1990 12:34PM
	  Message Title:            Sample Message Title. Too many errors
	                            occurred when you try to send this message.
	
	CAUSE
	=====
	
	The ATT directory or one of its subdirectories is missing from the Microsoft
	Mail postoffice sending the meeting request.
	
	RESOLUTION
	==========
	
	Restore or recreate the ATT directories that are missing.
	
	MORE INFORMATION
	================
	
	The directory structure should be similar to the following:
	
	\MAILDATA
	|
	-ATT
	 |
	 -AT0
	 -AT1
	 -AT2
	 -AT3
	 -AT4
	 -AT5
	 -AT6
	 -AT7
	 -AT8
	 -AT9
	 -ATA
	 -ATB
	 -ATC
	 -ATD
	 -ATE
	 -ATF
	|
	-CAL
	.
	.
	.
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
