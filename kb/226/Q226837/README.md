---
layout: page
title: "Q226837: SMS: Crystal Reports Location Is Displayed Incorrectly"
permalink: /kb/226/Q226837/
---

## Q226837: SMS: Crystal Reports Location Is Displayed Incorrectly

{% raw %}

	Article: Q226837
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to the local Microsoft Systems Management Server site database
	in the Systems Management Server Administrator console, disconnect, establish a
	connection to a remote site database, and then connect again to the local site
	server database and view the properties for Crystal Reports in the Tools folder
	of the local site server, the reports appear to be installed on the remote site
	server.
	
	WORKAROUND
	==========
	
	To work around this behavior, close and then re-open the SMS Administrator
	console.
	
	Additionally, if you connect to only one site at a time when you use the Systems
	Management Server Administrator console, this behavior does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
