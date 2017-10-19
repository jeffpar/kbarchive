---
layout: page
title: "Q302535: SMS: Problems with Smsapm32.exe with No Distribution Points"
permalink: /kb/302/Q302535/
---

## Q302535: SMS: Problems with Smsapm32.exe with No Distribution Points

	Article: Q302535
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program has a mandatory advertisement, but is not mandatory over slow
	links, APM reschedules the program to run at the next run time, which is right
	away. This results in Smsapm32.exe repeatedly trying to run the advertised
	program. During this time, the Smsapm32.log file rolls over very quickly, and
	the Smsapm32.exe process generates a large amount of processor utilization. As
	soon as a valid distribution point is found, the program runs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	A variety of network conditions and errors can generate the symptoms that are
	related to this problem. However, defining user connection limits on the
	distribution point shares (SMSPKGx$) also generates the symptoms.
	
	The following entries from the Smsapm32.log file show some of the Smsapm32.exe
	behavior that is associated with this problem:
	
	SCHEDULER   : Return code = 0x80070043; The network name cannot be 
	found.~~; ERROR: the path is not accessible.  
	SCHEDULER   : The Distribution Point path was not added to the program 
	location list.~  
	SCHEDULER   : Completed enumeration.~ 
	SCHEDULER   : Successfully populated the program location list with 0 
	distribution points from a total available number of 1.~  
	SCHED DATA  : Failed to set up program.  Program location list is not 
	populated.~
	SCHED DATA  : Access to all distribution points is through slow links.~
	SCHED DATA  : Handling an error condition (0xe0040013) for program Manual 
	Test in package Test Application.~ 
	SCHED DATA  : Beginning with a job run status set to 
	APA_RUNSTATUS_NOT_RUNNING.~ 
	SCHED DATA  : The error requires that some type of reschedule action be 
	taken.~ 
	SCHED DATA  : Attempting to get action for failure condition 0xe0040013.~
	SCHEDULER   : The monitor has indicated that a countdown dialog is 
	required before executing a scheduled program.~ 
	SCHED DATA  : This job does  require a countdown dialog.~  
	SCHED DATA  : The network is too slow.  Use the next schedule time.~  
	SCHED DATA  : Returning action code 4.~
	
	The preceding log entries suggest that the network was "too slow". However, this
	is the log entry that occurs when the advertisement property Assignments are not
	mandatory over slow links is enabled and no distribution points are found.
	
	A hotfix does exist for this problem. However, Microsoft recommends that you
	apply the hotfix that is described in the following Microsoft Knowledge Base
	article:
	
	  Q302674 Advertisement Doesn't Run After Distribution Point Is Unavailable
	
	This is a closely-related problem, and the hotfix that is described in that
	article also contains the fix for the problem that is described in this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
