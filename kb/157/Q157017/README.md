---
layout: page
title: "Q157017: XADM: Attempting to Open Public Folder Might Return Error"
permalink: /kb/157/Q157017/
---

## Q157017: XADM: Attempting to Open Public Folder Might Return Error

{% raw %}

	Article: Q157017
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client to open a Public Folder (PF) that has
	a special custom view that categorizes the folder content, the open attempt
	might return the following:
	
	  Error: Unable to display folder
	
	CAUSE
	=====
	
	When a categorized view is added to a PF, the required columns are added to the
	folder table in the Microsoft Exchange Information Store (IS) to support this
	view. When we re-use this folder table, we assumed that all the columns needed
	are already present in the IS. However, if this same folder table is used but
	the sort criteria is different, the QueryRows call will not check to make sure
	the columns needed for the new sort criteria are present. It only checks that
	the columns needed for the categorization are present. So when QueryRows tries
	to create an index to the sorting columns, the IS database (JET) returns a
	JET_errColumnNotFound (this is translated as MAPI_E_CALL_FAILED).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Outlook
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
