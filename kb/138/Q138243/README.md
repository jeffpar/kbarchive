---
layout: page
title: "Q138243: Duplicate Lan_Sender Entry in Sender Site Properties"
permalink: /kb/138/Q138243/
---

## Q138243: Duplicate Lan_Sender Entry in Sender Site Properties

{% raw %}

	Article: Q138243
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smssenders kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A second lan_sender entry for the site server appears in the Site Properties
	Senders window when you try installing a lan_sender on another computer and the
	install fails.
	
	CAUSE
	=====
	
	If a lan_sender is installed on an invalid server, the sender defaults to the
	site server. This causes another lan_sender entry for the site server to be put
	in Sender Site Properties, even though there is still only one lan_sender
	installed on the computer.
	
	If you delete the second entry, all of the LAN_SENDER registry entries are set to
	0 and you cannot add the lan_sender to the site server because it believes it is
	already there.
	
	
	RESOLUTION
	==========
	
	After the second entry appears in the Senders window, do not delete it. Modify,
	add, or delete another sender to get rid of the second lan_sender entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms sender
	
	======================================================================
	Keywords          : kbnetwork smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
