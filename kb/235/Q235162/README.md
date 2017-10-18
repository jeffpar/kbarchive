---
layout: page
title: "Q235162: SMS: Operating System Install Time/Date Is Inaccurate"
permalink: kb/235/Q235162/
---

## Q235162: SMS: Operating System Install Time/Date Is Inaccurate

	Article: Q235162
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Installation Date attribute in the Operating System inventory group may
	report an inaccurate time and date for Microsoft Windows NT-based computers.
	
	CAUSE
	=====
	
	This is caused by an inaccurate time stamp for the installation being reported
	by Windows NT. The value displayed in Systems Management Server client inventory
	is retrieved from the HKLM\Software\Microsoft\Windows
	NT\CurrentVersion\Installdate registry key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	
