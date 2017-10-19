---
layout: page
title: "Q137105: Size Limits for Sending and Receiving MSN E-mail"
permalink: /kb/137/Q137105/
---

## Q137105: Size Limits for Sending and Receiving MSN E-mail

	Article: Q137105
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both outbound and inbound e-mail messages have size limits using your MSN
	Internet Access e-mail account.
	
	MORE INFORMATION
	================
	
	The message size shown in the Inbox, Outbox, or other mail folder is the
	uncompressed message size. The message size shown in Remote Mail is the
	compressed message size.
	
	Outbound Messages
	-----------------
	
	Outbound e-mail messages cannot be larger than 1 MB (including header, body, and
	attachments). If a message is larger, it is sent back to your Inbox with an
	explanation.
	
	The 3-MB limit is based on the compressed size of the message as it is handled by
	The Microsoft Network. It is therefore possible to send a message with a large
	size as reported by Microsoft Exchange's Outbox folder, because the message is
	not yet compressed. The parts compressed are the files, objects, and messages
	inserted using the Message command on the Insert menu. The text body is not
	compressed.
	
	Inbound Messages
	----------------
	
	Internet messages received by The Microsoft Network are also limited to 1 MB for
	the entire message and 8K for the message's text body. Internet mail is not
	compressed because attachments are text encoded using UUENCODE. If a message
	received from the Internet exceeds 3 MB, The Microsoft Network sends the
	appropriate error code to the sending service. It is that service's
	responsibility to inform the sender that the message was not sent.
	
	Additional query words: msn email
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbMSNSearch kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
