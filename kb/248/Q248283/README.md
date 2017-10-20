---
layout: page
title: "Q248283: SMS: Query for IP Address and Subnet Returns Unexpected Results"
permalink: /kb/248/Q248283/
---

## Q248283: SMS: Query for IP Address and Subnet Returns Unexpected Results

{% raw %}

	Article: Q248283
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 smsinst
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Queries against discovery data in the Systems Management Server (SMS) 2.0
	database may return unexpected results or incorrect data.
	
	CAUSE
	=====
	
	This behavior occurs because the relationship between a given IP address and its
	subnet is not stored in the discovery data portion of the database.
	
	WORKAROUND
	==========
	
	If the resource is a client and hardware inventory has been collected, use the
	Hardware Inventory classes to obtain this information because this relationship
	is stored appropriately. For more information about writing queries for the SMS
	database, see the Microsoft Systems Management Server 2.0 Software Developers
	Kit, which is included with the Microsoft BackOffice Resource Kit version 4.5.
	
	MORE INFORMATION
	================
	
	You cannot obtain accurate results because the relationship between a given IP
	address and its corresponding IP subnet is not explicitly stored in the
	discovery tables in the database. When a computer has only one IP address, this
	relationship is implied because there is only one subnet associated with the
	resource. However, if a resource has multiple IP addresses and multiple IP
	subnets, there is no association between a given IP address and a given subnet
	that is stored in the database.
	
	For example, if you build a query to return a list of computer names, IP
	addresses, and IP subnets for all computer that are running Windows NT, the
	result set includes multiple rows for those computers that have more than one IP
	address. There is a row in the result set for each combination of IP addresses
	and subnet addresses that is possible. A resource that has <n> adapters,
	each on a different IP subnet, has <n>^2 rows in the result set.
	Therefore, a resource with 3 IP addresses and subnets has 9 rows; a computer
	with 100 IP addresses and 100 corresponding subnet addresses may have as many as
	10,000 rows.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
