---
layout: page
title: "Q262384: SMS: Info on Configuring Collection Evaluator Resync Interval"
permalink: /kb/262/Q262384/
---

## Q262384: SMS: Info on Configuring Collection Evaluator Resync Interval

	Article: Q262384
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbConfig kbServer kbsms200 kbCollections kbSoftwareDist
	Last Modified: 22-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0, all collections are refreshed (known as
	a "collection resync") by default every seven days. This schedule is different
	from the individual collection update schedule that can be specified in the SMS
	Administrator Console.
	
	A collection resync sends the collection properties and rules for all collections
	to all primary child sites, and then refreshes the collection membership for all
	collections, to make sure there is consistency between the rules and collection
	membership. It also sends the collection properties and membership list for all
	collections to all secondary sites.
	
	
	With SMS Service Pack 2, this interval is configurable in the following registry
	value:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_Collection_Evaluator\Collection
	  Resync Frequency (number of days)
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In a hierarchy with several collections and several child sites, the resyncs may
	not be desirable during the work week as they could create a backlog for the
	Replication Manager, the Scheduler and the Sender.
	
	- To disable the collection resyncs, set the "Collection Resync Frequency
	  (number of days)" value to 0.
	
	- To schedule the collection resyncs for every Saturday for instance, set the
	  value to 0 during the week, and on the first Saturday, change it back to 7.
	  The updates will then occur every Saturday.
	
	  Note: If the server is powered down for more than a day, the schedule may
	  become misaligned and may need to be re-established.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbServer kbsms200 kbCollections kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
