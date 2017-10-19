---
layout: page
title: "Q146473: XFOR: Attachment with Name of Charset = iso-2022-JP"
permalink: /kb/146/Q146473/
---

## Q146473: XFOR: Attachment with Name of Charset = iso-2022-JP

	Article: Q146473
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Exchange Internet Mail Connector (IMC) receives a message
	that contains a character set that is not installed, the content of the message
	body is placed into an attachment containing the message. The file will contain
	an attachment display name of "Charset = XXX" (for example, Charset =
	iso-2022-JP).
	
	This behavior does not give the recipient a clear indication of the reason for
	the location of the message contents, or instructions to access the attachment.
	The message is placed into the attachment (for example, ATT00000.txt).
	
	The contents of the attachment can be accessed by using a viewer that can display
	the original character set.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Server 4.0 IMC has been modified to handle body parts
	with unknown character sets differently. After you obtain this feature, the body
	of an inbound non-TNEF content conversion failure will be placed in one
	attachment and will include the following text to provide further information:
	
	  This message was sent using a character set not supported on the Internet
	  Mail Connector. The message text has been placed into an attachment. To view,
	  double-click on the attachment. If the text isn't displayed correctly, save
	  the attachment to disk, and then use a viewer that can display the original
	  character set.
	
	The MS-DOS format 8.3 file name will be ATT00000.txt, where the number will
	increment depending on the number of messages delivered. The displayname
	"charset =" is designed to help determine the character sets indicated by the
	message body.
	
	The body of an inbound TNEF content conversion failure will include at least two
	attachments. One attachment will include the first body part and have a standard
	text name and an attachment display name of "char = XXX" to indicate a character
	set was used that was not recognized (for example, ATT00000.txt; charset =
	ISO-2022-JP). The second attachment will contain the second body part and
	message content (for example, message.txt). The two attachments will be
	separated by the following message for clarification:
	
	  The Internet Mail Connector received a message that could not be processed.
	  View the original content by opening the attached message.
	
	This feature is included in Microsoft Exchange Server version 4.0 U.S. Service
	Pack 2. For information on obtaining the service pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
