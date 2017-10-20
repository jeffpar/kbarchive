---
layout: page
title: "Q153126: AcmeWkSt.exe Does Not Use Existing Installed Directory"
permalink: /kb/153/Q153126/
---

## Q153126: AcmeWkSt.exe Does Not Use Existing Installed Directory

{% raw %}

	Article: Q153126
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using Package Command Manager (PCM) to install an application like
	Microsoft Office 4.2c, ACMEWKST will not detect previous installations of the
	application(s). This makes it very difficult to upgrade existing applications.
	Currently, ACMEWKST will install the application to the drive with the most free
	space. If the drive with the most free space is not the same drive where the
	application to be upgraded is installed, you end up with two installations of
	the application, one on each drive.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
