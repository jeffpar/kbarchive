---
layout: page
title: "Q142599: Cannot Establish Network Connection"
permalink: /kb/142/Q142599/
---

## Q142599: Cannot Establish Network Connection

	Article: Q142599
	Product(s): The Microsoft Network
	Version(s): 2.5,2.6,5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.6, 5.0, 5.1, 5.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to establish a connection to the Internet using MSN, The Microsoft
	Network, as your Internet service provider, you may receive the following error
	message:
	
	  Cannot establish network connection.
	
	CAUSE
	=====
	
	This error message may appear when the TCP/IP settings or files might be
	incorrect or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall Dial-Up Networking:
	---------------------------------------------------------------
	
	Note: Be certain you have your Windows CD before proceeding with these
	instructions.
	
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Right-click any MSN connection (may be labeled MSN or MSN Backup), and then
	  click Delete. Repeat this step until all MSN connections are deleted.
	
	3. Close the Dial-Up Networking window.
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click Network.
	
	6. On the Configuration tab, in the The following network components are
	  installed box, remove the components named
	
	   - Client for Microsoft Networks
	
	   - Microsoft Family Logon
	
	   - Dial Up Adapter
	
	   - TCP/IP for Dial Up Adapter
	
	  Click each component and then click Remove.
	
	7. Click OK. If you are prompted to restart the computer, click No.
	
	8. Double-click Add/Remove Programs.
	
	9. On the Windows Setup tab, click Communications, and then click Details.
	
	10. Click the Dial-Up Networking check box to clear it.
	
	11. Click OK until you return to Control Panel.
	
	12. Close Control Panel, and then restart the computer.
	
	13. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	14. Click Access Numbers, and then click OK.
	
	15. When you are prompted to configure your system to access the Internet, click
	  Yes, and then click OK. Follow the instructions on the screen. You may be
	  prompted for your Windows CD-ROM or disks.
	
	16. When you are prompted to restart the computer, click Yes.
	
	Additional query words: msn 1.30 2.00 2.50 kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN520 kbMSN510 kbMSN500 kbMSN260 kbMSN250
	Version           : :2.5,2.6,5.0,5.1,5.2
	Issue type        : kbprb
	
	=============================================================================
	
