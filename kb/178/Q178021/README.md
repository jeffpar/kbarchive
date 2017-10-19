---
layout: page
title: "Q178021: XFOR: Many DAT Files in the Mtadata Directory"
permalink: /kb/178/Q178021/
---

## Q178021: XFOR: Many DAT Files in the Mtadata Directory

	Article: Q178021
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you look in the Microsoft Exchange Server Mtadata directory, you may find a
	large number of .dat files, for example, DB000123.DAT. Many of these files are
	only 1 byte in size. This is also true, even if the Exchange Server message
	transfer agent (MTA) does not have any messages in the queues held for delivery.
	
	CAUSE
	=====
	
	This is by product design. In Microsoft Exchange Server 5.5, the MTA creates DAT
	files for all messages. After the messages have been delivered, instead of
	deleting the DAT files themselves, the data is deleted from the DAT files and
	the files are reset to 1 byte. The DAT files can be reused for future messages.
	This is done to enhance the performance of the MTA because creating and deleting
	files is a time consuming process. The number of .dat files will reflect the
	maximum number of messages in the queue at any one time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
