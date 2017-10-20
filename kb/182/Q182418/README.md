---
layout: page
title: "Q182418: SMS: Site Config Manager Cannot Use a Preferred Drive Letter"
permalink: /kb/182/Q182418/
---

## Q182418: SMS: Site Config Manager Cannot Use a Preferred Drive Letter

{% raw %}

	Article: Q182418
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Specified Servers in <Site Properties>\<Domains>, it is
	possible to specify a drive letter for Systems Management Server Site
	Configuration Manager to use when installing shares and services.
	
	However when enumerating a domain, there is currently no way to provide for a
	preferred drive letter. The Systems Management Server Site Configuration Manager
	will create the Systems Management Server root directory (and shares it as
	SMS_SHRx) and the SMS_SHR share on the NTFS drive with the most free space on
	all logon servers. If no NTFS drive exists, it chooses the drive with the most
	available space even it is a FAT drive.
	
	WORKAROUND
	==========
	
	To ensure that the Systems Management Server files will be installed on a
	specific drive on your Logon Server, make sure that the drive is an NTFS drive
	and that it has the most free space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
