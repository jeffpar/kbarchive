---
layout: page
title: "Q148939: DHCP Server Creates Unnecessary Lease"
permalink: /kb/148/Q148939/
---

## Q148939: DHCP Server Creates Unnecessary Lease

{% raw %}

	Article: Q148939
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Dynamic Host Configuration Protocol (DHCP) server makes an address offer
	to a client and the client chooses an address from a different DHCP server, the
	server that was not chosen keeps a DHCP lease for the offered address for 15
	minutes.
	
	CAUSE
	=====
	
	When multiple DHCP servers put out address offers to a client, the server whose
	offer is not accepted goes through a cleanup procedure. This procedure should
	remove the address which was temporarily set aside from the previous offer.
	However, this is not the case. The cleanup procedure is not clearing the
	temporarily assigned lease out of the database.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	The temporary lease will last for 15 minutes. If you have extra leases you can
	just let the lease expire. Some companies are very short on available leases and
	cannot afford this, so a correction to DHCP has been created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
