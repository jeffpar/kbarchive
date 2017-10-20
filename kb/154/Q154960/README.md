---
layout: page
title: "Q154960: Windows 95 Does Not Retain Primary WINS Server IP Address"
permalink: /kb/154/Q154960/
---

## Q154960: Windows 95 Does Not Retain Primary WINS Server IP Address

{% raw %}

	Article: Q154960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer, the WINS Server setting may not be retained.
	This setting is located on the WINS Configuration tab in the properties for the
	TCP/IP protocol.
	
	CAUSE
	=====
	
	Windows 95 requires both the primary and secondary entries for the WINS Server
	setting. If you enter only the primary WINS server's IP address, the setting is
	not retained.
	
	RESOLUTION
	==========
	
	If there is only one WINS server for the network, enter the IP address for the
	server in both the primary and secondary WINS Server setting boxes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbnetwork msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
