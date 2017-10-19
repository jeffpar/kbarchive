---
layout: page
title: "Q242187: XCLN: Insufficient Disk Space Error w/Outlook 98 Deployment Kit"
permalink: /kb/242/Q242187/
---

## Q242187: XCLN: Insufficient Disk Space Error w/Outlook 98 Deployment Kit

	Article: Q242187
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you deploy Outlook 98 by using the Outlook Deployment Kit (ODK), you may
	get the following error message:
	
	  There is not enough disk space to complete installation. You can change your
	  installation options, continue installation, or exit Setup.
	
	This error occurs even though there is plenty of free disk space on the drive on
	which you are installing Outlook 98.
	
	CAUSE
	=====
	
	This behavior occurs if the drive to which you are installing Outlook 98
	contains more than 4 gigabytes (GB) of free space and you have an earlier
	version of the Jobexec.dll file, possibly from Microsoft Internet Explorer 3.0.
	
	RESOLUTION
	==========
	
	Rename the Jobexec.dll file (located in the Winnt\System32 or Windows\System
	folder) on the target computer, and run the ODK Setup again.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q192714 Problems Installing Internet Explorer with More Than 4 GB Free Disk
	  Space
	
	Additional query words: odk and disk, insufficient disk space, error
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
