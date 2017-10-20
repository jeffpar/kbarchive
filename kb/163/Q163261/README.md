---
layout: page
title: "Q163261: DEC ALPHA WinNT 4.0 Servers w/ SP2 Fail to Lease DHCP Addresses"
permalink: /kb/163/Q163261/
---

## Q163261: DEC ALPHA WinNT 4.0 Servers w/ SP2 Fail to Lease DHCP Addresses

{% raw %}

	Article: Q163261
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DHCP client may fail to obtain a DHCP lease from Digital Equipment Corporation
	DEC Alpha computer running Windows NT 4.0 with Service Pack 2 (SP2) installed.
	
	On the Windows 95 client, you will get the following error:
	
	  IP CONFIGURATION: ERROR:
	  DHCP Server Unavailable: Renewing Adapter.
	
	On the Windows NT 4.0 workstation, you will get the following error:
	
	  The DHCP could not obtain an IP address.
	
	The Windows NT 4.0 workstation event log will have one of the following entries:
	
	  Event ID: 1007
	  Source: DHCP
	  Description: DHCP failed to obtain a lease for the card with network address
	  <adapter address>.
	
	-or-
	
	  Event ID: 1003
	  Source: DHCP
	  Description: DHCP failed to obtain a lease for the card with network address
	  <adapter address>.
	
	CAUSE
	=====
	
	DHCP server failed to correctly process the incoming request.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt DHCP Service Pack 2 3
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
