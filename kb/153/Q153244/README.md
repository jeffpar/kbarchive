---
layout: page
title: "Q153244: INVWIN32 Causes GPF When Run from MS-DOS Window"
permalink: /kb/153/Q153244/
---

## Q153244: INVWIN32 Causes GPF When Run from MS-DOS Window

{% raw %}

	Article: Q153244
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following command line, invwin32.exe /a:x86 /v, when run from
	sms\logon.srv\<platform>.bin in the MS-DOS window, causes a general
	protection fault (GPF) in invwin32.exe at address 0x0041cbd3.
	
	CAUSE
	=====
	
	The /a is an unrecognized command line option and is not being handled
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
