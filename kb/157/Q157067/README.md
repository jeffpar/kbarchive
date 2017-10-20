---
layout: page
title: "Q157067: SMS: Network Adapter Card Information Not Detected"
permalink: /kb/157/Q157067/
---

## Q157067: SMS: Network Adapter Card Information Not Detected

{% raw %}

	Article: Q157067
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Systems Management Server inventory is run on some computers running
	Windows NT, the network card MAC address, configuration information, and IP
	address information may not be reported. This will result in either blank or
	NULL information being reported in the personal computer Properties for that
	system.
	
	CAUSE
	=====
	
	Systems Management Server inventories computers running Windows NT by querying
	the Windows NT registry. If the Netcard entry in the registry is not the first
	entry, Systems Management Server will not find the information. This problem may
	occur if there is one or more RAS adapters installed on the system. This problem
	may also occur if a network card had been replaced in the system. When Windows
	NT installs a new network card, it adds the new information in the registry with
	a new entry. It does not reuse an existing entry.
	
	For example, when a network card is first installed, a registry entry will be
	created as "Netcard1". If this network card is then replaced, or if other
	network cards are installed and this one is removed, the new network cards will
	be named "Netcard2," Netcard3," "Netcard4," and so on.
	
	Systems Management Server inventory currently does not scan through these
	additional entries to find the new network card information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
