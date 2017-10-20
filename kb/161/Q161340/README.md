---
layout: page
title: "Q161340: RAS Error 692 with IBM MWave Modem and Logon Using DUN"
permalink: /kb/161/Q161340/
---

## Q161340: RAS Error 692 with IBM MWave Modem and Logon Using DUN

{% raw %}

	Article: Q161340
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbui kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log onto a workstation configured with an IBM MWave Modem, and are
	using the Logon Using Dial-up Networking feature in Windows NT 4.0, you receive
	the following error message:
	
	  Error 692: Hardware failure in port or attached device.
	
	CAUSE
	=====
	
	The IBM MWave Modem is not initialized until the Mwmwin.exe file is executed.
	This file is executed when you log on to Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Obtain updated MWave drivers from IBM.
	
	As a workaround, log on to Windows NT using a local account, then log off. This
	will allow Windows NT to correctly use the Logon Using Dial-Up Networking
	option.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: dun
	
	======================================================================
	Keywords          : kb3rdparty kbui kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
