---
layout: page
title: "Q201640: SMS: Windows 9x NetWare Clients Not Running SMS Logon Script"
permalink: kb/201/Q201640/
---

## Q201640: SMS: Windows 9x NetWare Clients Not Running SMS Logon Script

	Article: Q201640
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbBindery kbCAP kbOSNovell
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Windows 9x NetWare client that is using the Microsoft Client for NetWare
	logs on to a Novell NetWare server, it might not correctly run the System
	Management Server 2.0 login script (Smsls.scr). As a result, the client computer
	may not verify the System Management Server client software and report
	inventory.
	
	MORE INFORMATION
	================
	
	When the System Management Server 2.0 SMS_LOGON_MANAGER enumerates a Novell
	NetWare Bindery mode server, it adds an INCLUDE statement to the system logon
	script that calls the Smsls.scr from the SMSLOGON share, as shown here:
	
	  REM Microsoft Systems Management Server <start>
	  REM Important! DO NOT REMOVE THE LINES: Microsoft Systems Management Server <start> AND <end> OR ANY LINES BETWEEN THESE
	
	  REM SMS Build xxxx
	
	  Set SMS_LOGON_NW="DATA:\SMSLOGON"
	  Set SMS_LOGON="\\\<servername>\DATA\SMSLOGON"
	  INCLUDE %<SMS_LOGON_NW>\CONFIG\smsls.scr
	
	  REM Microsoft Systems Management Server <end>
	
	If "Enable logon script processing" is not selected in Control Panel, the client
	will not run the system logon script. On the Microsoft version of the NetWare
	redirector, this option is not enabled by default. To enable logon script
	processing:
	
	1. On the Taskbar, click the Start button, point to Settings, and then click
	  Control Panel.
	
	2. Double-click the NetWare Networks icon.
	
	3. Click the Properties tab and click to select the Enable logon script
	  processing check box.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms cli32nw
	
	======================================================================
	Keywords          : kbsms200 kbBindery kbCAP kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
