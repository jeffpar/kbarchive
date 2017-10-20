---
layout: page
title: "Q137044: SMTP: Err Msg: 354 Start Mail Input; End wit"
permalink: /kb/137/Q137044/
---

## Q137044: SMTP: Err Msg: 354 Start Mail Input; End wit

{% raw %}

	Article: Q137044
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you review the SMTPGATE.LOG file, the following is displayed when messages
	sent and received:
	
	  [tx] 354 start mail input; end with <CRLF>.<CRLF>
	
	CAUSE
	=====
	
	This message is recorded when the gateway machine begins sending a message. The
	gateway is acknowledging that it will send a <CRLF>.<CRLF> when it
	finishes sending the message.
	
	This is expected behavior in the SMTP environment and the Mail Gateway to SMTP is
	adhering to RFC822.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
