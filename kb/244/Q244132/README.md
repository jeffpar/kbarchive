---
layout: page
title: "Q244132: DNS Server Logs Event 453 or 7053 (Sendto Function Failed)"
permalink: /kb/244/Q244132/
---

## Q244132: DNS Server Logs Event 453 or 7053 (Sendto Function Failed)

{% raw %}

	Article: Q244132
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbbpqfe1a
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a Microsoft DNS-based server from Windows NT 4.0 Service Pack
	3 to Service Pack 4, 5, or 6, the System event log may contain one of the
	following stop messages:
	
	  Event ID: 453
	  DNS Server sendto () function failed. The data is in error.
	
	  -or-
	
	  Event ID: 7053
	  DNS Server sendto () function failed. The data is in error.
	
	CAUSE
	=====
	
	This problem occurs because DNS encounters a referral to an invalid address for
	a name server. The referral resource record lists the IP address of the name
	server as 0.0.0.0. DNS cannot send a query to an invalid address and logs the
	error against the sendto function.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size      File name   Platform
	  --------------------------------------------------
	  11/22/99   12:50p   178,448   Dns.exe     Intel
	  11/22/99   12:40p   299,280   Dns.exe     Alpha
	
	
	
	NOTE: Before applying this hotfix replace the cache.dns:
	
	1. Stop DNS service at c:\<system root>\system32\DNS.
	
	2. Rename the cache.dns to cache.old.
	
	3. Copy the cache.dns from the Sample folder to the DNS folder.
	
	4. Restart the DNS service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: ns rr
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbbpqfe1a 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
