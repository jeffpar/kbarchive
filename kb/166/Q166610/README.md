---
layout: page
title: "Q166610: XFOR: Unable to Open Attachment from ccMail"
permalink: /kb/166/Q166610/
---

## Q166610: XFOR: Unable to Open Attachment from ccMail

	Article: Q166610
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You send a message from Lotus cc:Mail to Microsoft Exchange by way of the
	Microsoft Exchange Connector for Lotus cc:Mail. If the message has attachments
	that have filename extensions containing numeric characters, the message arrives
	but the attachment cannot be opened due to an invalid file type.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- When you receive the attachment with data and time appended, save the
	  attachment using the Save As function and rename the file at that time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The most common file type this problem occurs with is Lotus 123 WK4; however,
	any file extension with numeric character will experience the problem. For
	example if a file named Abc.wk4 is sent from cc:Mail, the attachment is received
	on the Microsoft Exchange side with the file name Abc.wk4 5/6/97 3:10PM. Because
	of the invalid file extension type, you will not be able to open the file along
	with the file association.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
