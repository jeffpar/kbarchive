---
layout: page
title: "Q301243: Edbbcli.dll in Use Error Message During Exchange 5.5 Upgrade"
permalink: /kb/301/Q301243/
---

## Q301243: Edbbcli.dll in Use Error Message During Exchange 5.5 Upgrade

{% raw %}

	Article: Q301243
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup kbExchange
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to Exchange Server 5.5, the following error message
	may appear:
	
	  Cannot copy over file EDBBCLI.DLL. File is in use.
	
	Your options are to ignore the message or to retry or cancel the upgrade.
	
	RESOLUTION
	==========
	
	To resolve this issue, click Ignore, and then manually copy the Edbbcli.dll file
	from the installation CD to Exchange Server after the upgrade is complete.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbExchange 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
