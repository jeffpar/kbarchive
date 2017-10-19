---
layout: page
title: "Q266092: XFOR: NDR When Sending an Excel Spreadsheet As an Attachment"
permalink: /kb/266/Q266092/
---

## Q266092: XFOR: NDR When Sending an Excel Spreadsheet As an Attachment

	Article: Q266092
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message that contains a Microsoft Excel spreadsheet as
	an attachment, you may receive a non-delivery report (NDR) similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:	FW:
	     Sent:	6/13/00 10:54 AM
	
	  The following recipient(s) could not be reached:
	
	     'ldolce@actium.com' on 6/13/00 11:00 AM
	  The content length of the message is too long for the recipient to take delivery.
	  The MTS-ID of the original message is: c=US;a=;p=MPS;l=JAXN047-000613145408Z-56596
	           MSEXCH:IMS:MPS:NAmerica:JAXN024 3903 (000B099C)<BR/>
	  Message exceeds size limit.
	
	CAUSE
	=====
	
	This behavior can occur if the Excel attachment contains macros. Macros are
	expanded when they go through the Internet Mail Service. If the Internet Mail
	Service has a message size restriction and the attachment is close to that size,
	when you send the message, the attachment may be expanded to a size that is too
	large to pass through the Internet Mail Service. For example, if you have an
	attachment that is 8 MB and your message size restriction is 10 MB, once the
	message is expanded, it will be approximately 11 MB. The Internet Mail Service
	rejects the message.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the message size limit on the Internet Mail
	Service. To do this:
	
	1. Open Microsoft Exchange Administrator.
	
	2. Click to expand Site, click Configuration, and then double-click Connections.
	
	3. Double-click "Internet Mail Service", and then click Properties.
	
	4. On the General tab, increase the message size limit to accommodate this
	  message.
	
	WORKAROUND
	==========
	
	To work around this issue, you may also zip the attachment and send it.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
