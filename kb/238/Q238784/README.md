---
layout: page
title: "Q238784: XFOR: Not All Messages Migrated from a cc:Mail DB8 Post Office"
permalink: /kb/238/Q238784/
---

## Q238784: XFOR: Not All Messages Migrated from a cc:Mail DB8 Post Office

{% raw %}

	Article: Q238784
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users from a Lotus cc:Mail DB8 Post Office, the following error
	message may appear in the Windows Event Viewer application log:
	
	  Event ID: 1032
	  Source: MsExchangeMig
	  Type: Error
	  Description: Error reading Export file 'C:\TEMP\<filename>' within the
	  'message contents' processing. Account '<account name>' did not migrate
	  successfully.
	
	CAUSE
	=====
	
	The Migration wizard is unable to read an attachment file from the exported
	user's messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
