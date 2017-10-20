---
layout: page
title: "Q60506: Workstation, Logon, and Other Domain Information"
permalink: /kb/060/Q60506/
---

## Q60506: Workstation, Logon, and Other Domain Information

{% raw %}

	Article: Q60506
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	There are three different domains a workstation can be listed in: workstation,
	logon, and other. Each of these domains is described below:
	
	  Domain          Description
	  ------          -----------
	
	  Workstation     This domain is the domain name you specify when you
	                  start your workstation using the /domain switch in
	                  the LANMAN.INI file. It is also called the
	                  "primary" domain.
	
	  Logon           This domain is the domain name you specify when you
	                  log on to the network. If you do not specify a
	                  domain name, you automatically log on in the
	                  "workstation" domain.
	
	  Other           These domains are the domain names you list in the
	                  "othdomains" entry of the LANMAN.INI file.
	
	Your workstation receives ONLY the domain-wide messages that are broadcasted to
	your "workstation" domain. Your workstation doesn't receive messages that are
	sent to your "logon" or "other" domains. However, "logon" and "other" domains
	can be used for a server announcement.
	
	For example, if your workstation domain is "abc" and your logon domain is "xyz",
	you receive messages sent to "abc", but not messages sent to "xyz". NET VIEW
	lists the servers in all three domains.
	
	Additional query words: 2.00 2.10 2.10a 2.20 domain
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
