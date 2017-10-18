---
layout: page
title: "Q126158: SMS Administrator Err Msg: Socket () failed, 10047"
permalink: kb/126/Q126158/
---

## Q126158: SMS Administrator Err Msg: Socket () failed, 10047

	Article: Q126158
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Systems Management Server Administrator to remotely
	control a NetWare client, the following error message appears and remote control
	is not available for any NetWare clients:
	
	  Socket () failed, 10047
	
	CAUSE
	=====
	
	Although remote control of NetWare clients uses IPX sockets, SMS Administrator
	requires the NetBIOS NWBLINK driver.
	
	MORE INFORMATION
	================
	
	NetBIOS support for NWLINK (NWBLINK) is installed under Windows NT when you
	install NWLINK. However, if you install a Windows NT service that requires
	NWLINK, and you have not yet installed NWLINK support, NWBLINK is not installed.
	This happens when you install Gateway Services for Netware (GSNW) on a Windows
	NT server.
	
	RESOLUTION
	==========
	
	To correct this problem, remove and reinstall NWLINK so that NWBLINK is
	installed, and then install the other software that depends on NWLINK.
	
	Additional query words: sms prodsms administrators
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
