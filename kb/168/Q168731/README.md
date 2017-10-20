---
layout: page
title: "Q168731: No RAS-Capable Devices to Add in Remote Access Setup"
permalink: /kb/168/Q168731/
---

## Q168731: No RAS-Capable Devices to Add in Remote Access Setup

{% raw %}

	Article: Q168731
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork dun kbDialUp
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Remote Access Setup, the following error message may be
	displayed:
	
	  There are no RAS capable devices to add. Do you want to invoke the Modem
	  installer to enable you to add a modem?
	
	When you add a modem, the Add RAS Device dialog box appears, but you are unable
	to select a device.
	
	CAUSE
	=====
	
	There are no Telephony service providers installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click Telephony.
	
	2. Click the Telephony Drivers tab.
	
	3. Verify that there is a service provider installed. Windows NT installs the
	  Unimodem service provider by default.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork dun kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
