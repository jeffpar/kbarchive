---
layout: page
title: "Q170518: DNS Admin Fails When Managing Large Number of Zones"
permalink: /kb/170/Q170518/
---

## Q170518: DNS Admin Fails When Managing Large Number of Zones

{% raw %}

	Article: Q170518
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Domain Name Service (DNS) Admin tool is used to configure DNS for a
	large number of DNS zones (over 1,000), you may experience one of the
	following:
	
	- The following Dr. Watson error:
	
	  The application, dnsadmin.exe/DNSadmin.dpg, generated an application error.
	  It occurred on MM/DD. The exception generated was C00000005 at address
	  XXXXXXXX (RTL destroy heap).
	
	  -or-
	
	- DNS Manager may hang or stop responding. When you select a zone name and then
	  click Properties from the context menu the Properties dialog box does not
	  open and the cursor remains an hourglass. You may also notice that the
	  available system memory steadily decreases.
	
	  A Performance Monitor log of your system shows that the private bytes counter,
	  associated with the Dnsadmin.exe process, increases dramatically as available
	  system memory dramatically decreases.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	click the following article number to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: prodnt gui ui limit limitation ntdns lock spin freeze loss loose lose resources
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
