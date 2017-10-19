---
layout: page
title: "Q245431: XFOR: Zero Byte Files in GroupWise API Gateway API_OUT Folder"
permalink: /kb/245/Q245431/
---

## Q245431: XFOR: Zero Byte Files in GroupWise API Gateway API_OUT Folder

	Article: Q245431
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Connector for Novell GroupWise, the message
	flow from GroupWise to Exchange Server may fail. A zero-byte file appears in the
	Api_out folder of the API Gateway folder. This file disappears after the API
	gateway is stopped.
	
	If you try to open this file, it is locked by another process. However, the API
	gateway seems as if it did not finish processing the file because the API
	gateway log file ends with the following line:
	
	  <date> <time> Processing outbound message...
	
	Directory synchronization and mail flow from Exchange Server to GroupWise are
	unaffected.
	
	CAUSE
	=====
	
	The problem is occurring on the GroupWise system and there are two possible
	causes:
	
	- The <Exchange> Domain was set up as "External GroupWise."
	
	- The <Exchange> Domain is corrupted.
	
	RESOLUTION
	==========
	
	In the GroupWise administrator program, delete and recreate the domain for
	Exchange Server, and ensure that it is created as an "External Foreign" domain.
	
	MORE INFORMATION
	================
	
	To test API functionality independent of Exchange Server, refer to Novell
	article 10011718 available at the following Web site:
	
	  http://support.Novell.com/products/gw41/
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
