---
layout: page
title: "Q147813: Message with Attachments Sent Over Internet Not Received"
permalink: /kb/147/Q147813/
---

## Q147813: Message with Attachments Sent Over Internet Not Received

	Article: Q147813
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send messages with attachments to an Internet address, the attachments
	may not be received.
	
	The message may also be returned with the following error message:
	
	  Cannot send 8-bit data to 7-bit destination. Data format error.
	
	CAUSE
	=====
	
	The reception of mail attachments sent over the Internet depends on the
	configuration of the receiving user's mail system. The system may not support
	receiving attachments or may not support receiving attachments encoded with
	UUENCODE. All attachments sent from MSN, The Microsoft Network, are
	automatically encoded with UUENCODE.
	
	RESOLUTION
	==========
	
	Check with the message recipient to verify that the recipient's mail system is
	capable of receiving attachments encoded with UUENCODE.
	
	If a recipient cannot receive attachments, you can manually encode your
	attachment (using UUENCODE software) and include it as part of the message text.
	
	Additional query words: msn inetmailw95 outexw95
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	
