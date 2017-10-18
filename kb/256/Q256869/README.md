---
layout: page
title: "Q256869: SMS: Network Printers for Windows NT Clients Are Not Reported"
permalink: kb/256/Q256869/
---

## Q256869: SMS: Network Printers for Windows NT Clients Are Not Reported

	Article: Q256869
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT-based hardware inventory does not report network printers
	if you modify the MOF file to report the Printer class. Hardware inventory for
	clients running Microsoft Windows 95/Microsoft Windows 98 reports network
	printers as expected.
	
	CAUSE
	=====
	
	This problem is present in all instances of Systems Management Server 2.0 as it
	is due to architectural issues in the NT Operating System. In Windows 95/Windows
	98, all printers (local and network) are available to all users. The Hardware
	Inventory agent (Hinv32) in Windows NT runs under the SMS Client Token account.
	When it starts the inventory cycle, it calls Windows Management Instrumentation
	(WMI) for all the requested inventory information, including the printer
	information.
	
	WMI then redirects that request to the Win32 provider. The Win32 provider running
	under the Local System account impersonates the caller/client (that is, Hinv32)
	and accesses the information by using the SMS Client Token account. In Windows
	NT, the printer information that the Win32 provider returns includes the local
	printers and the network printers belonging to the SMS Client Token account
	(because that is the profile that Hinv32 is running under). This account, by
	default, does not have any network printers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
