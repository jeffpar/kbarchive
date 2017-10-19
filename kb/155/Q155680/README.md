---
layout: page
title: "Q155680: SMS: Windows NT Remote Control Registry Parameters Not Updated"
permalink: /kb/155/Q155680/
---

## Q155680: SMS: Windows NT Remote Control Registry Parameters Not Updated

	Article: Q155680
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Site Properties are updated to allow a user group (such as Help Desk)
	or a user to do remote troubleshooting, Systems Management Server 1.2 will
	update the registry on new Windows NT clients, but not on existing clients.
	
	WORKAROUND
	==========
	
	Run Upgrade.bat from a Systems Management Server logon server to update the
	remote control registry parameters on existing Windows NT clients. Doing this
	will cause the Client Configuration Manager to reconfigure the Windows NT client
	with the correct registry entries.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	By default in Systems Management Server 1.2, only the members of the local
	Administrators group are allowed to take remote control of a computer running
	Windows NT. From the Systems Management Server Administrator utility, it is
	possible to give additional user groups or users the permission to do remote
	control.
	
	To do this, click the Clients button on the Site Properties window. The Options
	button adjacent to the Remote Troubleshooting options will allow you to add or
	remove group and user names.
	
	After a change has been made to this list, the changes are written to the site
	control file and the Systems Management Server database. However, the changes
	will not be written to the following registry location:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client Services\Remote
	  Control\Parameters\PermittedViewers
	
	Client Configuration Manager will update the registry during the setup of new
	Windows NT clients, or during a Systems Management Server client software
	upgrade. Once the registry has been updated, the users defined will be able to
	take remote control of the computer running Windows NT.
	
	Additional query words: prodsms security context
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
