---
layout: page
title: "Q137893: SMS: No Validity Checking for Date/Time Field in Query"
permalink: /kb/137/Q137893/
---

## Q137893: SMS: No Validity Checking for Date/Time Field in Query

{% raw %}

	Article: Q137893
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbui kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you construct a query within Systems Management Server Administrator, and use
	the date/time operator as part of the query definition, you are allowed to input
	a value that is not in date/time format. No error message appears when you
	commit the query.
	
	CAUSE
	=====
	
	There is no validity checking of the date/time fields in the Query Expression
	Properties window.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbui kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
