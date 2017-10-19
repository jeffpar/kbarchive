---
layout: page
title: "Q134718: Documentation for Package Redistribution is Incorrect"
permalink: /kb/134/Q134718/
---

## Q134718: Documentation for Package Redistribution is Incorrect

	Article: Q134718
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbsetup kbdocerr kbSCMan smssetup smsdocerr smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You are unsuccessful in redistributing a package from a child site that was
	created at the parent site even though you are following the instructions on
	page 310 of the "System Management Server Administrator's Guide."
	
	When you are trying to redistribute a package from a child site that was created
	at the parent site:
	
	- The package does not appear in the list of available packages.
	
	-or-
	
	- When you drag and drop the package onto the site the following error message
	  appears:
	
	  Package type is incorrect.
	
	  To create a job with a domain or machine target, you must use a package that
	  has been setup for Workstation
	
	CAUSE
	=====
	
	The documentation is lacking information in the section for package
	redistribution.
	
	RESOLUTION
	==========
	
	To resolve this problem, you need to create a job for the package with only the
	send phase completed and send the jobs to the appropriate sites. This updates
	the package with setup information and allows the package to be used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: doc package prodsms sms
	
	======================================================================
	Keywords          : kbsetup kbdocerr kbSCMan smssetup smsdocerr smssiteconfigman 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
