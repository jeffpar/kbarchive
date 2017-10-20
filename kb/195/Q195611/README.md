---
layout: page
title: "Q195611: DNS Client Does Not Try All Servers in DNS Service List"
permalink: /kb/195/Q195611/
---

## Q195611: DNS Client Does Not Try All Servers in DNS Service List

{% raw %}

	Article: Q195611
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a DNS query is made and the query returns an error such as server failure
	(rcode 2), the other servers in the list were not queried. The failure was
	passed back to the requester even though querying another server in the list
	could successfully complete the query.
	
	CAUSE
	=====
	
	The only time secondary servers were queried, was when no response is received
	from the primary server in the server list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The DNS query algorithm has been modified to attempt other servers in the server
	list if an error is received from a server that may be resolved by trying
	another server in the list. The new algorithm will retry servers until:
	
	- The name query is answered successfully.
	
	- An authoritative answer is received from a server that the requested host
	  does not exists (rcode 3).
	
	- The server list is exhausted.
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
