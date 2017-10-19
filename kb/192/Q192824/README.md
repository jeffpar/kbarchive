---
layout: page
title: "Q192824: SMS: WinNT Clients Not Supported Under NetWare Logon Servers"
permalink: /kb/192/Q192824/
---

## Q192824: SMS: WinNT Clients Not Supported Under NetWare Logon Servers

	Article: Q192824
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig smssetup smsconfig
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server version 1.2, Windows NT clients must report by
	means of Windows NT logon servers. Windows NT-based clients depend on Windows NT
	logon servers to receive the Windows NT and Systems Management Server client
	component services.
	
	MORE INFORMATION
	================
	
	Windows NT logon servers have the SMS_CLIENT_CONFIG_MANAGER service installed.
	This service is responsible for remotely installing and configuring the Windows
	NT client-side services on Systems Management Server client computers running
	Windows NT. The SMS_CLIENT_CONFIG_MANAGER service on each Windows NT logon
	server writes a log of this activity to the SMS\Logs\Clicfg.log file on the
	Windows NT logon server.
	
	Because Novell NetWare is not service-based, this service cannot be installed on
	logon servers running Novell NetWare. Therefore, NetWare logon servers cannot
	properly configure Windows NT clients for Systems Management Server operation.
	
	For more information on Windows NT client installation, see chapter 3 of the SMS
	Resource Guide, Back Office Resource Kit Part I page, 98-100.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	For additional information, see the following:
	
	- SMS Getting Started book P. 197
	
	- SMS Resource Guide, Back Office Resource Kit Part I, page 98-100
	
	
	Additional query words: prodsms bindery NDS smsls novel
	
	======================================================================
	Keywords          : kbsetup kbConfig smssetup smsconfig 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
