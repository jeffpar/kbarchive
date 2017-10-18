---
layout: page
title: "Q302723: If No Internet Connection Is Configured In MSN Explorer 6.1, App"
permalink: kb/302/Q302723/
---

## Q302723: If No Internet Connection Is Configured In MSN Explorer 6.1, App

	Article: Q302723
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install MSN 6.1 on a computer that does not have an Internet connection--the
	computer does not have any dial-up connections configured and is not connected
	to a Local Area Network (LAN) or to a broadband device. When you see the prompt
	"Do you want MSN Internet Access?", you click "No, I already have Internet
	Access". When you see the prompt "Do you have an MSN Internet Access dial-up
	account?", you click "No.". You may be taken back to the sign-up screen of MSN
	Explorer and a message appears stating "Currently, no one is set up to use MSN
	Explorer on this computer....".
	
	CAUSE
	=====
	
	This is a known issue.
	
	RESOLUTION
	==========
	
	If this issue occurs on a computer that is configured for Internet access,
	re-start MSN Explorer and initiate the sign-up process again. If you are
	unsuccessful, contact your Internet Service Provider (ISP) to ensure that your
	Internet connection is functioning properly.
	
	If you have a working dial-up Internet connection on the computer, and you want
	to use this connection when you sign in to MSN Explorer, set this connection as
	the default connection in Internet Properties.
	
	To set a connection as the default connection in Internet Properties
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Internet Options icon.
	  Note: With Windows Millennium and Windows 2000, you may have to click the
	  Display all control panel options link in the Control Panel labeled to
	  display the Internet Options icon.
	
	3. At the top of the Internet Properties window, click the Connections tab.
	
	4. Do one of the following:
	   - If you want to use a LAN or broadband connection, click "Dial whenever a
	     network connection is not present".
	
	   - If you want to use a dial-up connection, click "Always dial my default
	     connection".
	
	5. Under Dial-up settings, select the dial-up connection you want to use, and
	  then click the Set Default button.
	
	6. At the bottom of the window, click the Apply button, and then click OK.
	
	If you wish to use a LAN or broadband connection, first check with your provider
	to make sure the connection is active and functioning. After confirming that the
	connection is active, do the following:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Internet Options icon.
	  Note: With Windows Millennium and Windows 2000, you may have to click the
	  Display all control panel options link in the Control Panel.
	
	3. At the top of the Internet Properties window, click the Connections tab.
	
	4. Do one of the following:
	   - If you want to use a dial-up connection when the LAN connection is not
	     present, click "Dial whenever a network connection is not present."
	
	   - If you wish to use the network connection at all times, click "Never dial
	     a connection".
	     Note: If you choose this option, and if the LAN connection is not active at
	     the time of sign-up, you may experience the issue described at the
	     beginning of this article.
	     Note: In addition, skip the next step if you chose "Never Dial a
	     Connection".
	
	5. Under Dial-up settings, select the dial-up connection, and then click the Set
	  Default button.
	
	6. Click the Apply button at the bottom of the window, and then click OK.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSNExplorer
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
