---
layout: page
title: "Q237473: XCLN: 64 Attachment Limit with Exchange Client"
permalink: kb/237/Q237473/
---

## Q237473: XCLN: 64 Attachment Limit with Exchange Client

	Article: Q237473
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send mail from the Microsoft Exchange Client 5.0 with more than 64
	attachments, only the first 64 attachments get delivered when your delivery
	location is set to personal folders. Anything over 64 is not sent and no error
	occurs. If you check the message in the Sent Items folder, the message shows the
	correct amount of attachments. If you send the message to yourself and look in
	the Inbox, it will only have 64 attachments. If your mail delivery is set to the
	mailbox on the server, all the attachments are delivered.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MAPI
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Mapi32.dll | 5.0.1461.99 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Client
	version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
