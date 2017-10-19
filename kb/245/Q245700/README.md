---
layout: page
title: "Q245700: Software Inventory Does Not Report All Files"
permalink: /kb/245/Q245700/
---

## Q245700: Software Inventory Does Not Report All Files

	Article: Q245700
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbsms200preSP3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Systems Management Server (SMS) collects software inventory of
	.exe files, some files may not be listed in the Manufacturer or Unknown Files
	section in Resource Explorer.
	
	CAUSE
	=====
	
	If the Company Name box (found in the file's properties) does not contain data,
	the file is not reported during software inventory.
	
	To check if the Company Name box is blank, right-click the file, click
	Properties, and then click the Version tab. Then view the Company Name box.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain and Install Systems Management Server 2.0 Service Pack
	  2.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Microsoft Systems Management Server 2.0 Service Pack 2 (SP2) has corrected this
	issue by adding files that do not contain all the data necessary to the Software
	Inventory Unknown Files section in Resource Explorer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
