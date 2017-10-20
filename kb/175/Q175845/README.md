---
layout: page
title: "Q175845: XFOR: Attachment Icon Changes When Forwarding Msg to Notes"
permalink: /kb/175/Q175845/
---

## Q175845: XFOR: Attachment Icon Changes When Forwarding Msg to Notes

{% raw %}

	Article: Q175845
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you forward a message with an attachment from an Outlook client to a Lotus
	Notes client, the attachment icon may change to a default blank icon. The
	attachment file name will be visible. When you open the attachment, the correct
	application opens and displays the information.
	
	CAUSE
	=====
	
	This is an existing functional limitation. The PR_ATTACH_RENDERING attribute is
	not set on inbound messages into Exchange. Thus, the default icon is used when
	the attachment is forwarded to Lotus Notes. Outlook and other Windows clients
	can display the correct icon based on the file extension. No functionality is
	lost, and corruption does not occur with the attachment when you view it in
	Lotus Notes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
