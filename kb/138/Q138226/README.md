---
layout: page
title: "Q138226: Windows NT 3.51 RAS Server Ignores Newly Added Serial Ports"
permalink: /kb/138/Q138226/
---

## Q138226: Windows NT 3.51 RAS Server Ignores Newly Added Serial Ports

	Article: Q138226
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you allow Remote Access Service (RAS) clients to connect to the RAS server
	after you add more physical serial ports and configure the RAS server service to
	use these serial ports, the number of clients that can connect is still limited
	to the original number of RAS ports and the following message appears in
	RASADMIN for the added ports:
	
	  Line Non-operational
	
	This symptom occurs on a computer running RAS under Windows NT Server with only
	the TCP/IP and NWLink protocol installed.
	
	
	CAUSE
	=====
	
	This problem occurs because the number of RAS serial ports in the registry is
	not being updated when you add RAS serial ports in Control Panel.
	
	WORKAROUND
	==========
	
	To work around this problem, in Control Panel Network applet on the Windows NT
	RAS server, install NetBEUI, remove and reinstall the Digiboard driver and RAS.
	
	NOTE: When you install the NetBEUI protocol, the registry entries for the modem
	ports are updated properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
