---
layout: page
title: "Q193746: SMS: Resync File Cleaner - Dumpsync.exe"
permalink: kb/193/Q193746/
---

## Q193746: SMS: Resync File Cleaner - Dumpsync.exe

	Article: Q193746
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory kbsmsUtil smsinv smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dumpsync.exe, a utility available in the Microsoft BackOffice Resource Kit,
	cleans the Resync.cfg file on all Systems Management Server logon servers in a
	domain.
	
	MORE INFORMATION
	================
	
	When the information in a MIF file is not synchronized with the database,
	Systems Management Server sends a resync request to the client containing the
	MIF file. Systems Management Server does so by having a Resync.cfg file on each
	Systems Management Server logon server. This file contains (among other things)
	an SMSID and the time of the resync request.
	
	When a client connects to a Systems Management Server logon server, the client
	checks the Resync.cfg file for the client's SMSID. If the ID is found, the
	client sends a complete inventory and marks the inventory file as being a resync
	file. (The client also keeps track of when it sent the inventory, so on future
	reads of the Resync.cfg file, the client will not resend the information unless
	the time of the request in the resync file changes.)
	
	Systems Management Server never cleans the Resync.cfg file, which means that the
	file keeps growing. The DUMPSYNC utility cleans the Resync.cfg file. DUMPSYNC
	must be run from Sms\Site.srv\Invdom.box\domain.000 for each domain you want to
	clean.
	
	Maintenance Manager copies files from the Site.srv\Maincfg.box\Invdom.box
	\Domain.000 and Site.srv\Maincfg.box\Invdom.box\Domain.000\Invencfg.box
	directories to Logon.srv on the appropriate domains. However, Maintenance
	Manager does not delete files from the logon servers if they are removed from
	the Site.srv directory. A simple fix for this is to delete all the .cfg files
	from Logon.srv\Invencfg.box directory on all logon servers. If files are still
	necessary, Maintenance Manager will move them back.
	
	DUMPSYNC Syntax
	---------------
	
	  dumpsync  [days]  [/Dump]
	
	Options                    Description
	---------------------------------------------------------------------------
	
	days                       All clients with a resync request in Resync.cfg
	                          more than [days] days old are removed from the
	                          Resync.cfg file, and their Smsid.cfg files are
	                          deleted from the Site.srv\Maincfg.box\Invdom.box
	                          \Domain.000\Invencfg.box directory.
	
	/Dump                      Displays the contents of the Resync.cfg file.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory kbsmsUtil smsinv smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA MIPS x86
	Issue type        : kbinfo
	
	=============================================================================
	
