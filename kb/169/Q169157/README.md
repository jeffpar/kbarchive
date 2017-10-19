---
layout: page
title: "Q169157: Err Msg: Dial-Up Networking Cannot Find the Specified Modem..."
permalink: /kb/169/Q169157/
---

## Q169157: Err Msg: Dial-Up Networking Cannot Find the Specified Modem...

	Article: Q169157
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool dun kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Dial-Up Networking connectoid, or when you click Connect
	within a Dial-Up Networking connectoid, you may receive one of the following
	error messages:
	
	  Dial-Up Networking cannot find the specified modem. Install the modem or
	  select a new modem before you dial.
	
	  The modem is not plugged in or out of service. Connect a modem to your
	  computer and try again.
	
	  The computer is not receiving a response from the modem. Check that the modem
	  is plugged in, and if necessary, turn the modem off, and then turn it back
	  on.
	
	CAUSE
	=====
	
	These error messages can occur if any of the following conditions exists:
	
	- The modem specified in the connectoid is not properly connected to the
	  computer.
	
	- The modem specified in the connectoid is not the modem that is currently
	  connected to the computer.
	
	- The modem specified in the connectoid has been removed from the Modems tool
	  in Control Panel.
	
	RESOLUTION
	==========
	
	To resolve these error messages, confirm that the modem you have specified in
	the connectoid is properly connected to your computer. If the correct modem is
	properly connected to your computer and you are still receiving one of these
	error messages, use the following steps to resolve the issue.
	
	NOTE: The following procedure can result in a loss of settings in the Dial-Up
	Networking connectoid. Before you continue with these steps, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q137868 Changing Modem for DUN Connectoid Restores Default Settings
	
	1. Confirm that the modem you want to use is listed on the General tab in the
	  Modems tool in Control Panel.
	
	2. Click the Start button, point to Programs, point to Accessories, and then
	  click Dial-Up Networking.
	
	3. Use the right mouse button to click the connectoid you are trying to use, and
	  then click Properties.
	
	4. In the Connect Using list, click the modem you are trying to use.
	
	5. Click OK, and then double-click the connectoid.
	
	MORE INFORMATION
	================
	
	When you remove a modem from the Modems tool in Control Panel, the modem is not
	removed from any Dial-Up Networking connectoids that are configured to use that
	modem. After you change a connectoid's modem to a modem that is currently
	installed in the Modems tool, the modem that you removed from the Modems tool no
	longer appears in the connectoid's Connect Using list.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool dun kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
