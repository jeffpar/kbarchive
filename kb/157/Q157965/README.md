---
layout: page
title: "Q157965: Inventory Taken at Every Login When Scan Interval Is One Day"
permalink: /kb/157/Q157965/
---

## Q157965: Inventory Taken at Every Login When Scan Interval Is One Day

{% raw %}

	Article: Q157965
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Systems Management Server inventory agent reports inventory every logon, even
	though the inventory scan interval is one day. For more information on this
	problem, see the following article in the Microsoft Knowledge Base:
	
	  Q151620 Inventory Scan Intervals Off by One Day
	
	CAUSE
	=====
	
	This problem is caused by the failure of the inventory agent to take leap years
	into account. Therefore, the problem is evident from 02/29/1996 to 12/31/1996.
	Since 1997 is not a leap year, the inventory agent will behave normally.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- To specify daily scans, type "Every 2 Days." (without the quotation marks)
	
	- To specify scans every three days or less frequently, type the interval as
	  you normally would.
	
	NOTE: This problem prevents you from specifying an interval of two days.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms leapyear
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
