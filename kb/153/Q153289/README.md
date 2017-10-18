---
layout: page
title: "Q153289: Rul2cfg.bat Does Not Check for Parameters"
permalink: kb/153/Q153289/
---

## Q153289: Rul2cfg.bat Does Not Check for Parameters

	Article: Q153289
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsgeneral smsaudit kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Rul2cfg.bat expects two parameters to be passed to it; however, it does not check
	for the parameters.
	
	MORE INFORMATION
	================
	
	Rul2cfg.bat usage is: RUL2CFG AUDIT.RUL AUDIT.CFG
	Audit.rul is the input .rul file to use.
	Audit.cfg is the output .cfg file to create.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsgeneral smsaudit kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
