---
layout: page
title: "Q153558: Running Deinstall.cmd on an OS/2 Client Does Not Remove SMS"
permalink: /kb/153/Q153558/
---

## Q153558: Running Deinstall.cmd on an OS/2 Client Does Not Remove SMS

{% raw %}

	Article: Q153558
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run Deinstall.cmd from a command prompt of an OS/2 client computer, the
	application reports that the client components of Systems Management Server have
	been de-installed successfully and to restart the Win-OS/2 session in order to
	complete Phase 2 of the de-installation.
	
	In SMS.INI, Setphase is equal to Deinstall. However, the client components of
	Systems Management Server have not been de-installed and all of the components
	continue to function.
	
	CAUSE
	=====
	
	This problem occurs when the logon server name is too long (greater than or
	equal to 12 characters).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms OS/2 deinstall
	
	======================================================================
	Keywords          : kbinterop smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
