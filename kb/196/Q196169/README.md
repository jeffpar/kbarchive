---
layout: page
title: "Q196169: XADM: Option to Zero Out Deleted Messages on Exchange Server"
permalink: kb/196/Q196169/
---

## Q196169: XADM: Option to Zero Out Deleted Messages on Exchange Server

	Article: Q196169
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): kbFEA exc55sp2fea exc55 exc55sp1
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is deleted on an Exchange Server computer, there is currently no
	provision to zero out the deleted items. This means that the deleted data could
	be retrieved using conventional retrieval methods.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for an option for zeroing out deleted items. We
	have modified Exchange Server 5.5 so that it is now possible to zero out the
	deleted items on a hard disk.
	
	To obtain this feature, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	
	
	Zeroing out of pages has been made a part of the backup procedure. The backup
	will be a little bit slower, but it will also do zeroing work. However, the
	zeroing will occur after the tape write. This means that the deleted items will
	be on the tape until the next backup.
	
	In order to work around the problem of the tape retaining the information of the
	deleted items, an option to run backup to a NULL device has been provided. This
	procedure will explicitly zero out pages but with no backup. To make sure that
	the tapes do not retain the information of the deleted items, it is suggested
	that the NULL option be executed before the actual tape backup. This will mean a
	read of every database page, but this is at the rate of approximately 60
	gigabytes an hour. Thus, backup time will be increased for the time to run to a
	null device.
	
	The NULL option is an extension to the Exchange backup API. A particular backup
	application may not support this function. At this time, NT Backup does not
	leverage this function.
	
	
	Additional query words: retrieval, deleted message
	
	======================================================================
	Keywords          : kbFEA exc55sp2fea exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
