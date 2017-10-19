---
layout: page
title: "Q168541: SMS: PCM Should Close After Job Completes"
permalink: /kb/168/Q168541/
---

## Q168541: SMS: PCM Should Close After Job Completes

	Article: Q168541
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Package Command Manager (PCM) for Windows 3.x, Windows 95, and Windows NT does
	not close after completing a job.
	
	Package Command Manager should close its window after completion of a job or
	queue of multiple jobs. This is documented in Chapter 7, "Package Command
	Manager," of the Systems Management Server 1.2 Administrator's Guide, under the
	section entitled "Package Command Manager for the Windows and Windows NT
	Systems."
	
	WORKAROUND
	==========
	
	Currently, you must manually close the Package Command Manager window after all
	jobs are complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
