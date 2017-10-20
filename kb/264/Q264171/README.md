---
layout: page
title: "Q264171: Incomplete Secondary Site Removal Creates Component Status 3400"
permalink: /kb/264/Q264171/
---

## Q264171: Incomplete Secondary Site Removal Creates Component Status 3400

{% raw %}

	Article: Q264171
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbPackage kbScheduler kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a System Management Server (SMS) 2.0 secondary site server removal process
	is incomplete it may leave behind active send request and job files on the
	parent site. The following messages may be reported by the SMS Scheduler
	Component under Component Status:
	
	  ID=3400: SMS Scheduler does not have an address defined at site %2 for site
	  %1. Files cannot be sent from site %2 to site %1 until an address is defined.
	
	  Solution: Define a valid address at site %2 for site %1 in the SMS
	  Administrator console under Site Hierarchy -> %2 -> Site Settings ->
	  Addresses.
	
	CAUSE
	=====
	
	This issue can occur if there is still a valid send request and job file left
	behind on the parent site to remove the secondary site server. When this occurs,
	the secondary site does not exist, so the message continues unless you remove
	the send request and job file.
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	NOTE: Use one of the following methods and verify that the old site is completely
	removed before you install a new site with the same site code.
	
	Method 1
	--------
	
	The preferred method to delete all jobs that are targeted to the child site is to
	use the Preinst.exe utility. However, this can cause a problem in a situation
	where you have other active jobs for the same site code (ZZZ). This may occur if
	you decided to utilize a different computer and want to use the same site code.
	In this situation you should use method 2.
	
	Because there could be additional jobs or send requests waiting in the queue, you
	should perform these steps more than once to verify that all items have been
	purged.
	
	The Preinst.exe utility is part of the System Management Server Resource Kit as
	well as the System Management Server CD Supportability Files.
	
	To delete all jobs, type "Preinst /DELJOB:<ZZZ>" (without the quotation
	marks) from the Parent site, and then press ENTER, where <ZZZ> is the old
	site code.
	
	Method 2
	--------
	
	1. Stop the SMS Executive Service and the SMS Site Component Manager Service.
	
	2. Examine the Sched.log file in the Sms\Logs folder to locate the reference to
	  the old secondary site, and note the old site code.
	
	3. Determine and note the send request ID (for example, 1_001ZZZ) and the job ID
	  (for example, 00000001).
	
	4. Under \SMS\Inboxes\Schedule.box\Requests, remove the .srq file with the name
	  of the send request ID you noted in step 3.
	
	5. Under \SMS\Inboxes\Schedule.box, remove the .job file with the job ID you
	  noted in step 3.
	
	6. Start the SMS Site Component Manager and the SMS Executive services and then
	  examine the log to ensure that there are no more references to this job for
	  the secondary site.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbServer kbsms200 kbPackage kbScheduler kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
