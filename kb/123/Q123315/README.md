---
layout: page
title: "Q123315: Using MS Loopback Adapter Driver for Network Problems"
permalink: /kb/123/Q123315/
---

## Q123315: Using MS Loopback Adapter Driver for Network Problems

{% raw %}

	Article: Q123315
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51 4.00
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, some hardware-related network problems do not exhibit easily-
	recognizable symptoms. Some common symptoms that may indicate network problems
	are:
	
	- The system hangs during NIC setup or detection when installing Windows NT.
	
	- The system hangs when the setup process tries to allow the Server or
	  Workstation to join an existing domain.
	
	- The following error message appears:
	
	  Cannot find Primary DC for <your_domain_name>. You may administer this
	  domain, but certain domain-wide operations will be disabled.
	
	  NOTE: This error message may also appear when you use Server Manager and the
	  NetLogon service is not started.
	
	CAUSE
	=====
	
	Isolating configuration errors from hardware errors is often the easiest way to
	pinpoint the source of the problems listed above. These problems may originate
	from the network adapter or the network adapter driver not being compatible or
	being defective.
	
	WORKAROUND
	==========
	
	The following procedure allows you to detect a problem with the network adapter
	or the network adapter driver and work around the network adapter installation
	problems during Windows NT Setup:
	
	1. In the Network Settings dialog box, remove all network adapters from the
	  Installed Adapter Cards list.
	
	2. Choose Add Adapter and select the MS Loopback Adapter. Choose Continue.
	
	3. The only configuration choice required for the MS Loopback driver is Frame
	  Type. Valid frame types are:
	
	  802.3 (Ethernet)
	  802.5 (Token Ring)
	  FDDI
	
	  NOTE: Choice of frame type is not critical, thus selecting 802.3 should be
	  appropriate. If the problem was caused by a network adapter hardware conflict
	  or driver problem, the Setup program should now continue. Similarly, the MS
	  Loopback adapter can be used to isolate configuration problems from hardware
	  problems on existing Windows NT installations.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
