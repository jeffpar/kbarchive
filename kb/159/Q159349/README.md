---
layout: page
title: "Q159349: Resume On Ring Not Implemented for PC Card Modems"
permalink: /kb/159/Q159349/
---

## Q159349: Resume On Ring Not Implemented for PC Card Modems

{% raw %}

	Article: Q159349
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a communications program has been configured to automatically answer incoming
	calls and the computer is placed into a Suspended power- management state, the
	computer does not resume when an incoming call arrives.
	
	CAUSE
	=====
	
	This functionality, known as "Resume On Ring," is designed to allow the modem to
	awaken the computer from a suspended state when an incoming call arrives if the
	modem has been configured to automatically answer incoming calls.
	
	The Advanced Power Management features of Windows 95 OEM Service Release 2 (OSR2)
	do not support this functionality.
	
	RESOLUTION
	==========
	
	To work around this issue, do not suspend the computer when the modem is
	configured to automatically answer incoming calls.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The Resume On Ring feature is supported by the PC Card Event WakeUp mechanism
	defined in the ExCA specification. This is an optional mechanism, and it is not
	supported by all PC Card modems.
	
	When a modem port is opened by a program, the modem is powered up in a persistent
	state. When the computer is suspended, the modem is set up for Resume On Ring,
	if it can be, because it is in a persistent-on power state.
	
	
	Additional query words: 95 wake
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
