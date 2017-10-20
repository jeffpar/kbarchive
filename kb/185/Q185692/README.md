---
layout: page
title: "Q185692: XADM: Synchronization of OST Fails"
permalink: /kb/185/Q185692/
---

## Q185692: XADM: Synchronization of OST Fails

{% raw %}

	Article: Q185692
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to synchronize all folders from a Microsoft Exchange or Outlook
	Client with an OST file, you may encounter the following error message:
	
	  Synchronization with the offline folder file could not be
	  completed. Consult the synchronization log in the deleted
	  items folder for details.
	
	CAUSE
	=====
	
	Messages with zero length Predecessor Change List (PCLs) are getting into the
	information store. Messages of this nature cannot be synchronized by OSTs;
	therefore, (SYNC_E_IGNORE) is returned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
