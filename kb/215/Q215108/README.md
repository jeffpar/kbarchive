---
layout: page
title: "Q215108: SMS: Advertised Programs Wizard Displays Incorrect Message"
permalink: kb/215/Q215108/
---

## Q215108: SMS: Advertised Programs Wizard Displays Incorrect Message

	Article: Q215108
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If two advertisements that are based on the same package and program are sent to
	a client, those advertisements will be merged. If one of the advertisements
	allows users to run it before it is assigned and the other advertisement does
	not, the following behavior occurs:
	
	When the merged advertisement reaches the client, a message pops up that the
	Advertised Programs Wizard has a new program to run, but when the Wizard is
	opened, no new program is displayed.
	
	WORKAROUND
	==========
	
	When the dialog box for a new program in the Advertised Programs Wizard is
	displayed, disregard it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
