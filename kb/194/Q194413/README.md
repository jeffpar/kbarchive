---
layout: page
title: "Q194413: XWEB: OWA: Can't Save or Resend Message After &quot;failed to send&quot;"
permalink: /kb/194/Q194413/
---

## Q194413: XWEB: OWA: Can't Save or Resend Message After &quot;failed to send&quot;

{% raw %}

	Article: Q194413
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Outlook Web Access (OWA) client to connect to a mailbox that
	has a limit set on the outgoing message size, you will get following error if a
	message is created that exceeds the maximum outgoing message size.
	
	  Failed to send item
	
	When you try to save or resend the message, nothing happens, and no error
	messages are generated.
	
	WORKAROUND
	==========
	
	Use the Microsoft Exchange Server Administrator program on the Exchange Server
	computer to increase the maximum outgoing message size, or decrease the size of
	the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
