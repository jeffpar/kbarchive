---
layout: page
title: "Q212937: LAN Sender Continually Tries to Connect to Deleted Child Site"
permalink: /kb/212/Q212937/
---

## Q212937: LAN Sender Continually Tries to Connect to Deleted Child Site

{% raw %}

	Article: Q212937
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbScheduler kbSender kbsmsUtil kbsms200sp2fix kbSMSSender
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	LAN Sender and Scheduler may continue to attempt to connect to a deleted child
	site, delaying other requests. The following status message may be displayed:
	
	  ID 3400 SMS Scheduler does not have an address defined at site <primary
	  site> for site <deleted sitecode>. Files cannot be sent from site
	  <primary site> to site <deleted sitecode> until an address is
	  defined.
	
	.
	
	CAUSE
	=====
	
	When you remove a secondary site, Hierarchy Manager attempts to delete all jobs
	for the deleted site. However, jobs may still be sent to the deleted child site.
	SMS Executive contains many components or threads that can all function
	simultaneously. While Hierarchy Manager is deleting all jobs for the child site,
	Replication Manager, Distribution Manager, or Offer Manager may still be
	creating jobs for the deleted site. If the site has been deleted, these jobs are
	sent for a week (seven days), and then stop.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Run the preinst /delsite and preinst /deljob commands from a command prompt
	  at the parent site. The Preinst.exe tool is available in the
	  Support\Reskit\Bin\<Platform>\Dbmain folder on the Systems Management
	  Server (SMS) CD-ROM.
	
	2. Examine the Sched.log file in the <Drive>:\SMS\Logs folder on the
	  parent site. Look for recent entries with "Send Request" at the beginning of
	  the line, the deleted site code, and a "Pending" state.
	
	3. Locate and delete the referenced file in the SMS\Inboxes\Schedule.box folder
	  or its subfolders.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Systems Management
	Server version 2.0. This problem was first corrected in Systems Management
	Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Scheduler and LAN Sender are thread components of SMS Executive. Scheduler
	manages data transfer between sites, based on user-defined addresses and sending
	schedules.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbScheduler kbSender kbsmsUtil kbsms200sp2fix kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
