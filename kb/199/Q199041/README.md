---
layout: page
title: "Q199041: SMS: NET TIME Offered as a Package Will Not Traverse Domains"
permalink: /kb/199/Q199041/
---

## Q199041: SMS: NET TIME Offered as a Package Will Not Traverse Domains

	Article: Q199041
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When NET TIME is sent as a package and the package is set to "run with
	administrative rights," NET TIME will not be able to connect to another domain.
	
	The Administrative account in this context only runs with local machine rights
	and does not have domain rights.
	
	To work around this behavior, do one of the following:
	
	- Create a Windows NT Client Software Installation account in the SMS Admin UI
	  (under Site Heirarchy\Component Configuration\Software Distribution) that has
	  Domain user rights to perform the net time.
	
	  -or-
	
	- Use the Local Domain in the net time command.
	
	Additional query words: prodsms swdist32
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
