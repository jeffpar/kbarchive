---
layout: page
title: "Q172552: How to Configure TCP/IP for The Microsoft Network"
permalink: kb/172/Q172552/
---

## Q172552: How to Configure TCP/IP for The Microsoft Network

	Article: Q172552
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,5.0,5.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Transmission Control Protocol/Internet Protocol (TCP/IP) is the network protocol
	used by MSN, The Microsoft Network. This article describes how to configure
	TCP/IP for MSN.
	
	MORE INFORMATION
	================
	
	To configure TCP/IP for MSN, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click either TCP/IP (if you do not have a network
	  adapter) or "TCP/IP -> Dial-Up Adapter" (if you do have a network
	  adapter), and then click Properties.
	
	4. On the IP Address tab, click Obtain An IP Address Automatically.
	
	5. On the DNS Configuration tab, click Disable DNS.
	
	6. On the WINS Configuration tab, click Disable WINS Resolution.
	
	7. On the Gateway tab, make sure the Installed Gateways box is empty. If any
	  gateways are listed in this box, click a gateway and then click Remove.
	  Repeat this step until the Installed Gateways box is empty.
	
	8. On the Bindings tab, make sure no network components are selected. If any
	  network component is selected, click the check box to the left of the
	  component to clear it. If you are prompted to choose a driver to bind with,
	  click No.
	
	9. Click OK. If you are prompted to restart the computer, click Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbMSNSearch kbMSN510 kbMSN500 kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5,5.0,5.1
	Issue type        : kbhowto
	
	=============================================================================
	
