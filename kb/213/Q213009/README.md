---
layout: page
title: "Q213009: Cannot Create Program for Existing Package Using Wizard"
permalink: kb/213/Q213009/
---

## Q213009: Cannot Create Program for Existing Package Using Wizard

	Article: Q213009
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbPackage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Distribute Software Wizard to distribute a package that does
	not have a program, you are unable to create a program for the package. Although
	the wizard includes an "Advertise a Program" option, the Yes button and the
	programs list are unavailable.
	
	CAUSE
	=====
	
	The current Distribute Software Wizard does not include an option to create a
	program for an existing package.
	
	WORKAROUND
	==========
	
	To work around this issue, you can do either of the following methods:
	
	- Use the Distribute Software Wizard to create both the package and the
	  program.
	
	  -or-
	
	- Create a program for the package before you use the Distribute Software
	  Wizard. To do this, follow these steps:
	
	  1. Click to expand Package.
	
	  2. Right-click Programs, click New, and then click Program.
	
	  3. Enter the program properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbPackage 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
