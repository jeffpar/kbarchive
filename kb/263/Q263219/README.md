---
layout: page
title: "Q263219: SMS: Unable to View Advertisements in SMS Administrator Console"
permalink: /kb/263/Q263219/
---

## Q263219: SMS: Unable to View Advertisements in SMS Administrator Console

{% raw %}

	Article: Q263219
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsmsAdmin
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server Administrator (SMS) console, you are
	not able to view or edit advertisements even though you have been given Create,
	Delete, Modify, and Read rights to the Advertisement class.
	
	CAUSE
	=====
	
	This issue occurs because your rights to the Advertisement class are not
	sufficient. To fully access advertisements by using the SMS Administrator
	console, you must have at least Read rights to the following object classes or
	individual instances:
	
	- Packages
	
	- Collections
	
	MORE INFORMATION
	================
	
	This behavior also applies to instances of objects. However, if you are given an
	instance level right for Package A, but the only advertisement that is listed is
	for Package B, Package B is not displayed. You must have instance level rights
	to the package that the corresponding advertised program belongs to.
	
	Additional query words: prodsms kbAdvertisement kbCollections kbConfig kbMMC kbPackage
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
