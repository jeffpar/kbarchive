---
layout: page
title: "Q167628: SMS: Missing or Incomplete Inventory in SMS Database"
permalink: /kb/167/Q167628/
---

## Q167628: SMS: Missing or Incomplete Inventory in SMS Database

	Article: Q167628
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDataLoader kbInventory smsinv smsdataloaderkbfaq
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a new computer to the database, Inventory Processor processes the
	.raw file normally and the Dataloader processes the MIF, but the client is not
	added to inventory. No BADMIF is created.
	
	The information in the Dataloadr.log file looks similar to the following:
	
	     Waiting for a MIF...
	     Processing a machine...
	     ~Requesting license for client BP007000
	     ~There is not enough client license to add this machine
	     Finished processing current machine.
	     ~No more machine MIFs to be processed, terminating thread
	
	Additionally, License Manager logs the following error in the primary domain
	controller (PDC) application event log:
	
	     Event Id: 201    Source: License Service
	     No license was available for user BP007000 using product SMS 1.2.
	
	
	The result of this problem is a mismatch of the client record in the database and
	the client's history file. When the next inventory is sent up, Inventory
	Processor compares the .raw file to the history (.hms) file and sends up only a
	Delta MIF to the Dataloader. If Dataloader is able to add the client because
	there are now enough licenses, it will only include the changed properties from
	the Delta MIF. The client properties in the Systems Management Server
	Administrator program will have missing icons for those properties that have not
	changed.
	
	
	CAUSE
	=====
	
	Systems Management Server 1.2 enforces client licenses. If there are no licenses
	available, Dataloader will not add the client to the database.
	
	
	WORKAROUND
	==========
	
	To work around this problem, it is necessary to increase the number of client
	licenses for Systems Management Server and delete the offending client's history
	file.
	
	1. Ensure that you have purchased an adequate number of Systems Management
	  Server client licenses.
	
	2. Start the Windows NT Server License Manager located in the Administrative
	  Tools program group.
	
	3. Click the Clients Per Seat tab.
	
	4. On the License menu, click New License.
	
	5. Add the number of purchased licenses.
	
	6. Quit License Manager.
	
	7. Stop and restart the License Logging Service.
	
	8. Determine the client's Systems Management Server unique ID from either the
	  Systems Management Server Administrator program or the Sms.ini file.
	
	9. On the site server in the Sms\Site.srv\Inventry.box\history directory, delete
	  the corresponding .hms history file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbDataLoader kbInventory smsinv smsdataloader kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
