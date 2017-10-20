---
layout: page
title: "Q122322: Extra Characters Added to DNS Name Query"
permalink: /kb/122/Q122322/
---

## Q122322: Extra Characters Added to DNS Name Query

{% raw %}

	Article: Q122322
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a NetBIOS name resolution using Domain Name Service (DNS) by
	enabling the DNS for Windows Name Resolution option, Microsoft TCP/IP-32 adds an
	extra character to a domain name if the domain name is exactly 15 characters in
	length (including the period separating the name). For example, if the domain
	name is "1.microsoft.com" (without quotes) and the host name is ABCD, the DNS
	name query sent is "ABCD.1.microsoft.com.8" (without quotes). The extra
	character that attaches to the end of the DNS name query is commonly the number
	8 or the letter X, but can be any character. This behavior does not affect any
	of the TCP/IP-32 utilities.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Create or use a domain name less or greater than 15 characters.
	
	- Create or use a local LMHOSTS file for the NetBIOS name resolution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 version 3.11a. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: wfw wfwg 3.11 ping
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
