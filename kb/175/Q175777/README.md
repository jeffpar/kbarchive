---
layout: page
title: "Q175777: XWEB: Outlook Web Access Attachments are Received Empty"
permalink: /kb/175/Q175777/
---

## Q175777: XWEB: Outlook Web Access Attachments are Received Empty

{% raw %}

	Article: Q175777
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Multiple attachments in Outlook Web Access are received as a single blank or
	empty attachment or not received at all.
	
	CAUSE
	=====
	
	The sender attempting to send multiple attachments and delimiting the
	attachments with a semi-colon. For example, after clicking the Attachment tab to
	choose the attachments to send, the user types in multiple filenames such as
	<file1;file2>. This causes the Outlook Web Access client to search for a
	file named <file1;file2> for the attachment. Because Outlook Web Access
	cannot find that filename, it sends a single blank or empty attachment.
	
	WORKAROUND
	==========
	
	Use the Browse feature to select multiple attachments. These items must be
	selected individually and added as attachments.
	
	NOTE: Netscape Navigator 4.02 and previous versions only support single
	attachments. If multiple attachments are selected and sent, the attachments are
	received as an icon, but with nothing in them.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange2000Search kbOWASearch kbOWA550 kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
