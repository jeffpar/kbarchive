---
layout: page
title: "Q261760: Site Status Inaccurately Reports 0 KB Free Disk Space on NDS"
permalink: /kb/261/Q261760/
---

## Q261760: Site Status Inaccurately Reports 0 KB Free Disk Space on NDS

{% raw %}

	Article: Q261760
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbNDS kbOSNovell kbsmsAdmi
	Last Modified: 31-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Systems Management Server Administrator Console, it is
	possible to assign a non-existent NetWare Directory Services (NDS) server to a
	Site System Role (that is a Client Access Point). If this occurs, the System
	Status Summarizer inaccurately reports that a non-existent server is failing
	with an error 4711, 0 bytes disk space available. This can be misleading,
	causing you to believe the system does exist and that it does not have any
	available disk space. This has been reported to affect only NDS system entries.
	
	WORKAROUND
	==========
	
	Avoid incorrectly defining nonexistent Netware NDS servers for Site System
	Roles. To resolve the situation, remove the errant server from the Site System
	Roles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbNDS kbOSNovell kbsmsAdmin kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
