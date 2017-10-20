---
layout: page
title: "Q200085: SMS: Client Upgrade May Remove SyncSends Value in Sms.ini"
permalink: /kb/200/Q200085/
---

## Q200085: SMS: Client Upgrade May Remove SyncSends Value in Sms.ini

{% raw %}

	Article: Q200085
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The [sight] section of the Sms.ini file now has a "SyncSends" value. The default
	value for this entry is 0; a value of 1 is for blocking sends. However, after a
	client is upgraded by executing Upgrade.bat or performing a site-wide client
	update (by following the steps listed in article Q166771, "SMS: How to Force
	Site-Wide Client Updates" in the Microsoft Knowledge Base), this value is
	removed. In addition, the [logonhistory] section may also be removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
