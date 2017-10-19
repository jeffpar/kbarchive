---
layout: page
title: "Q304035: SMS: Delete Package Wizard Displays Incorrect Value of &quot;Never&quot;"
permalink: /kb/304/Q304035/
---

## Q304035: SMS: Delete Package Wizard Displays Incorrect Value of &quot;Never&quot;

	Article: Q304035
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Delete Package Wizard to delete a package, the Advertisements
	screen displays all advertisements that are associated with the package you want
	to delete. However, this screen may incorrectly display a Never value for the
	Expires after column, even if the advertisement is set to expire or has already
	expired.
	
	WORKAROUND
	==========
	
	Although the Expires after value may be incorrect, the package and advertisement
	deletion process will not be affected. You may safely ignore the Expires after
	value and proceed normally with the Delete Package Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
