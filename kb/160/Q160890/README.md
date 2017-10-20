---
layout: page
title: "Q160890: Errors in HyperTerminal with No Service Provider Installed"
permalink: /kb/160/Q160890/
---

## Q160890: Errors in HyperTerminal with No Service Provider Installed

{% raw %}

	Article: Q160890
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start HyperTerminal from the Start menu, Windows NT may respond in any
	of the following ways:
	
	- The first time you start HyperTerminal you may see several different screens
	  prompting you for your area code and other information about features such as
	  call waiting and numbers required to dial outside lines.
	
	- You may be prompted with a Connect To screen.
	
	- You may receive the following message:
	
	     You need to install a modem before you can make connection. Would
	     you like to do this now?
	
	  Clicking Yes starts the Install New Modem Wizard, even though a modem is
	  already installed.
	
	CAUSE
	=====
	
	These behaviors can occur when there are no TAPI service providers installed.
	
	RESOLUTION
	==========
	
	To install a service provider, follow these steps:
	
	1. In Control Panel, double-click Telephony.
	
	2. Click the Telephony Drivers tab.
	
	3. Click Add.
	
	4. Click Unimodem Service Provider, and then click Add.
	
	5. Click Close.
	
	The Telephony Drivers tab should now display the following installed telephony
	drivers:
	
	- TAPI Kernel-Mode Service Provider
	
	- Unimodem Service Provider
	
	MORE INFORMATION
	================
	
	HyperTerminal uses TAPI to obtain a list of available modems. If there are no
	TAPI service providers installed, no modems are returned by TAPI. If there are
	no available modems, the Install New Modem Wizard is started.
	
	Additional query words: prodnt RAS
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
