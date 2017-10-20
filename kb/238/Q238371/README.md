---
layout: page
title: "Q238371: SMS: Network Discovery Causes GPF When Polling DHCP Servers"
permalink: /kb/238/Q238371/
---

## Q238371: SMS: Network Discovery Causes GPF When Polling DHCP Servers

{% raw %}

	Article: Q238371
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Network Discovery to retrieve discovery information from DHCP
	servers, you may receive a general protection fault. This may cause an
	incomplete discovery of network devices and or clients.
	
	In some cases a general protection fault dialog box may be displayed, in other
	cases the Network Discovery thread may create a crashdump in the SMS\Logs
	folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	You can temporarily disable the DHCP portion of Network Discovery to work around
	this issue.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix do the following on the Systems Management Server Site
	Server.
	
	1. Stop the SMS Site Component Manager and SMS Executive Services.
	
	2. Replace the Ad_adm.dll file in the
	  <sms_root_directory>\bin\<platform> directory with the version
	  obtained from the hotfix.
	
	3. Restart the SMS Site Component Manager and SMS Executive Services.
	
	Additional query words: prodsms gpf
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
