---
layout: page
title: "Q226842: SMS: Importing New License MIF File Overwrites License Info"
permalink: kb/226/Q226842/
---

## Q226842: SMS: Importing New License MIF File Overwrites License Info

	Article: Q226842
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3 kbsms200preSP2
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you want to increase the number of available licenses for a particular
	product that is being metered by software metering, one option is to import a
	license Management Information Format (MIF) file, which contains the additional
	license information. When you do this, the number of licenses is not increased
	in an additive fashion but, rather, is overwritten by the new value contained in
	the MIF file.
	
	CAUSE
	=====
	
	When an MIF file is imported for a program that already exists, and the MIF file
	contains identical parameters as a program that is already being metered, the
	existing parameters are overwritten.
	
	WORKAROUND
	==========
	
	To work around this issue, make sure that any import MIF files reflect the total
	available licenses rather than the number of licenses to be added.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3 kbsms200preSP2 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
