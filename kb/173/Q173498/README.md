---
layout: page
title: "Q173498: Renaming MSN Connections Prevents Access to MSN"
permalink: /kb/173/Q173498/
---

## Q173498: Renaming MSN Connections Prevents Access to MSN

{% raw %}

	Article: Q173498
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you rename a Dial-Up Networking connection that you use to connect to MSN,
	The Microsoft Network, you may be unable to connect to MSN.
	
	CAUSE
	=====
	
	Modifying the names of the connections created by Connection Manager during MSN
	Setup may prevent access to MSN.
	
	RESOLUTION
	==========
	
	Delete all the MSN connections, and then manually reconfigure the MSN connection
	settings. To do so, use the following steps:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all MSN connections are deleted.
	
	3. Close the Dial-Up Networking window.
	
	4. Double-click the MSN icon on the desktop, and then click Settings.
	
	5. On the Dialing tab, next to the Phone Number box, click Phone Book.
	
	6. Click the appropriate access number for your area, and then click OK.
	
	7. On the Dialing tab, next to the Backup Number box, click Phone Book.
	
	8. Click the appropriate backup access number for your area, click OK, and then
	  click OK again.
	
	9. Click the options tab and, click the "Use this service for all dial-up
	  Internet access" check box to select it.
	
	10. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
