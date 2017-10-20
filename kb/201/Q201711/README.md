---
layout: page
title: "Q201711: SMS: Refresh of Collection Does Not Aways List New Machines"
permalink: /kb/201/Q201711/
---

## Q201711: SMS: Refresh of Collection Does Not Aways List New Machines

{% raw %}

	Article: Q201711
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0, collections are used to group resources
	in a way that is logical for software distribution, reports, and many other
	administrative tasks. If you navigate under Site Database|Collections in SMS
	Administrator, right-click on the desired collection and click refresh or press
	the F5 key, new machines may not show up. However, if you right-click on the
	desired collection and select "Update Collection Membership," new machines
	appear.
	
	The Collection Evaluator thread of the SMS_EXECUTIVE updates collection
	memberships once an hour by default. Clicking refresh or hitting the F5 key
	simply reads what the collection evaluator gathered in its last cycle; selecting
	Update Collection Membership forces SMS to reevaluate the resources in the
	site.
	
	You can change the interval at which collections are updated by right-clicking on
	the desired collection, and selecting the Membership Rules Tab of Collection
	properties. Then click Schedule and specify when and how often you want to
	update the collection membership.
	
	Additional query words: prodsms collections update
	
	======================================================================
	Keywords          : kbsms200 kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
