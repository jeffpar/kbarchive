---
layout: page
title: "Q246040: SMS: How to Configure the Client Verify Cycle"
permalink: /kb/246/Q246040/
---

## Q246040: SMS: How to Configure the Client Verify Cycle

	Article: Q246040
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 08-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Every 30 days by default, Systems Management Server 2.0 clients go through a
	client verify cycle to ensure that the client components are correctly installed
	and working properly.
	
	You can use the Client Verify tool (Cliverify.exe) to configure the client verify
	cycle on a site-by-site basis. You can use Cliverify.exe to turn off the client
	verify cycle or set it to occur on a different frequency. This tool is currently
	available from Microsoft Product Support Services.
	
	MORE INFORMATION
	================
	
	The client verify cycle can negatively affect environments where network
	bandwidth is limited. Currently, clients must copy all client agents to the
	local computer to verify its installation. This can cause up to 20 MB of data to
	be downloaded to each client computer from a client access point (CAP). The
	amount of actual data varies, depending on which client agents are enabled. This
	can have a detrimental effect on network bandwidth as all clients perform this
	verify cycle on the same day.
	
	You can use Cliverify.exe to change the interval of the client verify cycle. To
	modify the client verify cycle:
	
	1. Start Cliverify.exe, type the name of your Systems Management Server site
	  server, and then click OK.
	
	2. Click to clear the Periodically Verify Client Installation check box to
	  disable this feature, or set the Verify Interval value to an appropriate
	  setting.
	
	3. Click OK.
	
	NOTE: You must perform these steps for each Systems Management Server site server
	on which you want the client verify cycle adjusted.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q239564 SMS: Client Components Reinstalled During Periodic Verification
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
