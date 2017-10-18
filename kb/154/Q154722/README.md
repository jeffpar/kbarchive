---
layout: page
title: "Q154722: SMS: Administrator and Guest Accounts Are Not Modified"
permalink: kb/154/Q154722/
---

## Q154722: SMS: Administrator and Guest Accounts Are Not Modified

	Article: Q154722
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbusage kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 26-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Systems Management Server is configured to automatically configure
	workstation login scripts, it will not modify the user profile for the
	Administrator and Guest accounts.
	
	MORE INFORMATION
	================
	
	Systems Management Server can be configured take the inventory of a computer
	each time it logs on to a domain. This is accomplished with the account's login
	script. Systems Management Server will create a script (Smsls.bat/.cmd) and
	assign it to accounts that did not previously have a logon script or will add
	the necessary lines to those that do. This automatic configuration does not
	assign a script to the Administrator and Guest accounts of a domain. This is by
	design.
	
	If the user profiles of the Administrator or Guest accounts are configured to run
	a login script that is also shared by a normal user account, Systems Management
	Server will configure the existing .bat or .cmd file to call SMSLS. This is the
	only way to automatically configure the Administrator or Guest accounts to
	execute Systems Management Server client setup and inventory.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2,2.0
	
	=============================================================================
	
