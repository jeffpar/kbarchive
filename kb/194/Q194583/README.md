---
layout: page
title: "Q194583: XWEB: Cannot Save Message with Right-Click in Outlook Web Client"
permalink: /kb/194/Q194583/
---

## Q194583: XWEB: Cannot Save Message with Right-Click in Outlook Web Client

{% raw %}

	Article: Q194583
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server 5.5 Outlook Web client, you cannot
	save a message by right-clicking it and clicking Save.
	
	CAUSE
	=====
	
	This behavior is by product design.
	
	WORKAROUND
	==========
	
	To work around this problem and save a message, perform the following steps:
	
	1. Open the message by placing your cursor over the message and clicking. This
	  will open another browser window displaying the message.
	
	2. On the File menu of that browser, click Save As. This will save the file as
	  an .asp (Active Server Page) in the location you desire.
	
	MORE INFORMATION
	================
	
	The Outlook Web client does not support the Save functionality mentioned in the
	SYPMTOMS section above. It does however, support right-clicking to save file
	attachments.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
