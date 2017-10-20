---
layout: page
title: "Q262215: XCON: Simple Mail Transfer Protocol Messages Received with Empty"
permalink: /kb/262/Q262215/
---

## Q262215: XCON: Simple Mail Transfer Protocol Messages Received with Empty

{% raw %}

	Article: Q262215
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A recipient may receive a message that contains an empty To line.
	
	CAUSE
	=====
	
	This issue can occur if the recipient was selected as a Bcc (blind carbon copy)
	recipient.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following section of Request for Comments (RFC) 822 describes how messages
	that are addressed to Bcc recipients are processed:
	
	  
	
	  4.5.3.  BCC / RESENT-BCC
	
	       This field contains the identity of additional recipients of
	       the message. The contents of this field are not included in
	       copies of the message sent to the primary and secondary reci-
	       pients. Some systems may choose to include the text of the
	       "Bcc" field only in the author(s)'s copy, while others may
	       also include it in the text sent to all those indicated in the
	       "Bcc" list.
	
	This behavior commonly occurs when users send unsolicited commercial e-mail. The
	sender enters a valid e-mail address in the To box, and then enters many
	recipients that the sender wants to receive the unsolicited e-mail in the Bcc
	box.
	
	Additional query words: UCE
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
