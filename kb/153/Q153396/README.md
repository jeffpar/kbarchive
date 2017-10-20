---
layout: page
title: "Q153396: SMS Administrator Unable to Display Properties of Two NICs"
permalink: /kb/153/Q153396/
---

## Q153396: SMS Administrator Unable to Display Properties of Two NICs

{% raw %}

	Article: Q153396
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When two identical network interface cards (NICs) are installed on a Windows NT
	client, the SMS Administrator is sometimes unable to display both cards when
	using the "View a table of data records" display in the "Netcard Properties"
	window.
	
	CAUSE
	=====
	
	This problem occurs when the parameters retrieved by Invwin32.exe are equal for
	both cards (example with an ENET-TR Netflex/Netflex-2):
	
	  Manufacturer = <ENET-TR Netflex/Netflex-2 COMPAQ>
	  IRQ          = 0
	  Port Address = <nothing>
	
	The "IRQ=0" means there is no IRQ parameter in the registry (in the
	HKEY_LOCAL_MACHINE subtree, at the subkey
	SYSTEM\CurrentControlSet\Services\NETFLX1\Parameters).
	
	WORKAROUND
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms invwin32
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
