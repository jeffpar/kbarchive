---
layout: page
title: "Q194141: Cannot Connect to MSN After You Install Windows"
permalink: /kb/194/Q194141/
---

## Q194141: Cannot Connect to MSN After You Install Windows

{% raw %}

	Article: Q194141
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, after you install
	Microsoft Windows, you may receive connection errors. If you do connect to MSN,
	you may be unable to view Web sites or receive e-mail messages.
	
	CAUSE
	=====
	
	This behavior can occur if two Transport Control Protocol/Internet Protocol
	(TCP/IP) stacks are bound to the same Dial-Up adapter.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove one of the TCP/IP protocol stacks. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click TCP/IP, and then click Remove.
	
	  NOTE: If more than one network adapter is installed in your computer, the
	  TCP/IP protocol is listed with each adapter. For example, if Dial-Up
	  Networking is installed, "TCP/IP->Dial-Up Adapter" is listed.
	
	4. Click OK. When you are prompted to restart the computer, click Yes.
	
	If you continue to experience connection problems, remove and reinstall TCP/IP.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click TCP/IP, and then click Remove. Repeat this
	  step for each instance of TCP/IP listed on the Configuration tab, and then
	  proceed to step 4.
	
	4. Click OK. When you are prompted to restart the computer, click Yes.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click Network.
	
	7. Click Add, click Protocol, and then click Add.
	
	8. In the Manufacturers box, click Microsoft.
	
	9. In the Network Protocols box, click TCP/IP.
	
	10. Click OK. When you are prompted to restart the computer, click Yes.
	
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
