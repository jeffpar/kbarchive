---
layout: page
title: "Q235742: SMS: Hardware Inventory  Raises Exception When Processing Class"
permalink: /kb/235/Q235742/
---

## Q235742: SMS: Hardware Inventory  Raises Exception When Processing Class

	Article: Q235742
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Hardware Inventory is running on a Systems Management Server 2.0 client
	that has a Diamond Stealth II G460 AGP video adapter with the I740 chipset
	installed, an exception may occur. The following entries may be logged in the
	Hinv32.log on the client:
	
	CLASS - Process Class: Win32_DisplayControllerConfiguration
	EXCEPTION EXCEPTION EXCEPTION
	CLIEXCEPT (Logged to all threads)
	An exception was raised in the application 'Hardware Inventory Agent'
	CLIEXCEPT A fatal exception occurred in THIS THREAD. Information follows:
	CLIEXCEPT Exception Type : 0xc0000005" CLIEXCEPT Exception Address : 0x408f56"
	
	WORKAROUND
	==========
	
	The enumeration of the Win32_DisplayControllerConfiguration class can be
	disabled by modifying the Sms_def.mof file. To prevent this problem, set
	reporting for the Win32_NetworkClient class to False in the site's Sms_def.mof
	file.
	
	For more information on the procedure to do this, please refer to Chapter 10 of
	the Systems Management Server Administrator's Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
