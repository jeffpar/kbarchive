---
layout: page
title: "Q187369: SMS: SETLS Stores File Time of Win.ini File"
permalink: kb/187/Q187369/
---

## Q187369: SMS: SETLS Stores File Time of Win.ini File

	Article: Q187369
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120sp4fixkbbuglist
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Smsls.ini file is used to map Systems Management Server clients to a
	specific site, SETLS will store the following upon a successful client mapping:
	
	- Name and file time of the .ini file used
	
	- Key and Value used to determine the domain
	
	- Domain name
	
	SETLS later uses this information to determine whether it should perform its
	mapping routines. If the Win.ini file is used for mapping, its file time is
	stored. Any change to the Win.ini file causes SETLS to perform its mapping
	routines. This may be undesirable, due to the length of time that the SETLS
	mapping routines can take.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120sp4fix kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
