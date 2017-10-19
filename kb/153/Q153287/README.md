---
layout: page
title: "Q153287: SMS Client Files Not Removed After Upgrade"
permalink: /kb/153/Q153287/
---

## Q153287: SMS Client Files Not Removed After Upgrade

	Article: Q153287
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A client deinstall does not remove all of the SMS client files.
	
	CAUSE
	=====
	
	If the client has been upgraded the old cl_xx.txt and cl_xx.mod files are not
	removed. When a deinstall is initiated SMS may find the old .txt and .mod files
	and use those to remove the client files. SMS should instead use the new
	client's .txt and .mod files to remove any client files.
	
	For instance, if the client was upgraded from Windows 95 to Windows NT, the
	\Ms\Sms\Data directory will still have the CL_W95.txt and CL_W95.mod files along
	with the CL_NT.txt and CL_NT.mod files. If the client is then deinstalled SMS
	may use the CL_W95.txt and CL_W95.mod for the remove file list instead of
	CL_NT.txt and CL_NT.MoD.
	
	RESOLUTION
	==========
	
	Manually delete the old client's .txt and .mod files. This has been fixed in
	1.2. The client upgrade will now delete the old .txt and .mod files as part of
	the upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
