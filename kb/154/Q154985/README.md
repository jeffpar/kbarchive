---
layout: page
title: "Q154985: DNS Registry Key Not Updated When Changing Zone Type"
permalink: /kb/154/Q154985/
---

## Q154985: DNS Registry Key Not Updated When Changing Zone Type

{% raw %}

	Article: Q154985
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a secondary zone and then change that zone to primary, the
	registry is not updated to reflect the change. The next time you restart the DNS
	server, you receive an error message stating that the primary DNS address is
	missing. In this instance the DNS server does not start. Also, the Cache.dns
	file may be overwritten with a blank file, causing you to lose name resolution
	outside your zone of authority.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q152734
	  TITLE : How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	The Microsoft DNS Server has been modified to correctly write back the Zone Type
	key to reflect the correct role of the zone.
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/dns-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
