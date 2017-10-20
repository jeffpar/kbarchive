---
layout: page
title: "Q266438: SMS: How to Query - IP Subnets in Systems Management Server 2.0"
permalink: /kb/266/Q266438/
---

## Q266438: SMS: How to Query - IP Subnets in Systems Management Server 2.0

{% raw %}

	Article: Q266438
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbMMC kbWBEM kbsms200 kbInventory kbQuery kbReport
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although you may prefer to perform queries for ranges of Transmission Control
	Protocol/Internet Protocol (TCP/IP) addresses or subnets, the queries created
	tend to return unexpected data. This behavior occurs because the data is stored
	in the database as a variable character (VarChar) without a numeric value.
	
	MORE INFORMATION
	================
	
	Sample Scenario
	---------------
	
	Set up the following query statement:
	
	  MICROSOFT|NETWORK|1.0:IP Address is greater than or equal to '148.108.120.0'
	  AND MICROSOFT|NETWORK|1.0:IP Address is less than or equal to '148.108.135.255'
	
	You would expect this query to return clients on networks between 148.108.120,
	121, 122 through 135. However, the results that you receive contain addresses
	such as 148.108.13.1, 148.108.13.2, and so forth, which are not in the expected
	range.
	
	Reason for failure:
	
	Because the IP Address is stored in the database as a VarChar, as opposed to a
	numeric value, it is read differently. With a number, both SMS and SQL read from
	right to left to determine the size of the number for the query. With a
	character string, SMS and SQL read from left to right. Consequently, when you
	perform a query looking for a value between two strings, it has unexpected
	results. For example, in the "Sample Scenario" above, it would return everything
	from 12, 120 to 129, and 13, 130 to 135.
	
	Possible Workaround:
	
	- Include the following "exclusions" in the query:
	
	  AND MICROSOFT|NETWORK|1.0:IP Address is not like '148.108.12.%'
	  AND MICROSOFT|NETWORK|1.0:IP Address is not like '148.108.13.%'
	
	- Use the Default Gateway field for the query instead of a TCP/IP range. By
	  doing so, you can base your query on a specific address instead of on a range
	  of addresses.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbDatabase kbMMC kbWBEM kbsms200 kbInventory kbQuery kbReport 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
