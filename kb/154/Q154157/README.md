---
layout: page
title: "Q154157: Audit.rul Does Not Find Software"
permalink: kb/154/Q154157/
---

## Q154157: Audit.rul Does Not Find Software

	Article: Q154157
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Software Auditing fails to find software after Windows NT converts the time stamp
	to adjust for daylight savings time.
	
	CAUSE
	=====
	
	This problem occurs when a Windows NT server is set to not "automatically adjust
	for daylight saving time" in Control Panel Date/Time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
