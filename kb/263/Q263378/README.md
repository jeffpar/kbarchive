---
layout: page
title: "Q263378: SMS: Software Distribution 'Stop Program' Does Not Work Properly"
permalink: /kb/263/Q263378/
---

## Q263378: SMS: Software Distribution 'Stop Program' Does Not Work Properly

{% raw %}

	Article: Q263378
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Software Distribution Stop Program option may not stop the program
	completely. The program stops but the Windows NT Virtual DOS Machine (NTVDM)
	process and its subprocesses are left running. In Systems Management Server
	(SMS) 2.0 Service Pack 2 (SP2), this behavior does not occur for all 32-bit
	programs.
	
	In Microsoft Windows 2000 and Microsoft Windows NT 3.51 and 4.0, the program
	seems to quit, but Advertised Programs Manager (APM) still reports the program
	as running.
	
	CAUSE
	=====
	
	When you use the Stop Program option in SMS, you cannot stop a 16-bit program
	that has exceeded its allotted time by 15 minutes.
	
	WORKAROUND
	==========
	
	To work around this behavior, manually stop the Ntvdm.exe process.
	
	
	Additional query words: prodsms APM
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
