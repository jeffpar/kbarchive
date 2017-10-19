---
layout: page
title: "Q235187: SMS: NDS CAP and SMSLOGON Points May Cause GPF"
permalink: /kb/235/Q235187/
---

## Q235187: SMS: NDS CAP and SMSLOGON Points May Cause GPF

	Article: Q235187
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup kbConfig kbServer kbsms200 kbsms200bug kbCAP kbNDS kbOSNove
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Info Aps Service of Crystal Reports and the Microsoft Systems Management
	Server (SMS) Executive Service may experience a General Protection Fault (GPF)
	on a Microsoft Windows NT 4.0 site server connecting to an NDS Client Access
	Point (CAP) and NDS Logon Point server.
	
	CAUSE
	=====
	
	This behavior can occur because of a memory leak that may occur when the Novell
	redirector is installed on a client that creates a connection to a NetWare
	server or tree. The connection opens a series of handles that are never
	released. Closing the connection with the server does not release the handles
	that have been opened. This behavior can occur when you use Novell redirector
	versions 4.7 and earlier.
	
	WORKAROUND
	==========
	
	To work around this issue, do one of the following:
	
	- Remove the TCP/IP binding from the NetWare client redirector.
	
	- Remove Domain Name System (DNS) from the Protocol Component Settings under
	  the protocol preferences tab of the Novell Client Properties.
	
	MORE INFORMATION
	================
	
	For more information about Novell redirector support, refer to the "Known Issues
	Regarding Novell NetWare Client v4.7 for Windows NT/2000" section in the Systems
	Management Server 2.0 SP2 release notes.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup kbConfig kbServer kbsms200 kbsms200bug kbCAP kbNDS kbOSNovell kbReport 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
