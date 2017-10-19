---
layout: page
title: "Q124361: SMS: How to Remove Systems Management Server Clients"
permalink: /kb/124/Q124361/
---

## Q124361: SMS: How to Remove Systems Management Server Clients

	Article: Q124361
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsms100 kbsms110 kbsms120 kbsmsAdmin smsadmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how a Systems Management Server administrator can remove
	Systems Management Server clients from a Systems Management Server site.
	
	MORE INFORMATION
	================
	
	To remove a Systems Management Server client, run the appropriate Client Setup
	application with the /R switch. This is documented in Appendix B of the Systems
	Mangement Server Administrator's Guide. You must run Client Setup twice because
	it has to stop all Systems Management Server components before the files can be
	removed. You can do this by running Smsls.bat from the logon script or command
	prompt, or by running Client Setup directly from the proper
	..\SMS_SHR\<Platform>.Bin directory for the Systems Management Server
	client platform.
	
	You can also run DEINSTAL from the Systems Management Server logon server SMS_SHR
	share. All site SMS logon servers have Deinstal.bat and Deinstal.cmd files in
	the SMS_SHR share. These files, when run from a Systems Management Server
	client, determine the operating system that is being used and run the correct
	version of Client Setup with the /R switch (for example, CLI_NT /R). This
	configures the client to remove itself from the Systems Management Server site
	the next time Client Setup is run.
	
	
	Additional query words: prodsms uninstall deinstall deinstallation
	
	======================================================================
	Keywords          : kbnetwork kbsms100 kbsms110 kbsms120 kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
