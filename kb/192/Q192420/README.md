---
layout: page
title: "Q192420: Err Msg: Modem Not Responding (Error 650)"
permalink: /kb/192/Q192420/
---

## Q192420: Err Msg: Modem Not Responding (Error 650)

	Article: Q192420
	Product(s): The Microsoft Network
	Version(s): 2.52,2.6,5.0,5.1,5.2,5.3
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.52, 2.6, 5.0, 5.1, 5.2, 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Modem not responding (Error 650). For troubleshooting information, click
	  Help.
	
	CAUSE
	=====
	
	This behavior can occur if the program called RNAAPP is leaving the modem port
	open, the wrong modem is selected in the connection settings, the Dial Up
	Networking program is corrupted, or there are extra settings in the modem
	causing the modem to not respond.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	End task on RNAAPP then try the connection again:
	
	1. On the keyboard, press the keys CTRL + ALT + DELETE at the same time to view
	  the Close Programs dialog box.
	
	2. Click Rnaapp, click End Task and try the connection again.
	
	If the error continues, and there is another modem is selected, switch to second
	modem.
	
	1. Right-click the MSN Internet Access icon on the desktop and click Connection
	  Settings.
	
	2. On the General tab, check the modem being used to connect under Connect Using
	  and select another modem from the listing if another is displayed.
	
	3. Click OK and try the connection again.
	
	If the error continues, reinstall the Dial Up Networking, which may be
	corrupted.
	
	1. Right-click the Network Neighborhood icon on the desktop, and then click
	  Properties.
	
	2. Click Dial-Up Adapter, and then click Remove.
	
	3. Click OK and if you are prompted to restart the computer, click No.
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	6. In the Components box, click Communications, and then click Details.
	
	7. Click to clear the Dial-Up Networking check box, and then click OK.
	
	8. Click OK, close Control Panel, and then restart the computer.
	
	9. Double-click the MSN icon on the desktop. When you are prompted to install
	  the Connection Manager components, click Yes, and then restart the computer.
	
	If the error continues, remove any extra modem property settings.
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Modems.
	
	3. Under The following modems are set up on this computer select the correct
	  modem and click Properties.
	
	4. Click the Connection tab, and then click Advanced.
	
	5. In the Extra Settings field delete any settings.
	
	6. Click OK, click OK, and then click Close.
	
	7. Restart computer and try connecting again.
	
	
	MORE INFORMATION
	================
	
	If this behavior continues to occur, the issue may be in the configuration or
	condition of the modem. Consult the computer or modem manufacturer for more
	information on correctly configuring it.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. dun kbimu
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN520 kbMSN530 kbMSN510 kbMSN500 kbMSN252 kbMSN260
	Version           : :2.52,2.6,5.0,5.1,5.2,5.3
	Issue type        : kbprb
	
	=============================================================================
	
