---
layout: page
title: "Q179893: XWEB: Forwarding Message Sends Message to All on BCC: Line"
permalink: /kb/179/Q179893/
---

## Q179893: XWEB: Forwarding Message Sends Message to All on BCC: Line

{% raw %}

	Article: Q179893
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Outlook Web Access version 5.5 and try to forward or reply to a
	message that has no recipients on the TO: line but does have recipients on the
	BCC: line, the following error message may appear:
	
	  Failed to Send Message.
	
	The message will not be sent to the intended recipients but will be sent to
	everyone on the BCC: line.
	
	WORKAROUND
	==========
	
	To avoid this behavior, add someone to the TO: line before forwarding the
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access,
	version 5.5, and Microsoft Exchange Active Server Components, version 5.0. We
	are researching this problem in Microsoft Exchange Active Server Components,
	version 5.0 and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	
	A supported fix for Microsoft Outlook Web Access, version 5.5 is now available,
	but has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: xweb bcc
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : :5.0,5.5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
