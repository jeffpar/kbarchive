---
layout: page
title: "Q173088: How to Remove and Reinstall the Dial-Up Adapter for MSN"
permalink: kb/173/Q173088/
---

## Q173088: How to Remove and Reinstall the Dial-Up Adapter for MSN

	Article: Q173088
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To connect to MSN, The Microsoft Network, the Dial-Up Adapter must be installed
	and configured correctly for MSN. This article describes how to remove and
	reinstall the Dial-Up Adapter.
	
	MORE INFORMATION
	================
	
	Because the Dial-Up Adapter is automatically installed by MSN Setup, you may
	need to remove and reinstall the Dial-Up Adapter to verify that it is configured
	correctly for MSN. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click Dial-Up Adapter, and then click Remove.
	
	4. Click OK. When you are prompted to restart the computer, click Yes.
	
	5. In the Control Panel window, double-click Network.
	
	6. On the Configuration tab, click Add.
	
	7. In the Select Network Component Type dialog box, click Adapter, and then
	  click Add.
	
	8. In the Manufacturers box, click Microsoft.
	
	9. In the Network Adapters box, click Dial-Up Adapter, and then click OK.
	
	10. In the Select Network Component Type dialog box, click Protocol, and then
	  click Add.
	
	11. In the Manufacturers box, click Microsoft.
	
	12. In the Network Adapters box, click TCP/IP, and then click OK.
	
	13. On the Configuration tab, double-click Dial-Up Adapter.
	
	14. On the Bindings tab, make sure "TCP/IP -> Dial-Up Adapter" is the only
	  protocol selected. If any other protocol is selected, click the check box to
	  the left of the protocol to clear it.
	
	15. Click OK, and then click OK again.
	
	16. When you are prompted to restart the computer, click Yes.
	
	Additional query words: msnet msnetwork tcpip
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	
