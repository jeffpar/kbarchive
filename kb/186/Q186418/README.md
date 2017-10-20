---
layout: page
title: "Q186418: SMS: NOAUTOUPGRADE Switch to Prevent Upgrade of Secondary Sites"
permalink: /kb/186/Q186418/
---

## Q186418: SMS: NOAUTOUPGRADE Switch to Prevent Upgrade of Secondary Sites

{% raw %}

	Article: Q186418
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbsmsAdmin kbsmsUtil smsadmin smssetup smsconfig smsinst smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A modified Setup.exe file, which includes the /SYSMAP and /NOAUTOUPGRADE
	options, is available from both the BackOffice Resource Kit and the Microsoft
	Web site, but is not required for applying Service Pack 3 (SP3) to a Systems
	Management Server 1.2 primary site. However, the modified Setup.exe is required
	for upgrading to Service Pack 1 (SP1) or Service Pack 2 (SP2) if you want to
	prevent automatic upgrades of your secondary sites.
	
	The SP3 version of Setup.cmd is updated and allows the use of the /NOAUTOUPGRADE
	switch without requiring a modified version of the program.
	
	MORE INFORMATION
	================
	
	To apply SP3 and prevent the secondary sites from being upgraded automatically,
	use the Setup.cmd file from the Service Pack 3 CD. Use the following command:
	
	     setup.cmd /noautoupgrade
	
	This simplification is because the NOAUTOUPGRADE option is now supported in the
	Setup.cmd file that is included in SP3.
	
	Do not use the Setup.exe file from either the BackOffice Resource Kit or the
	Microsoft Systems Management Server Web site for Service Pack 3 upgrades.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbsmsAdmin kbsmsUtil smsadmin smssetup smsconfig smsinst smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
