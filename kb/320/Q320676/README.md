---
layout: page
title: "Q320676: SMS: Description of the Job Priorities Used by SMS Components"
permalink: /kb/320/Q320676/
---

## Q320676: SMS: Description of the Job Priorities Used by SMS Components

	Article: Q320676
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Systems Management Server (SMS) 2.0 site server sends data to another
	site server, it can use one of three different job priorities:
	
	- High
	
	- Medium (normal)
	
	- Low
	
	The job priority that is used depends on what type of data is being sent. You can
	also configure the priority for some jobs by using the SMS Administrator
	Console. Before a site server sends data to another site server, it looks at the
	address properties for the destination site to determine which job priorities
	are allowed to be sent.
	
	To configure when the various priorities are accepted, open the SMS Administrator
	console, view the "Site Database\Site Hierarchy\site code\Site
	Settings\Addresses" branch, double-click the address, and then click the
	Schedule tab.
	
	Many SMS components create their own jobs, and for the majority of these you
	cannot configure the priorities. To avoid unintentionally blocking traffic
	between two sites, this article describes job priorities that are used by SMS
	components and indicates which ones are configurable.
	
	High Priority Jobs
	------------------
	
	- Site Control Files. Site Control Files are sent between sites whenever a site
	  configuration change that updates the Site Control File occurs, when a site
	  attaches to a new parent site, when SMS Site Control Manager sends up a
	  heartbeat site control file, and if you run "preinst /SYNCPARENT" (without
	  the quotation marks).
	
	- Package definitions (package properties, program properties and package data
	  files) from a parent site to a child site upon site attachment or when you
	  run "preinst /SYNCCHILD" (without the quotation marks).
	
	- Secondary site installations and upgrades. SMS Hierarchy Manager instructs
	  the sender to perform a secondary site installation or upgrade through a high
	  priority job.
	
	Medium or Normal Priority Jobs
	------------------------------
	
	- Collection creations,updates and deletions.
	
	- Hardware Inventory (MIFs).
	
	- Software Inventory.
	
	- Hardware and Software Inventory resynchronization requests.
	
	- Data Discovery Records.
	
	- Package definitions (package properties, program properties and package data
	  files) to existing sites. The priority is configurable on the Distribution
	  Settings tab in the Package Properties dialog box. Package status files
	  (.sta) from child sites are sent back to the parent site with the same
	  priority at which the package was received.
	
	- Advertisements. The priority is configurable on the Schedule tab in the
	  Advertisement Properties dialog box for a specific advertisement.
	
	- All status messages except client status messages. The priority is
	  configurable on the Action tab under properties for "Site Settings\Status
	  Filter Rules\Replicate all other messages at medium priority".
	
	- Component Status Summaries, Site System Status Summaries and Advertisement
	  Status Summaries. The priorities are configurable on the General tab under
	  properties for "Site Settings\Status Summarizers\Component Status
	  Summarizer", "Site Settings\Status Summarizers\Site System Status Summarizer"
	  and "Site Settings\Status Summarizers\Advertisement Status Summarizer".
	
	Low Priority Jobs
	-----------------
	
	- Client status messages. The priority is configurable on the Action tab under
	  properties for "Site Settings\Status Filter Rules\Replicate all SMS Client
	  messages at low priority".
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
