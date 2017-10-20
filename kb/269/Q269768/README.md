---
layout: page
title: "Q269768: SMS: Deleted PCM Client Instruction Files Can Be Viewed"
permalink: /kb/269/Q269768/
---

## Q269768: SMS: Deleted PCM Client Instruction Files Can Be Viewed

{% raw %}

	Article: Q269768
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbClient kbsms120 kbPCM kbPackage kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be able to view Package Command Manager (PCM) client instruction files
	that are located on the site and the logon servers that contain references to
	packages that have been deleted.
	
	CAUSE
	=====
	
	This issue can occur if you deleted the packages manually instead of using a
	"Remove package from server" job to remove the packages. In addition, the Run
	Command job that sends the packages may have been deleted without being
	cancelled first.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the client's PCM instruction file from the
	following locations:
	
	- On the site server:
	  \SMS\Site.Srv\Maincfg.box\PCMDom.Box\<domainname>.<xxx>
	
	- On each Systems Management Server (SMS) logon server:
	  \SMS\Logon.srv\PCMIns.Box
	
	NOTE: The .ins files must be deleted from each logon server because the
	Maintenance Manager service does not delete these files.
	
	IMPORTANT: When you follow this procedure, any existing package instructions are
	lost. Any packages that you want to run on the client must be sent with new
	jobs.
	
	MORE INFORMATION
	================
	
	You can use the method in the preceding section to prevent a client from
	deploying a package that it was not supposed to receive.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms120 kbPCM kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
