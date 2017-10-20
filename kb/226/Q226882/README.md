---
layout: page
title: "Q226882: SMS: APMSPY.EXE Requires Program Number to Display Offers"
permalink: /kb/226/Q226882/
---

## Q226882: SMS: APMSPY.EXE Requires Program Number to Display Offers

{% raw %}

	Article: Q226882
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug kbAdvertisement kbsmsUtil
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to successfully use the display offers command ("O") in the
	Advertised Program Manager Spy utility, Apmspy.Exe. When you use the display
	offers command, the program stops responding.
	
	CAUSE
	=====
	
	The command to display offers requires that a program number be supplied.
	
	WORKAROUND
	==========
	
	Supply a program number when you use the "O" command to display offers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Apmspy.exe is installed with the Systems Management Resource Kit, which can be
	found in the \Support folder on the Systems Management Server CD-ROM.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug kbAdvertisement kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
