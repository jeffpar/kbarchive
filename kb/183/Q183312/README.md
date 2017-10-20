---
layout: page
title: "Q183312: XFOR: SFS Mail Not Migrated When Custom Recipient Is Converted"
permalink: /kb/183/Q183312/
---

## Q183312: XFOR: SFS Mail Not Migrated When Custom Recipient Is Converted

{% raw %}

	Article: Q183312
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate a user from Microsoft Mail to Microsoft Exchange Server using
	the Exchange Migration wizard, and a custom recipient for the user being
	migrated already exists, the following event may be logged and the user's data
	may not be migrated properly:
	
	  Event ID:      7026
	  Source:        MSExchangeMig
	  Type:          Error
	  Category:      None
	  Description:   Migration Aborted due to Mapi logon failure.
	
	CAUSE
	=====
	
	When a user is migrated from Microsoft Mail to Exchange Server and a custom
	recipient is found with the same "MS" proxy address, that custom recipient is
	converted to an Exchange Server mailbox to preserve proxy addresses.
	
	Through this code path, "MIGRATE" proxy is not created.
	
	The "MIGRATE" proxy is used to find the mailbox when migrating the user's
	information (schedule information, e-mail, and so on).
	
	RESOLUTION
	==========
	
	The Exchange Migration wizard now searches for the "MS" proxy as well as the
	"MIGRATE" proxy to find the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem was corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
