---
layout: page
title: "Q303417: SMS: Software_Inventory Table Grows to Very Large Size"
permalink: /kb/303/Q303417/
---

## Q303417: SMS: Software_Inventory Table Grows to Very Large Size

{% raw %}

	Article: Q303417
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple files with the same file name are found during a software inventory
	scan, these files are not necessarily treated as unique. Because of this, only a
	single instance of the file is reported with a creation date that corresponds to
	the last file found during the scan. This problem was initially reported and
	resolved prior to Systems Management Server (SMS) 2.0 Service Pack 2 (SP2). The
	fix was included with the client hotfix bundle for SMS 2.0 Service Pack 1 (SP1)
	as described in the following Microsoft Knowledge Base article:
	
	  Q238762 SMS: Software Inventory Creation Date Is Incorrect in SMS Database
	
	MORE INFORMATION
	================
	
	After the fix for this issue was deployed, reports of using this fix in
	production indicated scalability concerns because of the software inventory
	database table growing excessively large. The problems that were created by the
	software inventory table growing to excessive size included delays in loading
	software inventory, delays processing software inventory queries, and so on.
	
	Because of scalability concerns, this fix was removed prior to the release of SMS
	2.0 SP2. Because of this, for installations of SMS 2.0 SP2 or later (of those
	installations that are still running SMS 2.0 SP1 but without the client hotfix
	bundle installed), the misreporting of the file creation date for those files
	with the same name is to be expected.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
