---
layout: page
title: "Q202003: SMS: Future Date Causes Access Violations in Services"
permalink: /kb/202/Q202003/
---

## Q202003: SMS: Future Date Causes Access Violations in Services

{% raw %}

	Article: Q202003
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200bug kbsms100bug kbsms110bug kbsms120bug
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive access violation errors in Systems Management Server services
	if you set the date on the server to the year 2037 or later. Examples of error
	messages that appear include:
	
	  siteins.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327.
	
	  preinst.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327
	
	  smsexec.exe
	  Exception: access violation (0c00000005), Address: 0x1f328327
	
	  pcmwin32.exe
	  Exception: access violation (0c00000005), Address: 0x0040ec87
	
	The memory address will be consistent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1, 1.2, 2.0.
	
	
	Additional query words: prodsms smssvr 2050 AV
	
	======================================================================
	Keywords          : kbsms kbsms200bug kbsms100bug kbsms110bug kbsms120bug 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : winnt:1.0,1.1,1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
