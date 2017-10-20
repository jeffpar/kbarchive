---
layout: page
title: "Q266204: Cannot Browse a Different Windows NT 4.0 Domain Across a Firewal"
permalink: /kb/266/Q266204/
---

## Q266204: Cannot Browse a Different Windows NT 4.0 Domain Across a Firewal

{% raw %}

	Article: Q266204
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a firewall is used to separate two Windows NT 4.0 domains that have no
	trust relationship established, and each domain has its own Windows Internet
	Name Server (WINS) server that does not replicate to the WINS server in the
	other domain, you cannot browse for resources in the other domain by NetBIOS
	name.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The Domain Master Browser [1Bh] entry for the opposite domain is missing or
	  incorrect in WINS or in the LMHOSTS file (if one is in use).
	
	- The firewall is using a network address translator (NAT), and NAT is
	  improperly configured.
	
	- The firewall is filtering or has disabled the required ports.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform the following actions:
	
	1. Make sure that WINS or LMHOSTS is using the correct Domain Master Browser
	  [1Bh] entry for the opposite domain.
	
	2. Make sure that if the firewall is using network address translation, the NAT
	  has the correct internal/external address mapping/translation configured.
	
	3. On all firewalls between the domains, make sure that UDP ports 137 (NBNS)
	  (used by NBT NS Query for [1bh]) and 138 (NBDS) (used by the browser service)
	  and TCP port 139 (NBSS) (used by NBT for session setup and SMB for browse
	  list transfer) are not filtered or disabled.
	
	4. Make sure there are no other firewall services running.
	
	MORE INFORMATION
	================
	
	For more information, refer to the following articles:
	
	  Q172227 Network Address Translators Can Block Netlogon Traffic
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
