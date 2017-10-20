---
layout: page
title: "Q151648: Future Date Causes Access Violations in SMS Services"
permalink: /kb/151/Q151648/
---

## Q151648: Future Date Causes Access Violations in SMS Services

{% raw %}

	Article: Q151648
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): smssetup smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You may receive "Access violation" error messages in Systems Management Server
	(SMS) services if the date of the server is set to the year 2037 or later. Some
	examples of error messages include:
	
	  Siteins.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327.
	
	  preinst.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327
	
	  smsexec.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327
	
	  pcmwin32.exe
	  Exception: access volation (0c00000005), Address: 0x0040ec87
	
	The memory address will be consistent.
	
	RESOLUTION
	==========
	
	
	Change the system date, either from within Windows NT or in the system's BIOS,
	back to the appropriate date.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : smssetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : winnt:1.0,1.1,1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
