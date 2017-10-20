---
layout: page
title: "Q202076: SMS: Query Value Operators for SMS 2.0"
permalink: /kb/202/Q202076/
---

## Q202076: SMS: Query Value Operators for SMS 2.0

{% raw %}

	Article: Q202076
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) 2.0 provides Query functionality from the
	Microsoft Management Console (MMC) SMS Administrator. The WBEM Query language
	supports the following value operators:
	
	- IN ([value1], [value2], [value . . .])
	
	- IN (subselect)
	
	- BETWEEN ([value1] AND [value2])
	  For example, t1.SiteCode BETWEEN 'aaa' AND 'ccc'
	
	- NOT IN ([value1], [value2], [value . . .])
	
	- NOT IN (subselect)
	
	- UPPER ([expr])
	
	- LOWER ([expr])
	
	- NULL ([expr] is NULL)
	
	- NOT NULL ([expr] is not NULL)
	
	- DATEPART ([part], [date 1]) (part =
	  "mm","dd","yy","hour","minute","second","ms") = (equal) < > or != (not
	  equal) < (greater than) > (less than)
	
	REFERENCES
	==========
	
	For a complete reference of the WQL that the SMS Provider supports, refer to the
	"Using WBEM Query Language with Systems Management Server" section in the SMS
	Toolkit.
	
	Additional query words: prodsms sms20 queries
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
