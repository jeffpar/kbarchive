---
layout: page
title: "Q190120: XFOR: Unable to Complete Setup of IMC from Disk"
permalink: /kb/190/Q190120/
---

## Q190120: XFOR: Unable to Complete Setup of IMC from Disk

{% raw %}

	Article: Q190120
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Internet Mail Connector (IMC) from disk, the setup
	may stop and you may get the following error:
	
	  You do not have the required permissions to complete this
	  process Ds_insufficient_access_rights.
	
	When you click Ok, you may receive the following:
	
	  Insufficient rights
	
	CAUSE
	=====
	
	This error is an indication of insufficient access rights to the Exchange Server
	files.
	
	WORKAROUND
	==========
	
	To correct this problem, do the following:
	
	1. Verify the logon credentials when you run the Setup.exe program. These
	  credentials must be reflected on the Exchange Server Administrator program's
	  Permissions tab in the Organization, Site, and Configuration containers.
	
	2. Log off and log back on as the service account.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
