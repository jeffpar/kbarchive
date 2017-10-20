---
layout: page
title: "Q188222: XFOR: Cannot Open SMTP Messages that Contain Attachments"
permalink: /kb/188/Q188222/
---

## Q188222: XFOR: Cannot Open SMTP Messages that Contain Attachments

{% raw %}

	Article: Q188222
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use either the Microsoft Exchange Client or the Microsoft Outlook
	Client to open an SMTP message that contains an attachment, you may receive the
	following error:
	
	  Can't open this item. Cannot add the attachment; no data source was provided.
	
	CAUSE
	=====
	
	This error is caused by a BinHex-labelled body part that is missing the BinHex
	prolog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	For more information on problems caused by inability to detect the Bibhex
	prelog, please see the following article in the Microsoft Knowledge Base:
	
	  Q170060 XADM: Store Uses 100% of CPU on Incoming MIME Binhex Message
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
