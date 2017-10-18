---
layout: page
title: "Q167777: SMS: Site/Domain Changes Are Processed Automatically"
permalink: kb/167/Q167777/
---

## Q167777: SMS: Site/Domain Changes Are Processed Automatically

	Article: Q167777
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbDataLoader kbInventory smsinv smsdataloader
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Included with Service Pack 2 for Systems Management Server 1.2 is new
	functionality that allows a Systems Management Server client's inventory to be
	"moved" in a multiple site hierarchy.
	
	With all prior versions of Systems Management Server, a client's inventory would
	not be automatically deleted from an old site's database if the client started
	reporting to a new one. The administrator would have had to delete the old
	client record manually, by using the Systems Management Server Administrator
	program.
	
	MORE INFORMATION
	================
	
	The following steps describe what is involved when a client starts reporting to
	a new site/domain combination:
	
	1. When a Systems Management Server client detects a site or domain change, the
	  client inventory agent updates the Sms.ini file with the new values and sends
	  up a full resynchronization (resync) inventory to the new Systems Management
	  Server logon server.
	
	2. The Dataloader service at the new site compares the client's inventory to the
	  record (if any) in the database to see if the client's site code has changed.
	  If there is no existing client inventory record, the .mif file is processed
	  normally and no further action is taken by the Dataloader service.
	
	3. If the site code for the client is different, the Dataloader computes the
	  site that would be the lowest in the hierarchy, yet still able to tell the
	  old-site from the new-site. This computed site is called the cross-site, and
	  is the only site from which the actual movement is "commanded." The
	  cross-site is important because it prevents more than one site from sending
	  delete MIFs.
	
	4. If the current site is the cross-site, the tree of sites immediately below
	  the cross-site that the client used to report to is computed and each one
	  added to an "old-site" list.
	
	5. The client inventory .mif file that initiated all of this is processed
	  normally and then passed up to the parent site (if any). Any sites above the
	  cross-site evaluate the .mif file in the same fashion, but will not take any
	  further action, because they determine themselves not to be the cross-site.
	
	6. For each primary site in the old-site list, a small delete MIF is created for
	  this particular client, which is then handed to the site reporter service
	  running on the cross-site.
	
	7. The site reporter creates one or more mini-jobs (system jobs) to send these
	  delete MIFs to the specific target primary sites.
	
	8. The losing-sites receives the delete MIF and processes a simple delete just
	  as if it came from the Systems Management Server Administrator program. This
	  action also revokes the Systems Management Server client license from the
	  License Manager as well.
	
	Administrators should still use the Systems Management Server Database Manager
	(Dbclean.exe) to purge Unused Common/Specific Records and old history. The small
	delete MIF mentioned above only does a simple task in the database of moving the
	deleted client into history.
	
	The log file created by the Dataloader service, Datalodr.log, contains specific
	entries for this new functionality to show what the service is doing.
	
	Additional query words: prodsms SP2
	
	======================================================================
	Keywords          : kbnetwork kbDataLoader kbInventory smsinv smsdataloader 
	Technology        : kbSMSSearch kbSMS120SP2
	Version           : :1.2 SP2
	
	=============================================================================
	
