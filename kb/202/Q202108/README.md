---
layout: page
title: "Q202108: SMS: Software Inventory Does Not Amass &amp; Display Full File Paths"
permalink: kb/202/Q202108/
---

## Q202108: SMS: Software Inventory Does Not Amass &amp; Display Full File Paths

	Article: Q202108
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Systems Management Server (SMS) version 2.0, Software Audit will
	not collect or display the full file path names for both known and unknown
	product files.
	
	MORE INFORMATION
	================
	
	The full file path is not reported due to scalability concerns. If the full path
	of each file on a client were to be displayed, it would greatly increase the
	size of each Software Inventory (SINV) file as well as the database. It would
	also force Systems Management Server to begin to report duplicate files as they
	are discovered. Currently, when a duplicate file is found, the file count is
	incremented in the database generally resulting in no, or minimal database
	growth.
	
	Additional query words: prodsms swinv32
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
