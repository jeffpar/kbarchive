---
layout: page
title: "Q177597: XFOR: Delivery and Read Reports Do Not Appear in Lotus Notes"
permalink: /kb/177/Q177597/
---

## Q177597: XFOR: Delivery and Read Reports Do Not Appear in Lotus Notes

{% raw %}

	Article: Q177597
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message with an attached Delivery or Read report from a Microsoft
	Exchange client or Outlook client to a Lotus Notes client via the Exchange
	Connector for Lotus Notes, the Notes client receives the message, but the
	attached report is not present.
	
	CAUSE
	=====
	
	When the message with the attached report is being processed, the Exchange
	Connector for Lotus Notes strips the attached report from the message. Any other
	part of the message such as text or other attachments remains intact.
	
	WORKAROUND
	==========
	
	If you must send a Read or Delivery report to a Notes client, perform the
	following steps to work around the problem:
	
	1. From the open message, click Insert on the toolbar.
	
	2. Select Item and choose the report from the list of messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: linkage notesmc profs snads
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
