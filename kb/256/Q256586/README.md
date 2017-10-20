---
layout: page
title: "Q256586: SMS: Backup May Delete Contents of Target Folder"
permalink: /kb/256/Q256586/
---

## Q256586: SMS: Backup May Delete Contents of Target Folder

{% raw %}

	Article: Q256586
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a long folder name for the target folder for the Systems Management
	Server (SMS) Backup task, SMS Backup may unintentionally delete data in an
	unintended folder.
	
	For example, assume that SMS is installed in the D:\SMS folder. The target folder
	for SMS Backup is the "D:\SMS Backup" folder. In this case, the contents of the
	D:\SMS folder may be deleted.
	
	CAUSE
	=====
	
	SMS Backup does not recognize long folder names.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	Do not use long folder names for the destination folder for SMS Backup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2. This problem was first corrected
	in SMS Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
