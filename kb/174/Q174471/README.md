---
layout: page
title: "Q174471: SMS: Cannot Run Virus Scanner on Some SMS Client Files"
permalink: kb/174/Q174471/
---

## Q174471: SMS: Cannot Run Virus Scanner on Some SMS Client Files

	Article: Q174471
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Client files copied to the Windows and
	Windows\System32 directories of an NTFS partition on client computers running
	Windows NT are installed only with Execute permissions. Therefore, some virus
	scanning programs are unable to check these Systems Management Server files.
	
	
	WORKAROUND
	==========
	
	To work around this problem, run the virus scan program in the Administrator or
	Local System context.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
