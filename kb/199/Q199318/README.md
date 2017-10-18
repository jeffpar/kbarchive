---
layout: page
title: "Q199318: SMS: How SMS Uses the SMS_DEF.MOF in Hardware Inventory"
permalink: kb/199/Q199318/
---

## Q199318: SMS: How SMS Uses the SMS_DEF.MOF in Hardware Inventory

	Article: Q199318
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbInventory
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, clients use the SMS_DEF.MOF file to determine
	what information will be collected during the next hardware inventory. The
	SMS_DEF.MOF file can be found on Windows 95, Windows 98, and Window NT systems
	in the %WINDIR%\MS\SMS\Sitefile\<site code>\Hinv folder. In the event that
	the system administrator needs to change the list of items collected by the
	hardware inventory agent, the administrator must modify the master copy of the
	SMS_DEF.MOF file stored on the site server in the following location:
	
	  SMS\INBOXES\CLIFILES.SRC\HINV
	
	Once the SMS_DEF.MOF file has been modified, the file will be automatically
	replicated to all the defined client access points (CAP) for the site. The next
	time the client service polls it will download the current MOF file from the
	CAP. The Hardware Inventory Agent automatically checks the
	%WINDIR%\MS\SMS\Sitefile\<site code>\Hinv folder for the new MOF. If it
	finds a new MOF file, then it compiles and generates the new inventory.
	
	Additional query words: prodsms hw32
	
	======================================================================
	Keywords          : kbClient kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
