---
layout: page
title: "Q173506: Remote Server Disconnect"
permalink: /kb/173/Q173506/
---

## Q173506: Remote Server Disconnect

	Article: Q173506
	Product(s): The Microsoft Network
	Version(s): 1.0,1.05,1.2,1.3,2.0,2.5,2.51,2.52,2.6,5.0,5.1,5.2,5.3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5, 2.51, 2.52, 2.6, 5.0, 5.1, 5.2, 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, using the Internet
	And MSN service type, you may receive the following error message:
	
	  Remote Server Disconnect
	
	CAUSE
	=====
	
	The properties for the MSN Dial-Up Networking connection may be incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, you have to manually configure the MSN Dial-Up Networking
	connection properties. To do so, use the following steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Right-click The Microsoft Network, click Properties, and then click Server
	  Type.
	
	3. Under Advanced Options, click the Enable Software Compression check box to
	  clear it.
	
	4. Under Allowed Network Protocols, click the TCP/IP check box to select it. If
	  the NetBEUI or IPX/SPX Compatible check boxes are selected, click each of
	  these check boxes to clear them.
	
	5. Click TCP/IP Settings, click Server Assigned IP Address, and then click
	  Server Assigned Name Server Addresses.
	
	6. Click the Use IP Header Compression check box to clear it, and then click OK
	  until you return to Windows.
	
	7. Close the Dial-Up Networking window, and then restart the computer.
	
	MORE INFORMATION
	================
	
	For more information about Remote Server Disconnect error messages, see the
	following article in the Microsoft Knowledge Base:
	
	  Q156656<A0>"Remote Server Disconnect" Attempting to Connect to MSN
	
	Additional query words: msnconnect 1.00 2.00 2.50 2.60 kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN520 kbMSN530 kbMSN510 kbMSN500 kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN105 kbMSN250 kbMSN120
	Version           : :1.0,1.05,1.2,1.3,2.0,2.5,2.51,2.52,2.6,5.0,5.1,5.2,5.3
	Issue type        : kbprb
	
	=============================================================================
	
