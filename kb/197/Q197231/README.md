---
layout: page
title: "Q197231: XFOR: Notes Connector Does Not Support &quot;Flags&quot; in Message"
permalink: /kb/197/Q197231/
---

## Q197231: XFOR: Notes Connector Does Not Support &quot;Flags&quot; in Message

{% raw %}

	Article: Q197231
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Messages marked with a flag in Microsoft Outlook will arrive in Lotus Notes by
	means of the Exchange Notes Connector without any indication of such a flag in
	Notes.
	
	CAUSE
	=====
	
	A "flag" in a message normally indicates to the recipient that special attention
	should be directed to this message. There is no equivalent in a Notes message to
	the Outlook message flags.
	
	MORE INFORMATION
	================
	
	Because Lotus Notes lacks an equivalent feature, the Exchange Notes Connector
	ignores the setting when translating the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
