---
layout: page
title: "Q274642: MSN Explorer Can't Reconnect Over Dialup"
permalink: /kb/274/Q274642/
---

## Q274642: MSN Explorer Can't Reconnect Over Dialup

{% raw %}

	Article: Q274642
	Product(s): The Microsoft Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MSN Explorer ceases to function while dialing or while connected to the
	Internet through a Dialup connection, the user is prompted with an error.
	
	  The port is already open.
	
	CAUSE
	=====
	
	The dialup connection was not terminated when MSN Explorer was previously
	closed.
	
	RESOLUTION
	==========
	
	Manually close the dialup connection, close RNAAPP, and then try to connect
	again.
	
	To manually close the connection
	
	- Double-click the Internet Connection icon (it looks like two computer
	  screens) in the windows system tray (by the clock), and then click
	  Disconnect.
	
	To close RNAAPP
	
	1. Press CTRL+ALT+DELETE.
	  The Close Programs box appears.
	
	2. Select Rnaapp, click End Task, and then try the connection again.
	
	Note: If the error continues, and another modem is selected, switch to the second
	modem.
	
	To change the modem used by MSN Explorer
	
	1. Click Connection Settings.
	
	2. Click Change how to connect to the Internet.
	
	3. Select the second modem.
	
	4. Click OK, and then try to reconnect.
	
	If the error continues, Dial Up Networking may be corrupted.
	
	To reinstall Dial Up Networking
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. Click Dial-Up Adapter, and then click Remove.
	
	3. Click OK; if you are prompted to restart the computer, click No.
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	6. In the Components box, click Communications, and then click Details.
	
	7. Clear the box next to Dial-Up Networking, and then click OK.
	
	8. Click OK, close Control Panel, and then restart the computer.
	
	9. Double-click the MSN icon on the desktop.
	
	10. When you are prompted to install the Connection Manager components, click
	  Yes, and then restart the computer.
	
	If the error continues, remove any extra modem property settings.
	
	To remove extra modem property settings
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Under The following modems are set up on this computer select the correct
	  modem, and then click Properties.
	
	4. Click the Connection tab, and then click Advanced.
	
	5. Under Extra Settings, delete any settings listed.
	
	6. Click OK, click OK again, and then click Close.
	
	7. Restart computer and try connecting again.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
