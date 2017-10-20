---
layout: page
title: "Q228597: DHCP Server with Deactivated Scope Sends a DHCPNAK to Clients"
permalink: /kb/228/Q228597/
---

## Q228597: DHCP Server with Deactivated Scope Sends a DHCPNAK to Clients

{% raw %}

	Article: Q228597
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Dynamic Host Configuration Protocol (DHCP) client, it tries to
	renew its lease on an existing IP address for its scope (Requesting state). Or
	in the case of the client never having an address, it will try to obtain a lease
	for an IP address for its scope (Initializing state). In the case where there
	are two or more DHCP servers on the network configured to service this segment,
	and a DHCP server has the scope for this segment disabled, the client may
	receive a negative acknowledgment (DHCPNAK) from the DHCP server with the
	disabled scope. If the client is running Windows NT Server or Workstation, the
	DHCPNAK would cause an event to be logged to the Windows NT System Event log.
	This will also increase network traffic and cause the client to needlessly fall
	back to an Initializing state.
	
	Previous to Windows NT 4.0 Service Pack 4, this behavior was not present. This
	applies to Windows NT 4.0 Service Pack 5 as well.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Administrators find that configuring two DHCP servers for the same scope then
	disabling one is an easy way to provide limited fault tolerance.
	
	When the server with the active scope is unavailable, the DHCP server with the
	deactivated scope will assume the responsibilities for the DHCP clients of that
	scope.
	
	For more information on how to configure DHCP, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q139904 How to Configure Your DHCP Server Scope
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
