---
layout: page
title: "Q140416: Remote Control Clients Are Grayed Out in SMS after Applying SP1"
permalink: /kb/140/Q140416/
---

## Q140416: Remote Control Clients Are Grayed Out in SMS after Applying SP1

{% raw %}

	Article: Q140416
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smshowto
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Systems Management Server Service Pack 1 to a site server
	running Systems Management Server 1.10, some of your remote control clients show
	up with a gray background when you use the Systems Management Server admin tools
	from a workstation that has not been updated.
	
	Using remote control from the site server or secondary servers works properly.
	
	CAUSE
	=====
	
	Service Pack 1 updates the associated files on the site server and all secondary
	servers, but not on admin workstations.
	
	WORKAROUND
	==========
	
	To work around this problem, you must copy the files from Service Pack 1 to the
	admin workstation manually:
	
	1. On your admin workstation, rename SIGHTNT.DLL, and SMSRES.DLL in the
	  SMSADMIN\SITE.SRV\X86.BIN directory to a unique name.
	
	2. Copy SIGHTNT.DLL, SMSRES.DLL from the Systems Management Server site server
	  to the workstation to the SMSADMIN\SITE.SRV\X86.BIN directory.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smshowto 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
