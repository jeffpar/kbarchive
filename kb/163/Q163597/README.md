---
layout: page
title: "Q163597: SMS: PCM Service Leaves Drive Letters Connected"
permalink: /kb/163/Q163597/
---

## Q163597: SMS: PCM Service Leaves Drive Letters Connected

{% raw %}

	Article: Q163597
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Run Command on Workstation packages may leave drive letters mapped after a
	package has completed running when the packages are run through the Package
	Command Manager (PCM) service (Pcmsvc32.exe) on client computers running Windows
	NT Workstation.
	
	CAUSE
	=====
	
	This is a result of files being left open on the package share after the
	application has completed running. PCM detects that the application has
	terminated, and tries to disconnect the drive to the package share. However,
	because the package has left one or more files open, PCM is unable to disconnect
	the drive that it connected.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
