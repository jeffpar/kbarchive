---
layout: page
title: "Q235869: SMS: How to Use Cliutils.exe to Force Inventory to Occur"
permalink: kb/235/Q235869/
---

## Q235869: SMS: How to Use Cliutils.exe to Force Inventory to Occur

	Article: Q235869
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbInventory kbsmsUtil
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you want to use Systems Management Server (SMS) inventory capabilities, you
	can start an inventory agent manually or by using the Cliutils.exe command-line
	utility.
	
	The Cliutils.exe utility is included in the Support\Reskit\Bin\I386\Diagnose
	folder of the SMS CD-ROM. If you are using an SMS 2.0 Service Pack distribution,
	this file is installed along with the other supportability files when
	Support.exe is executed. The Cliutils.exe utility is also included with the
	Microsoft BackOffice Resource Kit version 4.5.
	
	MORE INFORMATION
	================
	
	To initiate an inventory cycle, run Cliutils.exe with the appropriate
	command-line switches to force a cycle. For example, use one of the following
	commands to start an inventory cycle:
	
	cliutils /start "Software Inventory Agent"
	
	"cliutils /start "Hardware Inventory Agent"" (without the quotation marks)
	
	This forces a normal inventory for the selected inventory agent to begin
	immediately.
	
	This functionality can be used to troubleshoot inventory flow back to the site
	server or to update inventory for a given computer after a software distribution
	has taken place. This permits administrators to take advantage of dynamic
	collections.
	
	For more information about the Cliutils.exe utility, use the /? parameter or see
	Chapter 13 in the Microsoft Systems Management Server 2.0 Resource Guide.
	
	Additional query words: prodsms hinv sinv force immediate
	
	======================================================================
	Keywords          : kbtool kbsms200 kbInventory kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbhowto
	
	=============================================================================
	
