---
layout: page
title: "Q151377: Incorrect Path for UINFO.XNF in Administrator's Guide"
permalink: /kb/151/Q151377/
---

## Q151377: Incorrect Path for UINFO.XNF in Administrator's Guide

{% raw %}

	Article: Q151377
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbdocerr smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In the "Modifying the Default Form" section of Appendix G in the Systems
	Management Server Administrator's Guide, Step 6 states the following:
	
	1. In the Directories box, select the following path:
	
	     SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN
	
	This is incorrect. The correct path for UINFO.XNF is as follows:
	
	  SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN\00000409
	
	NOTE: The directory path may be different depending on the following
	configuration settings:
	
	  SITE.SRV\MAINCFG.BOX\<Platform>.bin\<Language - 8 digits>
	
	For example, the <Platform> is one of the following: = X86, MIPS or ALPHA;
	For <Language - 8 digits>, 00000409 is the default language used by
	Systems Management Server. Please refer to Appendix E in the Systems Management
	Server Administrator's Guide for additional Language mapping information.
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
