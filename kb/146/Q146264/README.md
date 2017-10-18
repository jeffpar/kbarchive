---
layout: page
title: "Q146264: XFOR: Clarification of the IMC Maximum Message Size"
permalink: kb/146/Q146264/
---

## Q146264: XFOR: Clarification of the IMC Maximum Message Size

	Article: Q146264
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Administrator of Microsoft Exchange Server version 4.0 can configure the
	maximum size of a message for transport through the Internet Mail Connector
	(IMC) in the General Properties page. The message size an IMC can transfer is
	the maximum message size, plus 1,023 bytes. This is by design.
	
	MORE INFORMATION
	================
	
	For example, if you set the maximum message size to 50KB and the actual message
	exceeds it by 2,000 bytes, the following Non-Delivery message appears:
	
	  The content length of the message is too long for the recipient to take
	  delivery.
	
	  <Server name> 3903 Message exceeds size limit, choose Maximum to
	  restrict the message size and set the value to 50K.
	
	The IMC can transfer a message that is 50 KB plus 1,023 bytes in size.
	
	The maximum message size configuration is useful when you do not want users to
	send messages with large attachments, which may affect performance. The maximum
	size value ranges from 1 to 2,097,151 KB. This setting applies to both inbound
	and outbound messages. If the IMC is used as a site connector, do not restrict
	the message size. This allows system messages used for directory replication and
	information store updates to pass through the IMC.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
