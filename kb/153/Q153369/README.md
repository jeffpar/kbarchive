---
layout: page
title: "Q153369: Pcmdump.exe Shows Wrong Expiration Month"
permalink: /kb/153/Q153369/
---

## Q153369: Pcmdump.exe Shows Wrong Expiration Month

	Article: Q153369
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINFkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Pcmdump.exe shows the wrong expiration month. For example, rather than showing
	the month of January (01) for the expiration month, it shows the month to be
	"00."
	
	
	CAUSE
	=====
	
	In SMS 1.0 and 1.1 used a month of zero to detect no date entered and months
	were stored in the range 0 to 11..
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
