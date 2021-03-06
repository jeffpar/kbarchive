---
layout: page
title: "Q184196: Rchelp.sys Causes a STOP Error at Boot on WinNT Clients"
permalink: /kb/184/Q184196/
---

## Q184196: Rchelp.sys Causes a STOP Error at Boot on WinNT Clients

{% raw %}

	Article: Q184196
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Systems Management Server 1.2 Service Pack 3 (SP3), a client
	computer may display the following STOP error message at startup:
	
	  STOP: c000026c {Unable to Load Device Driver}
	  \<SystemRoot>\SYSTEM32\DRIVERS\RCHELP.SYS device driver could not be
	  loaded. Error Status was oxc000012f
	
	The computer will no longer complete the boot process and stops responding on
	this error message each time you attempt to start it.
	
	CAUSE
	=====
	
	The failure occurs because the \<SystemRoot>\System32\Drivers\Rchelp.sys
	file was not properly generated when Service Pack 3 was installed on the client.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next SMS 1.2 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  7/15/99   5:29PM               358 KB  Clicfg.exe    i386
	  7/15/99   5:29PM               894 KB  Clicfg.exe    Alpha
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 3.
	
	Additional query words: rchelp.sys viddrv.rch c000026c oxc000012f sp3
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
