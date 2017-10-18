---
layout: page
title: "Q260198: XCLN: NDR in Outlook 97 and Outlook 98 Using Reply to All Option"
permalink: kb/260/Q260198/
---

## Q260198: XCLN: NDR in Outlook 97 and Outlook 98 Using Reply to All Option

	Article: Q260198
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55kbbuglist
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message to Exchange Server recipients by using a personal
	distribution list (DL) or Exchange Server DL, you may receive a non-delivery
	report (NDR) message that is similar to the following for many of the members of
	the DL:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Message Subject -- April 3 Sent: 2000-04-03 8:38AM
	
	  The following recipient(s) could not be reached:
	
	  Doe, John on 2000-04-03 8:40 AM
	  The message was undelivered because the specified recipient postal address was
	  incorrect
	  MSEXCH:MSExchangeIS:SITE1:SERVER1
	
	CAUSE
	=====
	
	This issue can occur in Microsoft Outlook 97 and Microsoft Outlook 98 if the
	following conditions exist when you send a message:
	
	- You send the message to a personal DL or Exchange Server DL and request a
	  delivery receipt.
	
	- You open that message in the Sent Items folder, click "Reply to All", and
	  then send the message.
	
	- A blue letter "i" is displayed in the original message icon in the Sent Items
	  folder before you use the "Reply to All" option to reply to the message. This
	  icon is displayed when one of the delivery receipts for the original message
	  is opened. If this icon is not displayed for the message, an NDR message is
	  not generated.
	
	When the blue "i" is displayed in the message icon in the Sent Items folder, a
	Messaging Application Programming Interface (MAPI) property is set on the
	message that prevents the delivery of the message to many of the DL recipients.
	If you use the Reply to All option after this MAPI property is set, an NDR
	message is generated.
	
	RESOLUTION
	==========
	
	Outlook 97
	----------
	
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
	
	The version of this fix should have the following file attributes or later:
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Outllib.dll | 8.4.0.6510 | 
	+--------------------------+
	
	NOTE: The download for this article is only available in French version.
	
	
	
	
	Outlook 98
	----------
	
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
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Outllib.dll | 8.5.6510.0 | 
	+--------------------------+
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook 97 and
	Microsoft Outlook 98.
	
	
	Additional query words: XADM outllib dll
	
	======================================================================
	Keywords          : exc4 exc5 exc55 kbbuglist
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
