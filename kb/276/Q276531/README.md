---
layout: page
title: "Q276531: Mobile Client Computer Is Assigned to Every Site It Visits"
permalink: /kb/276/Q276531/
---

## Q276531: Mobile Client Computer Is Assigned to Every Site It Visits

{% raw %}

	Article: Q276531
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug kbDiscovery kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you disable the traveling mode option on a client computer, you may notice
	that the mobile client computer has been assigned to all of the sites that it
	has visited.
	
	CAUSE
	=====
	
	When you enable the traveling mode option on a mobile client, the Smsasign.ini
	file (located at <Windir>\Ms\Sms\Core\Data\) is modified to indicate
	"CLIENT_ASSIGNED." This setting prevents the mobile client from being added
	automatically to sites that it visits. However, if you disable the traveling
	mode option, the Systems Management Server (SMS)-based client is automatically
	assigned to that site.
	
	WORKAROUND
	==========
	
	When the traveling mode option is enabled, do not turn it off. This workaround
	may be easier to implement if you use the Clitrvl.exe tool that is included with
	Systems Management Server 2.0 Service Pack 2 (SP2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms travel mode
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug kbDiscovery kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
