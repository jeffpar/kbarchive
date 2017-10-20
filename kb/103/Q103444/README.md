---
layout: page
title: "Q103444: RAS Server 64 Port Limitation Information"
permalink: /kb/103/Q103444/
---

## Q103444: RAS Server 64 Port Limitation Information

{% raw %}

	Article: Q103444
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Remote Access Service (RAS) for Windows NT Advanced Server does NOT
	prevent administrators from configuring more than 64 dial-in ports.
	However, the system will not support more than 64 simultaneous
	incoming connections. Attempting to do this results in unpredictable
	behavior. Microsoft does not support any attempt to exceed 64
	simultaneous configured ports.
	
	MORE INFORMATION
	================
	
	RAS requires that a NetBIOS LANA number be assigned for each dial-in and each
	dial-out port. If a port is configured for both, it requires two LANAs. Port
	types are assigned in the Network Control Panel application RAS Configuration
	screen.
	
	  Port type                # of LANAs
	  -----------------------------------
	  Dial-in                      1
	  Dial-out                     1
	  Dial-in and Dial-out         2
	
	Windows NT has a fixed limit of 72 total NetBIOS LANAs. You should configure all
	your RAS ports to consume less than 64 LANAs (see the above chart). The
	remaining eight LANAs are generally set aside for use with other network
	protocol bindings.
	
	This explains why when you look at the NetBIOS configuration in the Network
	Control Panel application, you will sometimes see RAS taking up more LANAs than
	there are COM ports installed. For example, if you have a Windows NT Advanced
	Server with two internal COM ports and you have configured both ports for
	dial-in and one port for both dial-in and dial-out, when you look at the NetBIOS
	configuration, you will see three LANAs assigned to RAS bindings.
	
	For more information, query on the following word in the Microsoft Knowledge
	Base:
	
	  lana
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
