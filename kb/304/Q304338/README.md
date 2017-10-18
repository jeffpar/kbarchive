---
layout: page
title: "Q304338: XADM: OL OST Sync Fails If Large Number of Items in Exchange PF"
permalink: kb/304/Q304338/
---

## Q304338: XADM: OL OST Sync Fails If Large Number of Items in Exchange PF

	Article: Q304338
	Product(s): Microsoft Exchange
	Version(s): 5.5,SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot successfully use Microsoft Outlook to synchronize the contents of an
	offline folders file (.ost) with a Microsoft Exchange public folder. The public
	folder may have a large number of items that change frequently, although the
	number of items is less than the documented limit of 65,536 items per folder.
	
	CAUSE
	=====
	
	This problem may occur if the public folder is busy, such as if the number of
	items that are removed by aging limits and the number of new items that are
	created in the public folder on a daily basis are generally large.
	
	For example:
	
	- 50,000 items are present in a public folder.
	
	- During the next Information Store maintenance cycle, 15,000 items in the
	  public folder are removed due to Public Folder item aging limits setting.
	  This removal brings the total number of items to 35,000.
	
	- The next day 20,000 items are added to the public folder, which brings the
	  total number of items to 55,000.
	
	This problem may also occur if you have not used the Microsoft Outlook client to
	synchronize the contents of the .ost file for an extended period of time.
	
	
	WORKAROUND
	==========
	
	To work around this problem, for extremely busy public folders, consider
	redistributing the contents of public folders across several different public
	folders.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange2000ServSP1
	Version           : :5.5,SP1
	Issue type        : kbbug
	
	=============================================================================
	
