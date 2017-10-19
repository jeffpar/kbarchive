---
layout: page
title: "Q173644: Err Msg: Error 645 Received When Connecting to MSN"
permalink: /kb/173/Q173644/
---

## Q173644: Err Msg: Error 645 Received When Connecting to MSN

	Article: Q173644
	Product(s): The Microsoft Network
	Version(s): 2.5,2.6,5.0,5.1,5.2,5.3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.6, 5.0, 5.1, 5.2, 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, you may receive the following error
	message:
	
	  Error 645.
	
	Or, in Windows 98 you may receive this message:
	
	  Error 645 Dial-Up Networking could not complete the connection to the
	  server.
	  Check your configuration and try the connection again.
	
	Note: The "Error 645" message can also occur with other Internet Service
	Providers (ISPs), and is not limited to MSN.
	
	CAUSE
	=====
	
	This behavior can occur if Dial-Up Adapter components are damaged or missing.
	
	RESOLUTION
	==========
	
	Remove and reinstall the Dial-Up Adapter and Dial-Up Networking (DUN).
	
	To remove the Dial-Up Adapter and Dial-Up Networking:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, click Dial-Up Adapter, and then click Remove.
	
	3. Click OK, and then when you are prompted to restart your computer, click No.
	
	4. In Control Panel double-click Add/Remove Programs, on the Windows Setup tab
	  click Communications, and then click Details.
	
	5. Clear the Dial-Up Networking check box and then click OK until you return to
	  the Control Panel.
	
	6. Close Control Panel, and then restart the computer.
	
	To reinstall the Dial-Up Adapter and Dial-Up Networking using MSN software:
	
	1. Double-click the MSN Internet Access icon on the desktop.
	
	2. When the Connection Manager dialog box opens, click Yes, and then click OK.
	
	3. Follow the instructions on the screen. You may be prompted for your Windows
	  disks or CD-ROM.
	
	4. When you are prompted to restart the computer, click Yes.
	
	To reinstall the Dial-Up Adapter and Dial-Up Networking without using MSN
	software:
	
	Note: If you are not using MSN software, remember to write down your MSN access
	phone number before you remove "your Dial-up Connection".
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, on the Windows Setup tab click
	  Communications, and then click Details.
	
	3. Select the Dial-Up Networking check box and then click OK until you return to
	  the Control Panel.
	
	4. On your desktop double-click My Computer, double-click Dial-up Networking,
	  and then double-click Make New Connection.
	
	5. Type a name for your connection, select your modem or network device, and
	  than click Next.
	
	6. Type your MSN access number, select your country, and then click Next.
	
	7. Click Finish.
	
	8. To create a short-cut for this connection, hold down the Control key while
	  you drag your new Dial-up Networking connection Icon and drop it on your
	  desk-top.
	
	MORE INFORMATION
	================
	
	For more information about manually configuring the Transport Control
	Protocol/Internet Protocol (TCP/IP), see the following article in the Microsoft
	Knowledge Base:
	
	  Q172552 How to Configure TCP/IP for The Microsoft Network
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. 2.50 DUN kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN520 kbMSN530 kbMSN510 kbMSN500 kbMSN260 kbMSN250
	Version           : :2.5,2.6,5.0,5.1,5.2,5.3
	Issue type        : kbprb
	
	=============================================================================
	
