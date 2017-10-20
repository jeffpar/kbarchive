---
layout: page
title: "Q111839: SMTP: Gateway Does Not Get Outgoing Messages from Postoffice"
permalink: /kb/111/Q111839/
---

## Q111839: SMTP: Gateway Does Not Get Outgoing Messages from Postoffice

{% raw %}

	Article: Q111839
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft SMTP Mail Gateway may not pick up outgoing messages from the
	gateway postoffice. When looking at the log file, the SMTPGET process is never
	spawned or executed.
	
	CAUSE
	=====
	
	A zero-length FROM_NC.API file probably exists in the M:\SMTP sub-directory.
	This file may be created if the gateway is low on memory and causes the gateway
	to skip the SMTPGET process completely.
	
	RESOLUTION
	==========
	
	Delete the FROM_NC.API file. Ensure the log file shows at least 40K of
	contiguous memory (in the Idling line, after the word "largest"). If the gateway
	does not have enough memory, load your MS-DOS, TCP/IP, and other network
	software outside of conventional memory, and make sure no
	terminate-and-stay-resident (TSR) programs are being loaded.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
