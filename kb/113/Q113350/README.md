---
layout: page
title: "Q113350: PowerChute Plus Broadcast Messages Can Cause Problems"
permalink: /kb/113/Q113350/
---

## Q113350: PowerChute Plus Broadcast Messages Can Cause Problems

{% raw %}

	Article: Q113350
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Versions 4.0 and 4.1 of PowerChute Plus for Windows NT (American Power
	Conversion's uninterruptible power supply management utility) sends out
	broadcast messages to alert administrators and users of problems on the
	UPS server. These broadcasts--equivalent to a NET SEND * and normally sent
	to the names listed in ControlPanel->Network->Alerts--can generate enough
	packets to cause problems on large networks.
	
	American Power Conversion is aware of this and has slated a fix for
	inclusion in release 4.2 of PowerChute Plus for Windows NT.
	
	Additional query words: prodnt APC
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
