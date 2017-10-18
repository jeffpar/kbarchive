---
layout: page
title: "Q304664: SMS: SMS Client May Log Exceptions and Report Status Message 669"
permalink: kb/304/Q304664/
---

## Q304664: SMS: SMS Client May Log Exceptions and Report Status Message 669

	Article: Q304664
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Microsoft Systems Management Server (SMS) 2.0 client on a
	computer that is running Microsoft Windows 95, Microsoft Windows 98, or
	Microsoft Windows Millennium Edition (Me), SMS may occasionally report
	exceptions in various client logs. In addition, SMS status message 669 may be
	reported to the site server from these clients during the initial boot process.
	
	MORE INFORMATION
	================
	
	This problem may occur if there is insufficient environment space allocated in
	the Config.sys file on the client. To resolve this issue, increase the amount of
	environment space that is available to the system by editing the Config.sys file
	and adding or modifying the following line:
	
	  shell=c:\command.com /e:<size> /p
	
	In this example, <size> is the value that you should adjust to a size that
	addresses the needs in your individual situation.
	
	Note: The SMS client exceptions and status messages do not interrupt work, nor
	are there any desktop error messages displayed. The SMS client records any
	exceptions in the appropriate SMS log files and generates status messages which
	are sent up to the site and stored in the database as part of typical SMS client
	operations.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
