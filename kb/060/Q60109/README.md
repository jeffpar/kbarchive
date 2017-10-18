---
layout: page
title: "Q60109: Mac Hyp: Listing All Recipients of a Mail Message"
permalink: kb/060/Q60109/
---

## Q60109: Mac Hyp: Listing All Recipients of a Mail Message

	Article: Q60109
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the HyperCard Software Development Kit (SDK) for Microsoft Mail, you can
	obtain a list of all recipients of a particular mail message. This can be done
	as follows:
	
	1. Use the getMessageList command to obtain a list of all messages for the
	  currently logged on user.
	
	  The first field returned in the message list is the 4-character message type
	  for each message (for example, "Mess").
	
	  The second field returned in the message list is the ID number of each
	  message.
	
	2. Use the getMessage command, with the message type and ID as the first and
	  second arguments, to obtain the message reference number.
	
	3. Use the getRecipients command, with the message reference number as an
	  argument, to obtain a list of all recipients of that message.
	
	The getRecipients command returns a list of recipients, with one name per line.
	Carbon-copy recipient's names have a Cc: in front of them. Blind carbon-copy
	recipients are not returned by this or any other command in the HyperCard SDK or
	Microsoft Mail.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
