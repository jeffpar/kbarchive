---
layout: page
title: "Q123425: Docerr: SMSVIEW Program Item Not Available"
permalink: /kb/123/Q123425/
---

## Q123425: Docerr: SMSVIEW Program Item Not Available

{% raw %}

	Article: Q123425
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the "Running SMSVIEW Generator" section of the Microsoft Systems Management
	Server Help file (SMS.HLP), the first paragraph states:
	
	  The SMSVIEW program is automatically installed on primary site servers. You
	  can start SMSVIEW using the SMSVIEW program item from the Systems Management
	  Server program group. The SMSVIEW program runs on the Windows NT operating
	  system.
	
	The second sentence is incorrect because the SMSVIEW program item (icon) is not
	created or available in the Systems Management Server program group by default.
	If you want to use the SMSVIEW program, the location of the program is as
	follows:
	
	  SMS\SITE.SRV\<platform>.BIN
	
	where <platform> can be one of the following:
	
	  x86   (for Intel-based computers)
	  MIPS  (for MIPS-based computers)
	  Alpha (for Alpha-based computers)
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
