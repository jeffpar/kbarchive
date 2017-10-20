---
layout: page
title: "Q281718: SMS: The Accumulation of .ddr Files on Secondary Site Servers"
permalink: /kb/281/Q281718/
---

## Q281718: SMS: The Accumulation of .ddr Files on Secondary Site Servers

{% raw %}

	Article: Q281718
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the accumulation of .ddr files on secondary site servers.
	
	MORE INFORMATION
	================
	
	As more clients are discovered and assigned to a secondary site, .ddr files can
	accumulate in the <X>:\Sms\Inboxes\Ddm.box\Data.col folder [where
	<X> is the logical drive on which you have installed Microsoft Systems
	Management Server (SMS)].
	
	Every .ddr file represents a saved copy of the discovery data for a client
	workstation that has been assigned to the site. The .ddr file names correspond
	to the computer resource ID's (identification). In addition, the contents of the
	.ddr files correspond to the computer properties as displayed in the SMS
	Administrator console. The respective .ddr files are updated every time one of
	the discovery methods configured at the site level returns a discovery record.
	
	The accumulation of .ddr files in the <X>:\Sms\Inboxes\Ddm.box\Data.col
	folder in a secondary site server is by design. Similar to a primary site
	server, the secondary site server needs to retain a copy of the discovery
	records for all computers that are assigned to the site. Since the secondary
	site does not utilize a local SQL database in which to store this information,
	the discovery records are stored in the Data.col directory.
	
	When discovery records are processed at a parent site, and if the resource that
	has produced the discovery record is assigned to a secondary site, the discovery
	records are replicated down the hierarchy to the secondary site server as .pdr
	files. The secondary site server recognizes the file extension as a .ddr that
	has already been processed by the parent site. The .pdr files are then stored or
	updated in the Data.col directory as .ddr files.
	
	For further information, please refer to Chapter 17, "Site Server Core Components
	Flow Charts", page 455 of the SMS 2.0 Resource Guide.
	
	Additional query words: prodsms smsdiscovery smssecondary smsddr
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
