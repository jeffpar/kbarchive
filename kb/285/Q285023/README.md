---
layout: page
title: "Q285023: XCON: Internet Mail Service Does Not Follow Time to Live for DNS"
permalink: /kb/285/Q285023/
---

## Q285023: XCON: Internet Mail Service Does Not Follow Time to Live for DNS

{% raw %}

	Article: Q285023
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Exchange Server 5.5, the Internet Mail Service does not follow the Time to
	Live (TTL) value in Domain Name Service (DNS) records. When the Internet Mail
	Service queries DNS for connections, the Internet Mail Service caches up to
	1,000 domains (by default), irrespective of the TTL for those records. When the
	Internet Mail Service is forwarding to a host, it resolves the host name at
	startup, and never again queries DNS for the value, again ignoring TTL. This
	behavior makes it difficult to load balance outbound mail properly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Msexcimc.exe | 5.5.2654.52 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To give the Internet Mail Service the ability to follow TTL, you need to add the
	EnableTTL value to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	  Data Type: REG_DWORD
	  Value: 0 or 1
	
	The behavior is as follows:
	
	- EnableTTL disabled (0): Same behavior as before (route DNS lookups are cached
	  indefinitely).
	
	- EnableTTL enabled (1): Route lookups still cached up to TTL, but DNS lookup
	  is performed again after TTL. Also, routes for which there are no DNS MX
	  records do not get cached at all.
	
	Additional query words: IMS IMC
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
