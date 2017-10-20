---
layout: page
title: "Q242965: Collection Based on Query May Display Incorrect Results"
permalink: /kb/242/Q242965/
---

## Q242965: Collection Based on Query May Display Incorrect Results

{% raw %}

	Article: Q242965
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a collection based on a query, the Administration tool may
	report the client as:
	
	  Assigned = Yes
	  Client = No
	
	This behavior occurs even if the client is installed and the tool reports "Client
	= Yes" in the All Systems collection. The result may vary according to the query
	criteria that you are using.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This hotfix requires that you install Systems Management Server 2.0 Service Pack
	1 (SP1). To install the hotfix, follow these steps on the Systems Management
	Server (SMS) site server:
	
	1. Stop the SMS Site Component Manager and SMS Executive services.
	
	2. Stop the Windows Management service.
	
	3. Replace the Basesvr.dll file in the <SMS_root>\bin\<Platform>
	  folder with the version from the hotfix.
	
	4. Restart the SMS Site Component Manager, SMS Executive, and Windows Management
	  services.
	
	NOTE: You muse re-create the custom queries for this hotfix to work.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
