---
layout: page
title: "Q303778: Setting Idle Times With MSN Versions 5.3, 5.4, And MSN Explorer"
permalink: kb/303/Q303778/
---

## Q303778: Setting Idle Times With MSN Versions 5.3, 5.4, And MSN Explorer

	Article: Q303778
	Product(s): The Microsoft Network
	Version(s): 5.3,5.4,6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 5.3, 5.4, 6.0, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MSN versions 5.1 and earlier include a setting for configuring the allowable
	amount idle time before an Internet connection is disconnected. With versions
	5.3, 5.4, 6.0 and 6.1, no such dialer setting exists. Users of these versions
	can change a value in the Windows registry to increase the amount of idle time.
	
	RESOLUTION
	==========
	
	To configure idle time for Windows Millenium Edition
	
	1. Click Start, click Run, and then type regedit in the box.
	
	2. Click the HKEY_Current_User key.
	
	3. Click the RemoteAccess key.
	
	4. Click the Profile Key.
	
	5. Click MSN Internet Access.
	
	6. In the right column, double-click to change the enumerator for
	  DisconnectIdleTime from "10" to a larger value, according to the amount of
	  idle time you want.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN530 kbMSN540
	Version           : :5.3,5.4,6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	
