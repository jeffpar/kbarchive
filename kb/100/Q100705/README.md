---
layout: page
title: "Q100705: SMTP: Err Msg: 550 Addressee Unknown"
permalink: /kb/100/Q100705/
---

## Q100705: SMTP: Err Msg: 550 Addressee Unknown

{% raw %}

	Article: Q100705
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display this error
	message:
	
	  550 Address Unknown
	
	CAUSE
	=====
	
	Thisindicates that the SMTP Gateway was unable to identify the recipient of the
	incoming message. This error message may occur if:
	
	- The recipient name of the address is not a valid Microsoft Mail user name.
	
	-or-
	
	- The domain name of the address not in the gateway's address map.
	
	Ensure the recipient is a valid Microsoft Mail for PC Networks user name, and
	that the domain name received is in the address map table. You can modify or add
	entries to the address map in the Admin program (Gateway, SMTP, Address Map) to
	match the domain name being received.
	
	Please refer to Microsoft Application Note "Configuring the SMTP Gateway and
	Domain Name Service (DNS)" and the version 3.0 "Microsoft Mail Gateway to SMTP
	Administrator's Guide," pages 34-40, for additional information.
	
	Additional query words: 2.10 3.00 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
