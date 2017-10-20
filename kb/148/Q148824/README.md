---
layout: page
title: "Q148824: Cannot Configure Dial-Up Networking with MSN"
permalink: /kb/148/Q148824/
---

## Q148824: Cannot Configure Dial-Up Networking with MSN

{% raw %}

	Article: Q148824
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install MSN, The Microsoft Network, you may receive the following
	error message when you attempt to connect to MSN:
	
	  This computer is not set up for Dial-Up Networking. Would you like to do this
	  now?
	
	If you click Yes and then restart your computer, you are still unable to connect
	to MSN. When you attempt to verify the access numbers, you receive the same
	error message.
	
	CAUSE
	=====
	
	You may have LANtastic or Banyan VINES networking components installed on your
	computer. These components can prevent both the Dial-Up Adapter and the TCP/IP
	protocol from being installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall Dial-Up Networking. To do so, use
	the following steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all MSN connections are deleted.
	
	3. Close the Dial-Up Networking window.
	
	4. Click Start, point to Find, and then click Files or Folders.
	
	5. In the Named box, type "pppmac.vxd" (without the quotation marks), and then
	  click Find Now.
	
	6. In the list of found files, right-click the Pppmac.vxd file, and then click
	  Delete.
	
	7. Repeat steps 5-6 to delete the following files:
	   - Splitter.vxd
	
	   - Wsock.vxd
	
	   - Winsock.dll
	
	8. Close the Find: Files Named Winsock.dll window.
	
	9. Click Start, point to Settings, and then click Control Panel.
	
	10. Double-click Add/Remove Programs.
	
	11. On the Windows Setup tab, click Communications, and then click Details.
	
	12. Click the Dial-Up Networking check box to clear it.
	
	13. Click OK until you return to Control Panel.
	
	14. If LANtastic or Banyan VINES networking components are installed on your
	  computer, refer to your network administrator for instructions about how to
	  remove these components.
	
	15. Close Control Panel, and then restart the computer.
	
	Add the Dial-Up Adapter and the Transport Control Protocol/Internet Protocol
	(TCP/IP) to the network configuration. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click Add.
	
	4. In the Select Network Component Type dialog box, click Adapter, and then
	  click Add.
	
	5. In the Manufacturers box, click Microsoft.
	
	6. In the Network Adapters box, click Dial-Up Adapter, and then click OK.
	
	7. In the Select Network Component Type dialog box, click Protocol, and then
	  click Add.
	
	8. In the Manufacturers box, click Microsoft.
	
	9. In the Network Adapters box, click TCP/IP, and then click OK.
	
	10. When you are prompted to restart your computer, click Yes.
	
	11. If necessary, refer to your network administrator for instructions about how
	  to add the LANtastic or Banyan VINES networking components to your
	  computer.
	
	  NOTE: If you are using Banyan VINES, make sure you are using the most recent
	  drivers. Older drivers for Banyan VINES are not compatible with other
	  network protocols.
	
	Additional query words: msn dun
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
