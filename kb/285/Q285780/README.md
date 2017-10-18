---
layout: page
title: "Q285780: SMS: Increased Network Traffic When You Run Hardware Inventory"
permalink: kb/285/Q285780/
---

## Q285780: SMS: Increased Network Traffic When You Run Hardware Inventory

	Article: Q285780
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbConfig kbWBEM kbsms200 kbInventory kbNetTrace
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run hardware inventory on a client computer that is running Systems
	Management Server (SMS) 2.0, network traffic may be generated.
	
	MORE INFORMATION
	================
	
	During a hardware inventory cycle, the SMS-based client collects information
	based on classes that are enabled in the Sms_def.mof file. To collect the
	requested information, the client may have to access network resources. The
	following classes are known to cause network traffic by the SMS-based client
	during a hardware inventory cycle:
	
	- Win32_UserAccount
	
	- Win32_Group
	
	- Win32_SystemAccount
	
	- Win32_NetworkLogonProfile
	
	- Win32_Desktop
	
	- Win32_BootConfiguration
	
	- Win32_Environment
	
	- Win32_ProgramGroup
	
	- Win32_PrinterConfiguration
	
	- Win32_LogicalDisk
	
	- SMS_LogicalDisk
	
	- SMS_Printer
	
	Most of this network traffic travels through named pipes to the appropriate
	resources such as domain controllers and printers.
	
	
	Additional query words: prodsms WBEM WMI HINV
	
	======================================================================
	Keywords          : kbnetwork kbClient kbConfig kbWBEM kbsms200 kbInventory kbNetTrace 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
