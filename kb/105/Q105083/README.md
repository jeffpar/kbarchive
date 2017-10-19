---
layout: page
title: "Q105083: Unable to Log in on Windows NT Advanced Server"
permalink: /kb/105/Q105083/
---

## Q105083: Unable to Log in on Windows NT Advanced Server

	Article: Q105083
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Advanced Server may not be able to log in a user if the NetLogon
	service is not running on the system. Although the initial login screen is
	displayed, if you attempt to login, you may receive a message indicating that
	Windows NT Advanced Server was unable to validate the user because the NetLogon
	service is not running or started.
	
	CAUSE
	=====
	
	One of the reasons for the NetLogon service not starting could be due to the
	presence of a duplicate Windows NT Advanced Server computer name on the
	network.
	
	Another cause could be incorrect settings for the Network Interface Card (NIC).
	
	RESOLUTION
	==========
	
	Disconnect the Windows NT Advanced Server computer from the network. It should
	now be possible to successfully log in to Windows NT Advanced Server. Change the
	computer name using the Network icon in the Control Panel.
	
	Other causes may require reinstallation.
	
	Additional query words: adapter prodnt Security
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
