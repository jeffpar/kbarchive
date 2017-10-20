---
layout: page
title: "Q182227: DNS Server Does Not Check for Delegations Before Forwarding"
permalink: /kb/182/Q182227/
---

## Q182227: DNS Server Does Not Check for Delegations Before Forwarding

{% raw %}

	Article: Q182227
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	DNS server does not check for delegations before forwarding to a forwarder. On a
	primary DNS (DNS-main), if you delegate a subdomain to another DNS (DNS-sub),
	DNS name resolution works fine. However, if you set up DNS-main to use a
	forwarder (non-slave), the resolution request is sent to the Forwarder first and
	may fail.
	
	CAUSE
	=====
	
	Checking for delegated domains before sending a name resolution request to the
	forwarder is new functionality added to the DNS.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
