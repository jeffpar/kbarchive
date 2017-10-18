---
layout: page
title: "Q231489: SMSINST: Using Wildcard with Install File Script Forces Restart"
permalink: kb/231/Q231489/
---

## Q231489: SMSINST: Using Wildcard with Install File Script Forces Restart

	Article: Q231489
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "Install File(s)" or "Copy Local File(s)" script items and you
	specify a source by using wildcards, Systems Management Server Installer may
	request a reboot even if the files being copied are not in use.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods:
	
	- Obtain the latest version of Microsoft Systems Management Server Installer
	  from the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/
	
	- Set the RESTART variable to a null value at the end of the installation
	  script to prevent the restart requirement by using the "Set Variable" script
	  item.
	
	For additional information about the RESTART variable, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q174330 SMSINST: Use of the RESTART Variable in SMS Installer
	
	- Instead of using wildcards with the "Install File(s)" or "Copy Local File(s)"
	  script items, use individual script items for each file to be replaced.
	
	MORE INFORMATION
	================
	
	This behavior does not occur when you use the latest version of Systems
	Management Server Installer. It occurs only if you attempt to install files in a
	folder that has files in use. If the destination folder is empty or does not
	contain files that are in use, the restart request is not generated. Typically,
	Systems Management Server Installer marks these files to be replaced at the next
	reboot and prompts you to restart the computer at the end of the installation.
	You can control this activity by using the RESTART variable.
	
	For additional information about the RESTART variable, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q174330 SMSINST: Use of the RESTART Variable in SMS Installer
	
	Or, view the Systems Management Server Installer online Help.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	
