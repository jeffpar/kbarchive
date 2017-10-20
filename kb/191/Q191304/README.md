---
layout: page
title: "Q191304: SMS: INVMAC Fails to Complete Inventory"
permalink: /kb/191/Q191304/
---

## Q191304: SMS: INVMAC Fails to Complete Inventory

{% raw %}

	Article: Q191304
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During inventory on a Macintosh computer running System 7.5 without TCP/IP
	installed, you may receive the following error message about 50 percent through
	the inventory process:
	
	  The application InvMac has unexpectedly quit, because an error of type one
	  occurred. You should save your work in other open applications and restart
	  the computer.
	
	CAUSE
	=====
	
	INVMAC fails to detect network configuration for clients that may be using only
	AppleTalk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms inv mac invmac.exe
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
