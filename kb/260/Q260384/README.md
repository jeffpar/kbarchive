---
layout: page
title: "Q260384: Site Server Express Fails on WHOIS Resolution"
permalink: /kb/260/Q260384/
---

## Q260384: Site Server Express Fails on WHOIS Resolution

{% raw %}

	Article: Q260384
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Site Server Express, versions 2.0, 3.0, on platform(s):
	   - Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WHOIS lookups in Microsoft Site Server Express 2.0 or Microsoft Site Server
	Express 3.0 Usage Import may fail after November 30, 1999.
	
	When you perform WHOIS queries, you may receive one of the following errors:
	
	  Run-time error '5':
	  Invalid procedure call or argument
	
	-or-
	
	  Title: Microsoft Site Server Analysis
	
	  Whois did not return any results. Please check that the local domain of your
	  DNS server is specified correctly under options, IP servers. After importing
	  data, IP resolution should be performed before performing whois.
	  It took 23 seconds.
	
	CAUSE
	=====
	
	InterNIC changed the WHOIS servers from whois.internic.net to
	whois.networksolutions.com. Because UIMPORT.exe is hard coded to look
	specifically at whois.internic.net, most WHOIS lookups fail as of November 30,
	1999.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the hotfix that is mentioned in the following
	Microsoft Knowledge Base article:
	
	  Q249388 Err Msg: Runtime Error '-2147352560(80020010)':Automation Error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Site Server Express
	2.0 and 3.0.
	
	Additional query words: ss3 ssp3 sse3 sse2 sp6a sp6 winnt windows 2000 win2k
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbSiteServSearch kbAudDeveloper
	Version           : :2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
