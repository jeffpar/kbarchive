---
layout: page
title: "Q212869: &quot;Check Disk Space&quot; Script Is Inaccurate with Component Lists"
permalink: kb/212/Q212869/
---

## Q212869: &quot;Check Disk Space&quot; Script Is Inaccurate with Component Lists

	Article: Q212869
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 19-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Systems Management Server Installer, the Check Disk
	Space script is used to ensure that the destination computer has adequate disk
	space for the installation. When the Check Disk Space script is used with a list
	of components for the installation, the disk space may be calculated
	incorrectly; the installation may be attempted although there is inadequate
	available space on the target drive.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
