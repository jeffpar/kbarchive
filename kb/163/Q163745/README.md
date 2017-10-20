---
layout: page
title: "Q163745: Explanation of DNS Notify List &quot;Secondary Notification&quot; Behavior"
permalink: /kb/163/Q163745/
---

## Q163745: Explanation of DNS Notify List &quot;Secondary Notification&quot; Behavior

{% raw %}

	Article: Q163745
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Primary Domain Name Service (DNS) Servers do not send
	change notification messages to Secondary DNS Servers that are included on the
	Primary's Notify List until selecting the menu option "DNS/Update Server Data
	Files".
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT DNS Server allows the Administrator to specify (on the
	Primary DNS Server) any Secondary DNS Servers that should be notified
	immediately of changes to the Zone file. When Zone changes occur, the Primary
	name server sends DNS change notification messages to all Secondary name servers
	on the list. When notified, the Secondary name server can query the SOA record
	on the Primary immediately, without waiting for the Refresh Interval to expire.
	
	The notification process does not occur until the "DNS/Update Server Data Files"
	menu item is selected. Since there is no Incremental Zone transfer capability,
	when a Zone Transfer is triggered, the entire Zone file is transferred - not
	just changes made to the zone file.
	
	Normally, the Administrator will make several changes in a single administrative
	session. If the Secondary DNS Servers were notified after every change, there
	would be a continuous stream of Zone transfers during a single session,
	generating unnecessary network traffic. Waiting for the Administrator to trigger
	the process by selecting "DNS/Update Server Data Files" prevents continuous Zone
	transfers.
	
	Additional query words: dnsmgr
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
