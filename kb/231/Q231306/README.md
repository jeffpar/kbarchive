---
layout: page
title: "Q231306: DNS Records with Same Name as Subdomain Are Moved or Missing"
permalink: /kb/231/Q231306/
---

## Q231306: DNS Records with Same Name as Subdomain Are Moved or Missing

{% raw %}

	Article: Q231306
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a DNS record that has the same name as a subdomain, the record
	may be missing. For example:
	
	You have a DNS domain called mycompany.com, and a subdomain called
	sales.mycompany.com that contains some records (for example,
	host1.sales.mycompany.com). You want the name sales.mycompany.com to be resolved
	to a host (A or CNAME) or a mail server (MX), so you select mycompany.com and
	add a record named sales.
	
	When the record is created, it is displayed as "sales" in mycompany.com. After
	you refresh the view, the entry is missing. The record is displayed in
	sales.mycompany.com if it is either:
	
	- A non-delegated subdomain.
	
	- A delegated subdomain, but the DNS server is the primary server for the zone.
	
	If the sales.mycompany.com domain is a delegated subdomain and the primary server
	is on a different system, the record is not written to any zone file. No error
	message is displayed.
	
	CAUSE
	=====
	
	This behavior occurs because the new records in the currently selected domain
	are displayed in the DNS Administration tool. After you refresh the view, the
	DNS Administration tool applies the same rules that the DNS server component
	uses.
	
	The DNS server decides where to put the record based on the record's fully
	qualified domain name (FQDN). The sales.mycompany.com record is placed in the
	sales.mycompany.com subdomain with an empty name.
	
	If sales.mycompany.com is not delegated, it is displayed in the zone file as
	expected, but is displayed in the graphical DNS Administration tool with the
	FQDN in sales.mycompany.com (which actually means an empty name).
	
	If sales.mycompany.com is the root of a zone, it appears with the "@" character
	in the zone file. If the local server is not the primary server for the
	delegation, the DNS server assumes it can add the record successfully but the
	request is not successful and no error message is displayed.
	
	RESOLUTION
	==========
	
	To work around this problem, do not add records that have the same name as a
	subdomain or a delegation. Instead, go directly to the name in question and add
	the record with an empty name.
	
	If the subzone is delegated to a different primary server, connect to it
	remotely.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
