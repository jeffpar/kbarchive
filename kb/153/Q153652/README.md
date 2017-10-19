---
layout: page
title: "Q153652: Errors Occur on OS/2 Client Setup When Windows Path Is Bad"
permalink: /kb/153/Q153652/
---

## Q153652: Errors Occur on OS/2 Client Setup When Windows Path Is Bad

	Article: Q153652
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The OS/2 Client Setup program (CLI_OS2.EXE) reports a "Different site/domain
	combination" message on the initial Setup and a system trap error occurs when
	the Windows path is bad. As a result, OS/2 client files are not copied to client
	computer, SMSRUN16 fails to run when Windows starts, and SMSOS2AG is not copied
	or executed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
