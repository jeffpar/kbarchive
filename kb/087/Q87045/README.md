---
layout: page
title: "Q87045: SMTP: What the Gateway to SMTP Does"
permalink: /kb/087/Q87045/
---

## Q87045: SMTP: What the Gateway to SMTP Does

{% raw %}

	Article: Q87045
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to Simple Mail Transfer Protocol (SMTP) polls the
	SMTP mailbag file on the gateway postoffice database and converts this file to
	an "SMTP message." Attachments are searched for non-7-bit characters and user
	unknown encoded (uuencoded) if any are found. 7-bit ASCII attachments are
	included in the message body.
	
	The gateway then opens an SMTP connection with the designated SMTP host and sends
	the mail items. The host will route the message to its final destination.
	
	Upon receiving mail, the gateway checks to see if the recipient is valid. If the
	recipient field is invalid, it fails the message, and the log file "user
	unknown."
	
	A valid addressee results in the SMTP address being converted to a Microsoft mail
	address. Any attachments received are automatically uudecoded if necessary, and
	appear as attachments in the Microsoft Mail inbox.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
