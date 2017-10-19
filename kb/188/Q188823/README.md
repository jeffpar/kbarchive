---
layout: page
title: "Q188823: XCLN: Attachment Dropped During Forward of Message"
permalink: /kb/188/Q188823/
---

## Q188823: XCLN: Attachment Dropped During Forward of Message

	Article: Q188823
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Messaging, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Internet message with more than one attachment is received by an Exchange
	Internet Mail Service and passed to a Microsoft Mail postoffice through the MS
	Mail Connector Interchange (MSMI). The message is then opened by an Exchange
	client using the Microsoft Mail Service Provider (to access the MS Mail
	postoffice). When the message is opened, all attachments are present. When the
	message is forwarded, one of the attachments is missing from the forwarded
	message.
	
	CAUSE
	=====
	
	The message attachments were processed incorrectly when the message was moved
	from the MS Mail postoffice into the Exchange client's Inbox in the user's
	personal folder (PST) file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange client
	version 5.0 and the Windows Messaging Client for Windows 95 RTM.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMessaging
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
