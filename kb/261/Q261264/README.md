---
layout: page
title: "Q261264: Application Program Manager May Generate Exception Error Msgs"
permalink: kb/261/Q261264/
---

## Q261264: Application Program Manager May Generate Exception Error Msgs

	Article: Q261264
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 06-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple threads of APM32 attempt to manipulate Application Program Manager
	(APM) schedule data at the same time, APM32 generates an exception error
	message. When this occurs, you may see an identical time stamp in two different
	threads in consecutive lines of the Smsapm32.log file. For example, your
	computer screen may display the following messages:
	
	  SCHED DATA : Removing file
	  C:\Windows\Ms\Sms\Clicomp\Apa\Data\Complete\DFD00029.000
	
	  EXCEPTION EXCEPTION EXCEPTION APM Wed Jan 19 06:31:35.090 2000
	  thread=4230563935 (0xFC29485F)
	
	APM restarts, but the error may be reported if you have set up status filter
	rules to trap exceptions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
