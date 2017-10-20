---
layout: page
title: "Q134970: Login Scripts are Not Modified on NetWare Servers"
permalink: /kb/134/Q134970/
---

## Q134970: Login Scripts are Not Modified on NetWare Servers

{% raw %}

	Article: Q134970
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbInventory smsinv sms
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	When you add a NetWare domain and NetWare servers to a Systems Management
	Server site, the login scripts are not modified when "Automatically
	Configure Logon Scripts" is selected if the system login script does not
	exist.
	
	For NetWare domains, the system login scripts for all the domains' NetWare
	file servers are modified to run Client Setup and Inventory Agent. If the
	NetWare system login script does not exist, Systems Management Server fails
	to complete this task.
	
	Systems Management Server looks for the NET$LOG.DAT file in the \PUBLIC
	subdirectory of the SYS volume, and modifies this file to include Systems
	Management Server Setup and Inventory Agent. If this file is not present,
	Systems Management Server cannot complete the requested login script
	modifications.
	
	Additional query words: prodsms sms clients site properties
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbInventory smsinv sms 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
