---
layout: page
title: "Q140389: Job Status MIFs Cause Overhead on Central Site"
permalink: /kb/140/Q140389/
---

## Q140389: Job Status MIFs Cause Overhead on Central Site

{% raw %}

	Article: Q140389
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	On a central site with 20,000 inventoried machines, if you send 2 mandatory jobs
	to all machines set to run the same night, in a period of a few hours, close to
	40,000 job status mifs are forwarded to the central site.
	
	This chokes the central site. It takes the dataloader days to catch up, causing
	inventory and events to be delayed. The extra overhead of the despooler
	receiving the packages, and dataloader and site reporter processing the mifs
	would cause the site to slow down.
	
	
	MORE INFORMATION
	================
	
	Distribute the packages from the central site, but connect the UI to each second
	tier site to send the job to all machines in that site and its children. With
	the central site no longer the originating site for the workstation jobs, job
	overhead is distributed to the second tier sites.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbenv kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
