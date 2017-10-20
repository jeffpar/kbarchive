---
layout: page
title: "Q196920: XFOR: MAPI Embedded Message may NDR Due to Invalid Recipient"
permalink: /kb/196/Q196920/
---

## Q196920: XFOR: MAPI Embedded Message may NDR Due to Invalid Recipient

{% raw %}

	Article: Q196920
	Product(s): Microsoft Exchange
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a message to an Internet recipient without doing a Check Names on
	that recipient, and embed that message into a second message to an Internet
	recipient, the message may fail with the following non-delivery report (NDR):
	
	  Your message did not reach some or all of the intended recipients.
	
	        Subject:Unknown
	        Sent:10/11/98 10:57:28 AM
	
	  The following recipient(s) could not be reached:
	
	        'user@microsoft.com' on 10/11/96 10:58:39 AM
	              A syntax error was detected in the content of the message
	              MSEXCH:IMC:Microsoft:ORG:SITE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	MORE INFORMATION
	================
	
	The above behavior does not occur if the recipient of the second message is in
	the local Exchange Server directory.
	
	Additional query words: NDR embedded resolve
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
