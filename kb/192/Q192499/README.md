---
layout: page
title: "Q192499: SMS: Query Operator to Find Items Whose Value Is &lt;NULL&gt;"
permalink: kb/192/Q192499/
---

## Q192499: SMS: Query Operator to Find Items Whose Value Is &lt;NULL&gt;

	Article: Q192499
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can query on <NULL> values when you use WBEM Query Language (WQL). The
	operators 'NULL' and 'NOT NULL' do work for queries. The problem occurs because
	the base class code has no concept of <NULL> values and all <NULL>
	values are returned as blank.
	
	You can query on <NULL> and have the correct instance data returned, but
	you will not see <NULL> values in the instance.
	
	Additional query words: prodsms query null sms20
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
