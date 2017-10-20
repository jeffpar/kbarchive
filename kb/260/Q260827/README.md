---
layout: page
title: "Q260827: Conflicting Credentials Exist for CCM When Site Server on PDC"
permalink: /kb/260/Q260827/
---

## Q260827: Conflicting Credentials Exist for CCM When Site Server on PDC

{% raw %}

	Article: Q260827
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client Configuration Manager (CCM) is unable to connect to a Systems Management
	Server (SMS) site server that is a Primary Domain Controller (PDC) because of
	conflicting credentials.
	
	CAUSE
	=====
	
	This problem can be caused by the SMS sender keeping an open connection to the
	site server by using different credentials. Because of the conflicting
	credentials, the Client Configuration Manager is not able to create the accounts
	and groups on the PDC, and it is not able to start the client services on the
	PDC.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1
	--------
	
	Do not install a site on the PDC.
	
	Method 2
	--------
	
	Configure sites to use the same service account for the Client connection account
	and Sender connection account when you configure multiple sites. Using the same
	service account permits the Client Configuration Manager to perform its tasks on
	the PDC by using the same connection account used by the sender.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
