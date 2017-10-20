---
layout: page
title: "Q99371: Err Msg: The Name Already Exists on the Network"
permalink: /kb/099/Q99371/
---

## Q99371: Err Msg: The Name Already Exists on the Network

{% raw %}

	Article: Q99371
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed during the user authentication phase of
	the remote login process:
	
	  Error 642: The name already exists on the network.
	
	CAUSE
	=====
	
	This error message is usually generated when both the Remote Access Service
	(RAS) client and server are already connected via a local area network (LAN).
	When you try to log on to the network via RAS, the network discovers that your
	computer name is already registered on the LAN.
	
	RESOLUTION
	==========
	
	There are two ways to work around this error message. The first and recommended
	way is to disconnect your LAN cabling before using RAS. The second is to
	reconfigure the RAS server security access to "This computer only." (You can
	change the security access from the Network option in Control Panel.) Although
	the second method enables you to connect via RAS, it is not recommended because
	you will create multiple paths to the RAS server. This does not ensure network
	session stability.
	
	Additional query words: prodnt err msg errmsg
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
