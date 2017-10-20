---
layout: page
title: "Q212847: SMS: Aborted SMS Installer Installation Requests a Restart"
permalink: /kb/212/Q212847/
---

## Q212847: SMS: Aborted SMS Installer Installation Requests a Restart

{% raw %}

	Article: Q212847
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbsms200 kbPackage kbsmsInst kbsmsUtil
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Systems Management Server Installer executable is aborted
	during execution, the Installer program requests a restart.
	
	CAUSE
	=====
	
	Files still in use cannot be returned to the pre-installed state until the
	computer is restarted. The restart is automatically requested so that any
	temporary files in the destination directory can be renamed back to their
	original file names.
	
	WORKAROUND
	==========
	
	The RESTART variable in the Installer script can be altered to suppress a
	restart message.
	
	For additional information about the RESTART variable, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q174330 SMSINST: Use of the RESTART Variable in SMS Installer
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbsms200 kbPackage kbsmsInst kbsmsUtil 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
